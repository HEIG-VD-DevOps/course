# Fluentd DaemonSet — Adaptations pour le cluster IICT

Le manifest officiel du tutoriel https://docs.fluentd.org/container-deployment/kubernetes nécessite plusieurs adaptations pour fonctionner sur le cluster du cours. Cette page liste chaque modification et explique pourquoi elle est nécessaire.

---

## 1 — Namespace : `kube-system` → namespace étudiant

Le tutoriel cible le namespace `kube-system`. Les étudiants n'ont pas les droits dans ce namespace sur le cluster IICT. Toutes les ressources doivent être déployées dans le namespace assigné au groupe.

## 2 — Chemin du volume de logs

Le manifest du tutoriel propose deux options selon le runtime de conteneur :

```yaml
# Docker runtime
- name: dockercontainerlogdirectory
  mountPath: /var/lib/docker/containers

# containerd runtime
- name: dockercontainerlogdirectory
  mountPath: /var/log/pods
```

Le cluster IICT utilise **containerd** — activer le chemin `/var/log/pods`.

## 3 — Type de parser : défaut → `none`

```yaml
# À ajouter — absent du tutoriel
- name: FLUENT_CONTAINER_TAIL_PARSER_TYPE
  value: "none"
```

Le cluster IICT utilise containerd configuré avec l'heure locale (`+02:00`). Le parser CRI par défaut attend des timestamps UTC (`Z`) et rejette chaque ligne avec l'erreur `invalid time format`. Le parser `none` ignore le parsing du temps — les logs arrivent dans Elasticsearch avec l'heure d'ingestion comme timestamp.

## 4 — Exclusion des logs propres à Fluentd

```yaml
# À ajouter — absent du tutoriel
- name: FLUENT_CONTAINER_TAIL_EXCLUDE_PATH
  value: "/var/log/containers/fluentd*"
```

Fluentd surveille tous les fichiers dans `/var/log/containers/*.log`, y compris son propre fichier de log. Chaque avertissement qu'il écrit est relu, ce qui déclenche un nouvel avertissement — créant une boucle récursive avec des logs exponentiellement imbriqués. Exclure ses propres fichiers stoppe ce comportement.

## 5 — Limite mémoire : `200Mi` → `512Mi`

```yaml
# Tutoriel
resources:
  limits:
    memory: 200Mi
  requests:
    cpu: 100m
    memory: 200Mi

# Cluster IICT
resources:
  limits:
    memory: 512Mi
  requests:
    cpu: 100m
    memory: 256Mi
```

La limite de `200Mi` du tutoriel provoque un OOMKilled au démarrage lorsque Fluentd traite le backlog de logs existant sur un cluster actif avec de nombreux namespaces.

## 6 — Vérification SSL : `true` → `false`

```yaml
# Tutoriel
- name: FLUENT_ELASTICSEARCH_SSL_VERIFY
  value: "true"

# Cluster IICT
- name: FLUENT_ELASTICSEARCH_SSL_VERIFY
  value: "false"
```

Le déploiement Elasticsearch utilisé dans ce lab n'a pas de TLS activé (`xpack.security.enabled: false`). La vérification SSL doit être désactivée, sinon Fluentd refuse de se connecter.

## 7 — Suppression de la version SSL et des credentials X-Pack

```yaml
# Présents dans le tutoriel — à supprimer
- name: FLUENT_ELASTICSEARCH_SSL_VERSION
  value: "TLSv1_2"
- name: FLUENT_ELASTICSEARCH_USER
  value: "elastic"
- name: FLUENT_ELASTICSEARCH_PASSWORD
  value: "changeme"
```

Ces variables ne sont utiles que lorsque `xpack.security.enabled: true`. Les conserver avec la sécurité désactivée n'empêche pas le fonctionnement mais prête à confusion.
