# Kubernetes

## Objectifs

- Estimer son travail
- Accéder au cluster Kubernetes du cours (Rancher: `https://rke2.iict-heig-vd.in`)
- Déployer une application sur Kubernetes
- Créer un fichier `deployment.yaml` pour déployer l'application

## Rendu

- Rapport individuel en Markdown à rendre avant le prochain cours
  - GitHub Classroom : [https://classroom.github.com/a/4Jw9ryIy](https://classroom.github.com/a/4Jw9ryIy)
  - Nom du fichier : `report.md` à la racine du répertoire
  - Avec le lien vers la Merge Request GitLab
- Délai: 2 semaines

## Tâches

### Estimer son travail

- Estimer le temps nécessaire pour réaliser ce travail.
  - Découper le travail en tâches pour faciliter l'estimation.
- Une fois terminé, comparer le temps estimé avec le temps réellement passé.


| Tâche      | Temps estimé | Temps passé | Commentaire |
| ---------- | ------------ | ----------- | ----------- |
| Estimation | 10m          | 15m         | ...         |
| ...        | ...          | ...         | ...         |
| Total      | 2h           | 1h30        | ...         |


### Accéder au cluster du cours

> Il est possible de commencer les exercices avec minikube en local, mais le rendu final doit être réalisé sur le cluster Rancher du cours (`https://rke2.iict-heig-vd.in`).

- Suivre les instructions de configuration du cluster du cours : [/docs/tools/kubernetes](/docs/tools/kubernetes)
  - Accéder au réseau HEIG-VD (ou VPN)
  - Récupérer le `KubeConfig` depuis Rancher
  - Configurer `kubectl` localement
  - Définir le namespace de votre groupe par défaut
- Vérifier les permissions dans votre namespace :
  - `kubectl get pods`
  - `kubectl auth can-i create deployment`
  - `kubectl auth can-i create service`
  - `kubectl auth can-i create ingress`
### Déployer une application

Déployer une application sur Kubernetes. Les instructions suivantes utilise [https://gitlab.com/blueur/heig-vd-devops](https://gitlab.com/blueur/heig-vd-devops) mais c'est mieux d'utiliser sa propre version de l'application.

#### GUI

Déployer l'application sur Kubernetes en utilisant le dashboard Rancher.

- Ouvrir `iict-students` puis aller dans `Workloads` > `Deployments`.
- Cliquer sur `Create`.
- Vérifier le `Namespace` sélectionné (namespace de groupe).
- Créer des composants en type `Deployment`.
- Déployer le frontend
  - Dans `Deployment > Create` :
    - `Namespace`: votre namespace de groupe (ex: `test`)
    - `Name`: `frontend`
    - `Replicas`: `1`
  - Dans `Pod > container-0 > General` :
    - `Container Name`: `container-0` (laisser par défaut)
    - `Image`: `registry.gitlab.com/blueur/heig-vd-devops/frontend:latest`
  - Dans `Pod > container-0 > Networking` :
    - `Service Type`: `Cluster IP`
    - `Name`: `frontend`
    - `Private Container Port`: `80`
    - `Protocol`: `TCP`
  - Cliquer sur `Create`
  - Vérifier que `Deployment/frontend` devient `Ready`
  - Pour un test rapide avant ingress : `kubectl port-forward svc/frontend 8080:80`
    - Option navigateur : ouvrir http://127.0.0.1:8080
- Déployer une base de donnée
  - Dans `Deployment > Create` :
    - `Namespace`: votre namespace de groupe (ex: `test`)
    - `Name`: `database`
    - `Replicas`: `1`
  - Dans `Pod > container-0 > General` :
    - `Container Name`: `container-0` (laisser par défaut)
    - `Image`: `postgres:16-alpine`
  - Dans `Pod > container-0 > Networking` :
    - Click "Add Port or Service"
    - `Service Type`: `Cluster IP`
    - `Name`: `database`
    - `Private Container Port`: `5432`
    - `Protocol`: `TCP`
  - Dans `Pod > container-0 > Environment Variables` :
    - Click on "Add Valiable"
    - Ajouter `POSTGRES_PASSWORD=postgres`
  - Cliquer sur `Create`
  - Vérifier que `Deployment/database` devient `Ready`
- Déployer le backend
  - Dans `Deployment > Create` :
    - `Namespace`: votre namespace de groupe
    - `Name`: `backend`
    - `Replicas`: `1`
  - Dans `Pod > container-0 > General` :
    - `Container Name`: `container-0` (laisser par défaut)
    - `Image`: `registry.gitlab.com/blueur/heig-vd-devops/backend:latest`
  - Dans `Pod > container-0 > Networking` :
    - `Service Type`: `Cluster IP`
    - `Name`: `backend`
    - `Private Container Port`: `80`
    - `Protocol`: `TCP`
  - Dans `Pod > container-0 > Environment Variables` :
    - Ajouter `POSTGRES_HOST=database`
    - Ajouter `POSTGRES_PASSWORD=postgres`
    - Ajouter `ROOT_PATH=/api`
  - Cliquer sur `Create`
  - Vérifier que `Deployment/backend` devient `Ready`
- Créer un ingress
  - Ouvrir `Service Discovery` > `Ingresses` dans votre namespace de groupe.
  - Cliquer sur `Create` puis `Edit as YAML`
  - Coller le manifeste suivant :
    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: heig-vd-devops-ingress
      namespace: <your namespace>
      annotations:
        nginx.ingress.kubernetes.io/use-regex: "true"
        nginx.ingress.kubernetes.io/rewrite-target: /$1
    spec:
      ingressClassName: nginx
      rules:
        - host: \<vos_initiales\>-devops.iict-students.iict-heig-vd.in
          http:
            paths:
              - path: /?(.*)
                pathType: ImplementationSpecific
                backend:
                  service:
                    name: frontend
                    port:
                      number: 80
              - path: /api/?(.*)
                pathType: ImplementationSpecific
                backend:
                  service:
                    name: backend
                    port:
                      number: 80
    ```
  - Note : remplacez \<vos_initiales\> par les initiales d'un membre du groupe ou
    un nom. Ce n'est pas important, il faut juste que ce soit unique. L'hôte
    configuré corresponds alors à l'adresse de votre ingress.
  - Cliquer sur `Create`.
  - Vérifier que l'ingress est présent avec `kubectl get ingress`.
- Tester l'application via l'ingress
  - Vérifier l'ingress : `kubectl get ingress`
  - Tester via l'adresse ingress affichée :
    - Frontend : `curl -i http://<INGRESS_ADDRESS>/`
    - Backend : `curl -i http://<INGRESS_ADDRESS>/api/docs`
 
- Valider la répartition de charge sur 2 replicas
  - Scale le deployment frontend à 2 replicas :
    - `kubectl scale deployment/frontend --replicas=2`
    - `kubectl get deployment frontend`
    - Vérifier `READY 2/2` et `AVAILABLE 2`.
  - Envoyer du trafic vers l'ingress :
    - `for i in {1..30}; do curl -s http://<INGRESS_ADDRESS>/ > /dev/null; done`
    - Option navigateur : ouvrir `http://<INGRESS_ADDRESS>/` puis rafraîchir la page plusieurs fois.
  - Lister les pods frontend :
    - `kubectl get pods`
  - Vérifier les logs sur les deux pods frontend (remplacer par vos noms de pods) :
    - `kubectl logs <frontend-pod-1> --tail=50`
    - `kubectl logs <frontend-pod-2> --tail=50`
  - Validation attendue : les deux pods affichent des requêtes `GET /`.

#### CLI

- Suivre les instructions pour créer une application stateless : [https://kubernetes.io/docs/tasks/run-application/run-stateless-application-deployment/](https://kubernetes.io/docs/tasks/run-application/run-stateless-application-deployment/)
- Suivre les instructions pour créer une application stateful : [https://kubernetes.io/docs/tasks/run-application/run-single-instance-stateful-application/](https://kubernetes.io/docs/tasks/run-application/run-single-instance-stateful-application/)
- Créer un fichier `deployment.yaml` à la racine de votre repository qui permet de déployer votre application sur Kubernetes.
  - Il doit être possible de déployer ou mettre à jour toute l'application avec `kubectl apply -f deployment.yaml`
- Déployer votre application sur un nouveau [namespace](https://kubernetes.io/docs/tasks/administer-cluster/namespaces/)

