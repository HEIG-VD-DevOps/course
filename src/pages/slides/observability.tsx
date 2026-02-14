import {
  Code,
  Image,
  List,
  Section,
  Table,
  Text,
} from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Observability(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="observability"
      title="Observabilité"
      subTitle="DevOps"
    >
      <Section level={2} title="Monitoring (supervision)">
        <List
          fragment={[true, true]}
          items={[
            [
              "**Collecte** de **métriques** sur les",
              [
                "**ressources** (CPU, mémoire, disque, réseau)",
                "**performances** (temps de réponse, latence, débit)",
                "**erreurs** (code HTTP, exceptions, logs)",
                "...",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Observabilité">
        <List
          fragment={[true, true]}
          items={[
            "**Mesure** de l'inférence de l'**état interne** d'un système à partir de ses **observations externes**",
            [
              "Trois piliers",
              [
                "**Logs** (journalisation)",
                "**Métriques** (monitoring)",
                "**Traces** (suivi)",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Observabilité vs Monitoring">
        <List
          fragment={[false, true]}
          items={[
            [
              "_Monitoring_",
              ["**action** de surveiller", "dit s'il y a un problème"],
            ],
            [
              "_Observabilité_",
              [
                "**capacité** à être surveillé",
                "capacité à trouver et comprendre le problème",
                "= Monitoring + Logs + Traces",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Métriques DORA">
        <List
          fragment={[true, true]}
          items={[
            "**D**ev**O**ps **R**esearch and **A**ssessment de Google",
            [
              "4 indicateurs de performance",
              [
                "**Deployment Frequency** : fréquence de déploiement réussi en prod",
                "**Lead Time for Changes** : temps d'exécution des changements (commit → prod)",
                "**Change Failure Rate** : taux d'échec des changements",
                "(Mean) **Time to Restore Service** (MTTR) : temps de rétablissement (moyen) du service",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="Métriques DORA">
        <Image
          src="https://assets-global.website-files.com/6489e23dd070ba71d41a33b2/649162604bc89d9efb8b872d_622b0fd3d9180a667627f3d6_fanSpr5qRM0FUYbCT8V2s-rmjc4zcCk7nKsFnX02paZHKU7q3Y1XXxXSxqHgcCJ8kIbneLfjgXBGvow6eDRdThg-c0AI2MHWgi90vMufVQrn7gCuCGh04QqcIQDBKqXow9E4-6K4.png"
          url="https://platformengineering.org/talks-library/track-dora-devops-metrics-with-logilica-and-humanitec"
        />
      </Section>
      <Section level={3} title="Dashboard DORA">
        <Image
          src="https://storage.googleapis.com/gweb-cloudblog-publish/images/The_dashboard.max-1500x1500.jpg"
          url="https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance"
        />
      </Section>
      <Section level={3} title="Métriques DORA">
        <Image
          src="https://storage.googleapis.com/gweb-cloudblog-publish/images/Calculating_the_metrics_frOhcbp.max-2000x2000.jpg"
          url="https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance"
        />
      </Section>
      <Section level={2} title="Monitoring avec ELK">
        <List
          fragment={[true, true]}
          items={[
            "**E**lasticsearch : moteur de recherche et **base de données**",
            [
              "**L**ogstash : agrège et **transforme** les données",
              ["ETL : Extract-transform-load"],
            ],
            "**K**ibana : interface de **visualisation** et d'exploration de données",
            "Beats : **collecte** de données (agent)",
            "**Open source** par **Elastic**",
          ]}
        />
      </Section>
      <Section level={3} title="ELK Stack">
        <Image
          src="https://user.oc-static.com/upload/2021/01/25/16115946512541_P3C1.1%20Stack%20ELK.png"
          url="https://openclassrooms.com/fr/courses/1750566-optimisez-la-securite-informatique-grace-au-monitoring/7145268-decouvrez-la-stack-elk"
        />
      </Section>
      <Section level={3} title="ELK Stack">
        <Image
          src="https://datawrangler.mo.cloudinary.net/images/post/14-ELK-stack/img1.png"
          url="https://www.datawrangler.in/blog/14-elk-stack/"
        />
      </Section>
      <Section level={2} title="Monitoring Stack">
        <Table
          headers={["", "ELK", "Alternative"]}
          rowHeaders={["Collect", "Process", "Store", "Visualize", "Alert"]}
          rows={[
            ["Beats", "Fluentd"],
            ["Logstash", "Grafana Loki"],
            ["Elasticsearch", "Grafana Loki"],
            ["Kibana", "Grafana"],
            ["Kibana", "Grafana"],
          ]}
        />
        <Text fragment>Combinable !</Text>
      </Section>
      <Section level={2} title="Collecte">
        <List
          fragment={[false, true]}
          items={[
            [
              "_Agent_",
              [
                "**Indépendant** du code",
                "Lis la sortie standard (**stdout**) ou les fichiers de logs",
                "Définition des métriques dans l'agent",
              ],
            ],
            [
              "_Client/Library_",
              [
                "Ajoute une **nouvelle dépendance** au code",
                "**Modification** du code pour envoyer les logs",
                "Définition des métriques dans le code",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="Agent">
        <Image
          src="https://opentelemetry.io/docs/collector/img/otel-agent-sdk.svg"
          url="https://opentelemetry.io/docs/collector/deployment/agent/"
        />
      </Section>
      <Section level={3} title="Client/Library">
        <Image
          src="https://opentelemetry.io/docs/collector/img/otel-sdk.svg"
          url="https://opentelemetry.io/docs/collector/deployment/no-collector/"
        />
      </Section>
      <Section level={2} title="Fluentd Java">
        <Code lines="1-16|3,6,13|10-13" height="700px">
          {`
          import java.util.HashMap;
          import java.util.Map;
          import org.fluentd.logger.FluentLogger;

          public class Main {
              private static FluentLogger LOG = FluentLogger.getLogger("fluentd.test");

              public void doApplicationLogic() {
                  // ...
                  Map<String, Object> data = new HashMap<String, Object>();
                  data.put("from", "userA");
                  data.put("to", "userB");
                  LOG.log("follow", data);
                  // ...
              }
          }
          `}
        </Code>
        <Text>https://docs.fluentd.org/language-bindings/java</Text>
      </Section>
      <Section level={2} title="Elasticsearch">
        <List
          fragment
          items={[
            "**Moteur de recherche** et **base de données**",
            "Utilise **Lucene** pour l'indexation et la recherche de **texte**",
            "**Cluster** de **noeuds** (distribué)",
            "**API** REST",
          ]}
        />
      </Section>
    </RevealDeck>
  );
}
