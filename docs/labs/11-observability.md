# Observabilité

## Objectifs

- Estimer son travail
- Dockeriser une application Spring Boot
- Instrumenter une application Spring Boot pour la visualisation des logs, métriques et traces
- Configurer un dashboard dans Kibana
- Configurer un dashboard dans Grafana

## Rendu

- Rapport individuel en Markdown à rendre avant le prochain cours
  - GitHub Classroom : https://classroom.github.com/a/w1BQy_0L
  - Nom du fichier : `report.md` à la racine du répertoire
  - Code directement sur GitHub Classroom
- Délai: 2 semaines
  - Rendu intermédiaire après 1 semaine pour avoir un retour sur le travail effectué

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

### Mise en place

Ce projet reprend [demotory](https://github.com/blueur/demotory) qui est le point de départ sur GitHub Classroom.

```bash
mvn spring-boot:run
```

http://localhost:8080

### Docker Compose

- Dockeriser l'application
  - Utiliser `eclipse-temurin:17-jre` (Debian-based) comme image runtime — la variante `-alpine` ne dispose pas d'image ARM64 et échoue sur les machines Apple Silicon.
- Créer un Docker Compose pour lancer l'application
  - `docker compose up`
- Utiliser les [profiles](https://docs.docker.com/compose/profiles/) pour activer/désactiver les outils APM

### Instrumentation

Instrumenter l'application en justifiant vos choix d'outils

- Le Docker Compose doit exposer les services suivants:
  - **Kibana** pour visualiser les logs sur http://localhost:5601
  - **Grafana** pour visualiser les métriques sur http://localhost:3000
    - **Prometheus** pour récupérer les métriques sur http://localhost:9090
  - **Jaeger** pour visualiser les traces sur http://localhost:16686
- Documenter les configurations manuelles à faire après avoir lancé `docker compose --profile observability up` dans le `README.md`
  - Exemple: ajouter des dashboards dans Kibana et Grafana
  - Vous pouvez ajouter des screenshots dans la documentation

#### Logs avec Kibana

Visualiser les logs de tous les containers (application + outils APM) dans Kibana.

Bonus :

- Gérer les stacktraces qui sont sur plusieurs lignes (regrouper la stacktrace en un seul record)

#### Métriques avec Grafana

Visualiser les métriques de tous les containers (application + outils APM) dans Grafana.

> **Note :** Elasticsearch et Kibana n'exposent pas de métriques au format Prometheus nativement — seuls Prometheus, Grafana et Jaeger exposent nativement des métriques scrappables. Il n'est pas nécessaire d'ajouter un exporter pour ce lab.

Le dashboard doit contenir au minimum un panel par service instrumenté :

- **Application** — métriques JVM (mémoire heap, threads) et HTTP (taux de requêtes)
- **Prometheus** — métriques internes du scraper (ex: durée de scrape par job)
- **Grafana** — métriques HTTP de Grafana lui-même
- **Jaeger** — métriques du collecteur (ex: spans reçus)

> **Note :** Lors de la création d'un panel, sélectionner explicitement **Prometheus** comme datasource dans le menu déroulant du panel editor. Le datasource par défaut ne retourne aucune donnée même avec une requête PromQL correcte.

> **Note :** Si vos panels `rate()` n'affichent aucune donnée, réduire la fenêtre temporelle à **Last 15 minutes** — `rate()` nécessite au moins 2 points de scrape dans la fenêtre sélectionnée.

Bonus :

- Ajouter des métriques personnalisées de l'application
  - Nombre d'entrées dans la map sous forme de [Gauge](https://opentelemetry.io/docs/specs/otel/metrics/data-model/#gauge)
  - Nombre de changements de la map sous forme de [Sums](https://opentelemetry.io/docs/specs/otel/metrics/data-model/#sums)

#### Traces avec Jaeger

Visualiser les traces de l'application dans Jaeger.

> **Note :** Le nom du service visible dans Jaeger est contrôlé par la variable d'environnement `OTEL_SERVICE_NAME`. La propriété `spring.application.name` seule ne suffit pas avec Spring Boot 3.2 + `micrometer-tracing-bridge-otel`.
>
> ```yaml
> environment:
>   - OTEL_SERVICE_NAME=demotory
> ```

Bonus :

- Déployer aussi Zipkin et visualiser les traces dans Zipkin
- Comparer les deux outils

### Rapport

- Indiquer dans votre rapport votre démarche ainsi que les difficultés rencontrées
- Expliquer tous les choix techniques que vous avez fait (sauf ceux indiqués)

## Evaluation

L'évaluation se porte sur les critères suivants :

- Organisation
  - [ ] 1. **Le rendu est correct et dans les temps.**
  - [ ] 2. **Documentation (README.md) des configurations manuelles, de l'application et des APMs.**
  - [ ] 3. _Le rapport (report.md) est complet (explication de la démarche et des choix techniques) et synthétique._
- Docker
  - [ ] 4. **Bonne dockerisation & Utilisation des profiles** _(vaut 2 critères — observez les feedbacks des labos précédents)_
- Logs
  - [ ] 5. **Visualisation des logs de l'application dans Kibana.**
  - [ ] 6. _Ajout des logs de tous les services & Stacktraces regroupées & Dashboard_
- Métriques
  - [ ] 7. **Visualisation des métriques de l'application dans Grafana.**
  - [ ] 8. _Ajout des métriques de tous les services_
  - [ ] _Bonus : Gauge et Sums_
- Traces
  - [ ] 9. **Visualisation des traces de l'application dans Jaeger.**
  - [ ] _Bonus : Visualisation des traces dans Zipkin & Comparaison avec Zipkin_
- Bonus
  - _Le bonus peut rattraper des points perdus sur un autre critère de sa catégorie._

**Note = 1 + points validés** (min : 1 — max : 6)

| Critère |  1  |  2  |  3  |   4   |  5  |  6  |  7  |  8  |  9  | Total |
| :-----: | :-: | :-: | :-: | :---: | :-: | :-: | :-: | :-: | :-: | :---: |
| Points  | 0.5 | 0.5 | 0.5 | **1.0** | 0.5 | 0.5 | 0.5 | 0.5 | 0.5 | **5.0** |

- **En gras** : critères principaux.
- _En italique_ : critères secondaires / bonus.
