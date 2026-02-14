# 01 Tools

## GitLab

- Préférer les messages de commit en anglais.
- Commencer les messages de commit par un verbe à l'impératif.
- Séparer l'ajout du backend et du frontend dans des commits distincts.
- Ne pas versionner pycache.
- Ne pas versionner node_modules.
- Mettre le fichier main.py dans le dossier backend déjà existant (ne pas le créer).
- Il manque la pull request sur GitLab.

## Rapport

- Regarder https://www.conventionalcommits.org/fr/v1.0.0/
- Il manque le total du temps de travail estimé et/ou réel.
- Il manque le rapport sur GitHub Classroom.

# 02 Docker

- Les dépendances de l'application ne doivent être qu'à un seul endroit (pour les futurs mise à jour).
- Dockerignore ?
- Fixer les versions mineurs des images Docker.
- Pas besoin de Poetry dans l'image finale.
- Il ne faut pas lancer en mode dev pour la prod.
- Constance dans les messages de commit.
- Dépendance entre les services Docker ?

# 03 Compose

- Le Makefile doit être juste un raccourci des commandes.
- Les variables d'environnements sont à mettre dans un fichier .env.
- Les données de connection à la base de données ne doivent pas être en dur dans le back

# 04 CI/CD

- Les dernières pipelines ne passent pas.
- Il doit avoir au moins la CI pour le frontend et le backend.
- Le rapport des unit tests ne sont pas envoyés à GitLab.
- Les stages utilisés par les `include` doivent être présents dans le fichier principal (soit par défaut, soit explicite). Par exemple :
  - Dependency Scanning utilise `test` : https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Jobs/Dependency-Scanning.gitlab-ci.yml
  - SAST utilise `test` : https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/SAST.gitlab-ci.yml
- Les `include` de GitLab se trouvent sur https://gitlab.com/gitlab-org/gitlab/-/tree/master/lib/gitlab/ci/templates/Jobs

# 05 Kubernetes

- Le frontend n'arrive pas à se connecter au backend (vérifier le chemin du backend).
- Les labels ne sont pas les mêmes entre le déploiement et le pod.
- Les labels ne sont pas les mêmes entre le service et le pod.

# 06 CI/CD Java

- Pourquoi eclipse-temurin ou openjdk comme base image ?
- Pas besoin du code source dans l'image finale.
- Numéro de version de l'application hardcodé dans le Dockerfile.
- Numéro de version de Java ou Maven trop ou pas assez précis.
- JRE dans l'image finale.
- Le .jar doit être build par Docker.
- Pas alpine.
- Pas besoin de Maven dans l'image finale.
- Le job de test dans la pipeline rebuild entièrement l'application. Peut être utiliser un cache ?
- Les jobs de test et de build re-téléchargent les dépendances Maven. Peut être utiliser un cache ?
- Unit test report non fonctionnel.
- Coverage report non fonctionnel.

# 07 Helm

- Lors de la reprise d'un template, commencer par le nettoyer des éléments non nécessaires.
- Les limitations de ressources minimales indiquent une réservation.
- Les limitations de ressources maximales indiquent un quota.
- Quelles sont les stratégies de déploiement disponibles dans Kubernetes ?
- Réponses plus synthétiques et plus naturelles.
- Possible de séparer les définitions dans plusieurs fichiers avec Helm pour améliorer la lisibilité.

# 08 Logs

- Les logs sont bien parsés sur Kibana.
- Au moins voir les logs dans Kibana (parsing d'Apache pas essentiel).
- Création de graphiques sur Kibana.

# 09 Métriques

- Vérifier la compréhension du fonctionnement de Prometheus.

# 10 Traces

- Différencier pull et push
- Les traces sont bien envoyées à Jaeger.

# 11 Observabilité

- Pourquoi eclipse-temurin ou openjdk comme base image ?
- Pas besoin du code source dans l'image finale.
- Numéro de version de l'application hardcodé dans le Dockerfile.
- Numéro de version de Java ou Maven trop ou pas assez précis.
- JRE dans l'image finale.
- Le .jar doit être build par Docker.
- Pas alpine.
- Pas besoin de Maven dans l'image finale.
- Séparer le rapport du labo (report.md) avec l'utilisation de l'application (readme.md).
- Comment lancer les services ?
