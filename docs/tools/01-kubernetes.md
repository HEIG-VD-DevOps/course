# Kubernetes

## Cluster du cours

Il faut être sur le réseau de l'HEIG-VD pour accéder au cluster Kubernetes du cours.  
Au besoin, utiliser un VPN : [vpn.heig-vd.ch](https://vpn.heig-vd.ch)

- Rancher (login) : `https://rke2.iict-heig-vd.in/dashboard/auth/login?timed-out`
  - Se connecter avec le compte HES-SO (AD).
  - Ouvrir le cluster `iict-students` : `https://rke2.iict-heig-vd.in/dashboard/c/c-m-jksmqh24/explorer#cluster-events`

### Kubectl

- Configurer son `kubectl` local afin de pouvoir accéder au cluster Kubernetes du cours :
  - Dans Rancher, ouvrir `iict-students` puis cliquer sur `Download Kubeconfig`.
  - Télécharger le fichier de configuration `KubeConfig`.
  - Le fichier de configuration actuel est probablement `~/.kube/config`.
    - S'il existe, fusionner les deux fichiers ensemble : [Kubeconfig file references](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#file-references)
    - S'il n'existe pas, déplacer le fichier téléchargé à cet emplacement.
- Vérifier l'accès au cluster :
  - `kubectl config get-contexts`
  - `kubectl get namespaces`
- Configurer le [namespace](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/#setting-the-namespace-preference) par défaut : `kubectl config set-context --current --namespace=<namespace>`

### Contexte

Pour changer de contexte, il y a trois façons :

- En ligne de commande : `kubectl config use-context <context>` (et pour les lister `kubectl config get-contexts`)
- Avec [Docker Desktop](https://docs.docker.com/desktop/kubernetes/#switch-between-clusters)
- Utiliser l'[extension VS Code Kubernetes](https://marketplace.visualstudio.com/items?itemName=ms-kubernetes-tools.vscode-kubernetes-tools)

### Ingress

Pour accéder à vos applications, configurer un Ingress :

- Choisir un nom de sous-domaine de `k8s.heig-vd.blueur.com` (par exemple `exemple.k8s.heig-vd.blueur.com`).
- Indiquer le nom de domaine choisi dans la configuration de l'ingress dans `spec.rules.host`.
- L'application devrait être accessible à l'adresse choisie.
