import { Columns, Image, List, Section, Text } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Telemetry(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="telemetry"
      title="Télémesure"
      subTitle="DevOps"
    >
      <Section level={2} title="Télémesure vs Télémétrie">
        <List
          fragment={[false, true]}
          items={[
            ["_Télémesure_", ["Technique de mesure **à** distance"]],
            ["_Télémétrie_", ["Technique de mesure **des** distances"]],
          ]}
        />
        <br />
        <Text fragment>**Telemetry** = Télémesure</Text>
      </Section>
      <Section level={3} title="Pourquoi la télémesure ?">
        <List
          fragment
          items={[
            "**Centralisation** des données",
            "**Visualisation** des données",
            "**Alerting** sur les données",
            [
              "Utilisation d'un **APM** (Application Performance Monitoring)",
              ["**Outils** de télémesure pour les applications"],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="OpenTelemetry">
        <List
          fragment
          items={[
            "**Standard** open source des données de télémesure (observabilité)",
            "**Compatibilité** et **Interopérabilité** entre les outils de télémesure",
            "**Facilite** l'instrumentation des applications",
          ]}
        />
      </Section>
      <Section level={3} title="Universal Converter Box">
        <Image
          src="https://imgs.xkcd.com/comics/universal_converter_box.png"
          url="https://xkcd.com/1406/"
        />
      </Section>
      <Section level={3} title="Signaux">
        <List
          fragment={[true, true]}
          items={[
            [
              "4 [signals](https://opentelemetry.io/docs/concepts/signals/) (catégories de télémesure) :",
              [
                "[Traces](https://opentelemetry.io/docs/concepts/signals/traces/) (déroulement d'une requête)",
                "[Metrics](https://opentelemetry.io/docs/concepts/signals/metrics/) (valeurs mesurées)",
                "[Logs](https://opentelemetry.io/docs/concepts/signals/logs/) (texte structuré ou non)",
                "[Baggage](https://opentelemetry.io/docs/concepts/signals/baggage/) (données partagées entre les spans)",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={4} title="Trace & Span">
        <Image
          src="https://miro.medium.com/v2/1*Yu0bCux_sulHPy6MhT9Ytg.png"
          url="https://medium.com/nikeengineering/hit-the-ground-running-with-distributed-tracing-core-concepts-ff5ad47c7058"
          height="700px"
        />
        <List
          fragment
          items={["**Trace** : ensemble de **spans** (étapes d'une requête)"]}
        />
      </Section>
      <Section level={4} title="Relations">
        <Columns>
          <Image
            src="https://opentracing.io/img/OTHT_0.png"
            url="https://opentracing.io/docs/best-practices/instrumenting-your-application/"
          />
          <Image
            src="https://opentracing.io/img/OTHT_1.png"
            url="https://opentracing.io/docs/best-practices/instrumenting-your-application/"
          />
        </Columns>
      </Section>
      <Section level={3} title="Instrumentation">
        <List
          fragment
          items={[
            "Pour rendre un système **observable**, il faut l'**instrumenter**",
            "Il émets des **signaux** qui seront **collectés**",
            "L'instrumentation peut être **automatique** ou **manuel**",
          ]}
        />
      </Section>
      <Section level={2} title="Prometheus">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg"
          url="https://commons.wikimedia.org/wiki/File:Prometheus_software_logo.svg"
          height="256px"
        />
        <List
          fragment
          items={[
            "**Collecte** et **stockage** de métriques en **time series**",
            "**Alerting** sur les métriques",
            "Visualisation avec **Grafana**",
            "Depuis 2012 par SoundCloud, CNCF depuis 2016",
          ]}
        />
      </Section>
      <Section level={3} title="Architecture">
        <Image
          src="https://training.promlabs.com/static/prometheus-architecture-a119718f561df181406e112e6174d907.svg"
          url="https://training.promlabs.com/training/introduction-to-prometheus/prometheus-an-overview/system-architecture"
        />
      </Section>
      <Section level={2} title="Grafana">
        <Image
          src="https://grafana.com/media/docs/grafana/dashboards-overview/complex-dashboard-example.png"
          url="https://grafana.com/docs/grafana/latest/fundamentals/dashboards-overview/"
        />
      </Section>
      <Section level={3} title="Grafana vs Kibana">
        <List
          fragment={[false, true]}
          items={[
            [
              "_Grafana_",
              [
                "Visualisation de **métriques** (time series)",
                "**Alerting** intégré",
                "**Logs** avec Loki",
              ],
            ],
            [
              "_Kibana_",
              [
                "Recherche et analyse de **logs** (texte)",
                "Ne fonctionne qu'avec **Elasticsearch**",
                "**Alerting** avec Watcher",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Service Discovery">
        <Image
          src="https://www.f5.com/content/dam/www/blogs/2015/Richardson-microservices-part4-1_difficult-service-discovery.png"
          url="https://www.f5.com/company/blog/nginx/service-discovery-in-a-microservices-architecture"
        />
      </Section>
      <Section level={3} title="Client-Side Discovery">
        <Image
          src="https://www.f5.com/content/dam/www/blogs/2015/Richardson-microservices-part4-2_client-side-pattern.png"
          url="https://www.f5.com/company/blog/nginx/service-discovery-in-a-microservices-architecture"
        />
      </Section>
      <Section level={3} title="Server-Side Discovery">
        <Image
          src="https://www.f5.com/content/dam/www/blogs/2015/Richardson-microservices-part4-3_server-side-pattern.png"
          url="https://www.f5.com/company/blog/nginx/service-discovery-in-a-microservices-architecture"
        />
      </Section>
      <Section level={2} title="Pull vs Push">
        <List
          fragment={[false, true]}
          items={[
            [
              "_Pull_",
              [
                "L'APM **récupère** les métriques de chaque service",
                "Idéal pour les métriques régulières (CPU, RAM, etc.)",
                "Par exemple : Prometheus",
              ],
            ],
            [
              "_Push_",
              [
                "Chaque service **envoie** ses métriques à l'APM",
                "Envoi à la demande (logs, traces, etc.)",
                "Par exemple : Beats",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Cardinalité">
        <List
          fragment
          items={[
            "Nombre d'**éléments distincts** dans un ensemble",
            "Métriques : **Nombre** de **valeurs** d'un **attribut**",
          ]}
        />
        <Image
          src="https://grafana.com/static/assets/img/blog/cardinality-spikes-diagram.jpg"
          url="https://grafana.com/blog/2022/02/15/what-are-cardinality-spikes-and-why-do-they-matter/"
          height="600px"
        />
      </Section>
      <Section level={3} title="High cardinality">
        <Image
          src="https://victoriametrics.com/blog/cardinality-explorer/cardinality_calculation.webp"
          url="https://victoriametrics.com/blog/cardinality-explorer/"
        />
      </Section>
      <Section level={3} title="VM → container">
        <Image
          src="https://chronosphere.io/wp-content/uploads/2023/10/cardinality-growth-1024x576.webp"
          url="https://chronosphere.io/learn/what-is-high-cardinality/"
        />
      </Section>
      <Section level={3} title="Coûts et Problèmes">
        <List
          fragment
          items={[
            "**Stockage** : volume des données",
            "**Ressources** : CPU et RAM du système de monitoring",
            "**Pertes** : throughput du système de monitoring",
            "**Visualisation** : lisibilité des graphiques",
            "**Coûts** : infrastructure et maintenance ou SaaS",
          ]}
        />
      </Section>
      <Section level={3} title="Optimisations">
        <Image
          src="https://grafana.com/static/assets/img/blog/grafana-cardinality-metrics-quadrants.png"
          url="https://grafana.com/blog/2022/10/20/how-to-manage-high-cardinality-metrics-in-prometheus-and-kubernetes/"
        />
      </Section>
      <Section level={3} title="Optimisations">
        <List
          fragment={[true, true]}
          items={[
            [
              "**Suppression** : supprimer les labels inutiles",
              ["**Inutilisé**", "**Redondant**"],
            ],
            [
              "**Agrégation** : réduire le nombre de valeurs",
              [
                "**Histogram** : découper les valeurs en intervalles (agrégation temporelle)",
                "**Summary** : minimale, maximale, moyenne, quantiles (agrégation statistique)",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="Sampling">
        <List
          fragment={[true, true]}
          items={[
            [
              "**Sampling** : ne pas collecter toutes les valeurs",
              [
                "**Sampled** trace/span : traité et stocké",
                "**Not sampled** trace/span : ignoré",
              ],
            ],
          ]}
        />
        <Image
          fragment
          src="https://opentelemetry.io/docs/concepts/sampling/traces-venn-diagram.svg"
          url="https://opentelemetry.io/docs/concepts/sampling/"
          height="512px"
        />
      </Section>
      <Section level={4} title="Head vs Tail Sampling">
        <Image
          src="https://cdn.thenewstack.io/media/2020/04/eb412cd9-screen-shot-2020-04-07-at-7.12.38-pm-1024x280.png"
          url="https://thenewstack.io/what-you-need-to-know-about-distributed-tracing-and-sampling/"
          height="512px"
        />
        <List
          fragment
          items={[
            [
              "**Head sampling** : décider au début de la requête",
              ["Aléatoirement (p. ex. 1/1000)"],
            ],
            [
              "**Tail sampling** : décider à la fin de la requête",
              ["Si lente, erreur, contenu spécifique, etc."],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Semantic Conventions">
        <List
          fragment
          items={[
            "https://opentelemetry.io/docs/concepts/semantic-conventions/",
            "**Standard** pour les labels des métriques",
            "**Attribut** (key) en snake_case séparé par des points (p. ex. `http.status_code`)",
          ]}
        />
      </Section>
      <Section level={3} title="ISO 8601">
        <Image
          src="https://imgs.xkcd.com/comics/iso_8601.png"
          url="https://xkcd.com/1179"
        />
      </Section>
      <Section level={3} title="Standards">
        <Image
          src="https://imgs.xkcd.com/comics/standards.png"
          url="https://xkcd.com/927"
        />
      </Section>
    </RevealDeck>
  );
}
