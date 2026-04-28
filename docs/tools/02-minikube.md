# Minikube

Minikube permet de faire tourner un cluster Kubernetes local sur sa machine, sans accès à un cluster distant. Il est utilisé pour les labs qui requièrent un environnement Kubernetes isolé.

---

## Installation

### macOS
```bash
brew install minikube
```

### Windows (PowerShell en administrateur)
```powershell
winget install Kubernetes.minikube
```

### Linux (Debian/Ubuntu)
```bash
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
```

Vérifier l'installation :
```bash
minikube version
```

---

## Démarrer le cluster

```bash
minikube start
```

Au premier démarrage, minikube télécharge une image de VM — cela peut prendre quelques minutes.

---

## Configurer kubectl

> ⚠️ **Important — vérifier le contexte avant toute commande `kubectl`**
> Une erreur de contexte peut modifier un cluster partagé ou de production.

`minikube start` configure automatiquement `kubectl` pour pointer vers le cluster local. Vérifier que le contexte actif est bien `minikube` :

```bash
kubectl config get-contexts
```

Exemple :
```
CURRENT   NAME            CLUSTER         AUTHINFO        NAMESPACE
          iict-students   iict-students   iict-students   test
*         minikube        minikube        minikube        default
```

Le `*` doit être sur `minikube`. Si ce n'est pas le cas :

```bash
kubectl config use-context minikube
```

Vérifier que le cluster répond :
```bash
kubectl get nodes
```

---

## Accéder aux services depuis le host

Les services Kubernetes ne sont pas accessibles depuis le navigateur par défaut. Utiliser `kubectl port-forward` pour exposer un service sur localhost :

```bash
kubectl port-forward service/<nom-du-service> <port-local>:<port-service> -n <namespace>
```

Exemple pour accéder à Elasticsearch sur le port 9200 :
```bash
kubectl port-forward service/elasticsearch-logging 9200:9200 -n lab08-logs
# → http://localhost:9200
```

> Le port-forward reste actif tant que le terminal est ouvert. `Ctrl+C` pour arrêter.

---

## Commandes utiles

| Commande | Description |
|---|---|
| `minikube status` | État du cluster |
| `minikube stop` | Arrêter le cluster (conserve l'état) |
| `minikube delete` | Supprimer le cluster complètement |
| `minikube dashboard` | Ouvrir le dashboard Kubernetes dans le navigateur |
| `kubectl config current-context` | Contexte kubectl actif |
| `kubectl get all -n <namespace>` | Lister toutes les ressources d'un namespace |

---

## Reprendre après un redémarrage

```bash
minikube start
kubectl config use-context minikube
kubectl get nodes
```
