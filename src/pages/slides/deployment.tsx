import { Image, List, Section } from "@site/src/components/Deck";
import Katex from "@site/src/components/Katex";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Deployment(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="deployment"
      title="Déploiement"
      subTitle="DevOps"
    >
      <Section level={3} title="Comment **automatiser** les **déploiements** ?">
        <List
          fragment
          items={[
            "&rightarrow; Reproductibilité",
            "&rightarrow; Configuration-as-Code",
            "&rightarrow; Infrastructure-as-Code",
          ]}
        />
      </Section>
      <Section level={2} title="Infrastructure-as-Code">
        <List
          fragment
          items={[
            "**IaC**",
            "**Définition** de l'infrastructure dans des **fichiers**",
            "Gestion de **version** des fichiers",
            "**Automatisation** de la **création** de l'infrastructure",
            [
              "**Reproductibilité** et **documentation**",
              ["Redéploiement en cas de **panne** et **rollback** facilité"],
            ],
            "**Idempotence** : toujours le même résultat",
          ]}
        />
      </Section>
      <Section level={2} title="Infrastructure-as-Code">
        <Image
          src="https://content.altexsoft.com/media/2022/11/word-image-21.png.webp"
          url="https://www.altexsoft.com/blog/infrastructure-as-code/"
        />
      </Section>
      <Section level={3} title="Déclaratif vs Impératif">
        <List
          fragment={[false, true]}
          items={[
            [
              "**Déclarative**",
              ["Décrire l'état final souhaité", "Exemple : Kubernetes"],
            ],
            [
              "**Impérative**",
              [
                "Décrire toutes les étapes",
                "Exemple : Script, (Journal de bord)",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="Déclaratif vs Impératif">
        <Image
          src="https://content.altexsoft.com/media/2022/11/word-image-22.png.webp"
          url="https://www.altexsoft.com/blog/infrastructure-as-code/"
        />
      </Section>
      <Section level={2} title="Mise à jour"></Section>
      <Section level={3} title="Big Bang">
        <Image
          src="https://www.cncf.io/wp-content/uploads/2022/07/deployment-strategies-big-bang.svg"
          url="https://www.cncf.io/blog/2022/05/09/load-balancing-for-blue-green-rolling-and-canary-deployment/"
        />
      </Section>
      <Section level={3} title="Blue-Green">
        <Image
          src="https://www.cncf.io/wp-content/uploads/2022/07/deployment-strategies-blue-green.svg"
          url="https://www.cncf.io/blog/2022/05/09/load-balancing-for-blue-green-rolling-and-canary-deployment/"
        />
      </Section>
      <Section level={3} title="Rolling / Phased">
        <Image
          src="https://www.cncf.io/wp-content/uploads/2022/07/deployment-strategies-rolling-release.svg"
          url="https://www.cncf.io/blog/2022/05/09/load-balancing-for-blue-green-rolling-and-canary-deployment/"
        />
      </Section>
      <Section level={3} title="Canary">
        <Image
          src="https://www.cncf.io/wp-content/uploads/2022/07/deployment-strategies-canary.svg"
          url="https://www.cncf.io/blog/2022/05/09/load-balancing-for-blue-green-rolling-and-canary-deployment/"
        />
      </Section>
      <Section level={2} title="Niveau de service">
        <List
          fragment={[false, true]}
          items={[
            [
              "_SLA_",
              ["Service Level **Agreement**", "Accord avec le **client**"],
            ],
            [
              "_SLO_",
              [
                "Service Level **Objective**",
                "Objectif de **qualité** du service",
              ],
            ],
            [
              "_SLI_",
              [
                "Service Level **Indicator**",
                "Indicateur des **performance** réelles",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Niveau de service">
        <List
          fragment={[true, true, true]}
          items={[
            "**SLA** = **SLO**s + conséquences",
            "**SLO** = seuil d'un **SLI**",
            [
              "Exemple",
              [
                [
                  "**SLO** de 99.9% de disponibilité hebdomadaire",
                  [
                    <Katex>{`\\frac{1}{1000} \\times 7 \\times 24 \\times 60 = 10.08`}</Katex>,
                    "Au maximum 10 minutes de panne par semaine",
                  ],
                ],
                "**SLA** : **pénalités** de 100 CHF par minute de panne supplémentaire",
                "**SLI** : Le temps de panne réellement mesuré",
              ],
            ],
          ]}
        />
      </Section>
    </RevealDeck>
  );
}
