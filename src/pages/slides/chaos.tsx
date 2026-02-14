import { List, Section, Text } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Chaos(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="chaos"
      title="Ingénierie du chaos"
      subTitle="DevOps"
    >
      <Section level={2} title="Chaos engineering">
        <Text>
          L’Ingénierie du Chaos est une **discipline** de l’**expérimentation**
          sur un **système distribué** afin de renforcer la confiance dans la
          capacité du système à **résister** à des conditions turbulentes en
          **production**.
        </Text>
        <Text>https://principlesofchaos.org/fr/</Text>
      </Section>
      <Section level={2} title="Pourquoi ?">
        <List
          fragment
          items={[
            "Les systèmes sont de plus en plus **complexes** et **distribués**.",
            "Les composants fonctionnent-ils correctement **ensemble** ?",
            "Trouver les **faiblesses** de manière **proactive**.",
            "**Confiance** dans la **résilience** du système.",
          ]}
        />
      </Section>
      <Section level={3} title="Préjugés (fallacies) des systèmes distribués">
        <List
          fragment
          items={[
            "Le réseau est **fiable**.",
            "Le temps de **latence** est nul.",
            "La **bande passante** est infinie.",
            "Le réseau est **sécurisé**.",
            "La topologie ne **change** jamais.",
            "Il n'y a qu'**un** administrateur.",
            "Le coût de **transport** est nul.",
            "Le réseau est **homogène**.",
          ]}
        />
      </Section>
      <Section level={2} title="Comment ?">
        <Text>Expérimenter en 4 étapes :</Text>
        <List
          fragment
          order
          items={[
            "**Définition** d'un **état normal** du système par une sortie **mesurable**.",
            "**Hypothèse** que groupe témoin **=** expérimental.",
            "**Expérience** en **production** en **variant** les dégradations (monde réel).",
            "**Analyse** des **différences** entre les deux groupes.",
          ]}
        />
        <Text fragment>Commencer par des expériences **limitées**</Text>
        <Text fragment>
          **Automatiser** pour lancer les expériences en **continu**
        </Text>
      </Section>
      <Section level={2} title="Historique">
        <List
          fragment
          items={[
            "1983 - Apple : **Monkey** génère des inputs (clavier, souris) aléatoires et frénétiques.",
            "2003 - Amazon : **GameDay** simule régulièrement des pannes en production.",
            "2006 - Google : **DiRT** similaires à GameDay.",
            "2011 - Netflix : **Chaos Monkey** tue aléatoirement des instances en production.",
          ]}
        />
      </Section>
      <Section level={2} title="Simian Army (Netflix sur AWS)">
        <List
          fragment
          items={[
            "_Chaos Monkey_ : tue aléatoirement des **instances** en production.",
            "_Latency Monkey_ : introduit des **délais** aléatoires sur le réseau.",
            "_Conformity Monkey_ : détecte les instances non conformes aux **bonnes pratiques**",
            "_Doctor Monkey_ : détecte les problèmes de **santé** des instances.",
            "_Janitor Monkey_ : supprime les ressources **inutilisées**.",
            "_Security Monkey_ : Conformity Monkey pour des **vulnérabilités** de sécurité.",
            "_10-18 Monkey_ : détecte les problèmes de **localisation**.",
            "_Chaos Gorilla_ : Chaos Monkey pour des **zones de disponibilité**.",
          ]}
        />
      </Section>
      <Section level={3} title="Résultats">
        <List
          fragment
          items={[
            "**Panne** majeur d'**AWS** en 21 avril 2011 et 24 décembre 2012.",
            "Pas d'**interruption** de service pour **Netflix**.",
          ]}
        />
      </Section>
      <Section level={3} title="Et aujourd'hui ?">
        <List
          fragment
          items={[
            "**Design for failure** est devenu une **bonne pratique**.",
            [
              "**Simian Army** n'est plus maintenu depuis 2018.",
              ["**Chaos Monkey** subsiste."],
            ],
            [
              "**Chaos Toolkit** est développé depuis 2017.",
              ["https://chaostoolkit.org/"],
            ],
          ]}
        />
      </Section>
    </RevealDeck>
  );
}
