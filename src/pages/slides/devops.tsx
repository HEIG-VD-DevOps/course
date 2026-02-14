import { Image, List, ListItem, Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Devops(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="devops"
      title="DevOps"
      subTitle="DevOps"
    >
      <Section level={2} title="DevOps">
        <List
          fragment={[true, true]}
          items={[
            "**Mouvement** culturel",
            [
              "Auparavant : cloisonnement entre **développement** et **exploitation**",
              [
                "Développement : **création** de logiciels",
                "Exploitation : mise en **production** des logiciels",
                "**Build** (new) vs **Run** (stable)",
              ],
            ],
            [
              "**2009** : DevOps Days par Patrick Debois à Ghent (Belgique)",
              ["**DevOps** = **Dev**elopment + **Op**eration**s**"],
            ],
            [
              "**Objectifs**",
              [
                "Améliorer la **collaboration** entre dev et ops",
                "**Réduire** le cycle de développement",
                "Améliorer la **qualité** des logiciels",
                "You **build** it, you **run** it (YBIYRI)",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="DevOps">
        <Image
          src="https://miro.medium.com/v2/0*u6zi1ux8N6qDQTha.png"
          url="https://basanagouda.medium.com/day-1-getting-started-with-devops-b78ccca0af8"
        />
      </Section>
      <Section level={2} title="CALMS">
        <List
          fragment
          items={[
            "Permet d'**évaluer** si une organisation suit les principes **DevOps**",
            "Créé en **2010** par Damon Edwards et John Willis (CAMS), L ajouté par Jez Humble",
            "**C**ulture",
            "**A**utomation",
            "**L**ean",
            "**M**easurement",
            "**S**haring",
          ]}
        />
      </Section>
      <WWHSection
        title="Culture"
        what="Pas technique mais **humain**"
        why="Prolongement des méthodes **agiles**"
        how={[
          "**Collaboration** et **communication** entre les équipes",
          "Définition d'un **objectif** et d'un **plan** communs",
          "**Adaptation** de la culture d'entreprise",
        ]}
      />
      <WWHSection
        title="Automation"
        what="Elimination des tâches **manuelles** et **répétitives**"
        why="**Fiabilité** et **rapidité**"
        how={[
          "**Scripts** et **pipelines**",
          "**Tests** automatisés",
          "**Configuration as Code** (CaC)",
        ]}
      />
      <WWHSection
        title="Lean"
        what="**Amélioration** continue"
        why="L'**échec** est inévitable"
        how={["Réunion **régulière**", "**Test A/B** par les utilisateurs"]}
      />
      <Section level={4} title="Test A/B">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/68/A-B_testing_simple_example.png"
          url="https://commons.wikimedia.org/wiki/File:A-B_testing_simple_example.png"
        />
      </Section>
      <WWHSection
        title="Measurement"
        what="**Mesure** des performances"
        why="**Vérifier** les améliorations"
        how={[
          "**Monitoring** des applications",
          ["**Indicateurs** de performance (KPI)", ["Métriques DORA"]],
        ]}
      />
      <WWHSection
        title="Sharing"
        what="**Partage** des connaissances"
        why="**Confiance** entre collaborateurs"
        how={[
          "**Documentation** des processus",
          "**Décloisonnement** des équipes",
        ]}
      />
      <Section level={2} title="Méthode agile">
        <List
          fragment={[true, true, true]}
          items={[
            "**Méthode** de développement logiciel",
            [
              "Auparavant",
              [
                [
                  "**1970** : Modèle en cascade (Waterfall)",
                  ["**linéaire** et **séquentiel**"],
                ],
                [
                  "**Fréquence** des livraisons de logiciels",
                  [
                    "Disques (CD/DVD) : **années**",
                    "Cloud (dématérialisé) : **heures/minutes**",
                  ],
                ],
              ],
            ],
            "**2001** : Manifeste Agile",
            "**Itérative**, **incrémentale** et **adaptative**",
          ]}
        />
      </Section>
      <Section level={3} title="Waterfall vs Agile">
        <Image
          src="https://cdnb.ganttpro.com/uploads/2016/11/waterfall-and-agile-methods.jpg"
          url="https://blog.ganttpro.com/en/waterfall-vs-agile-with-advantages-and-disadvantages/"
        />
      </Section>
      <Section level={3} title="Waterfall vs Agile">
        <Image
          src="https://powerslides.com/wp-content/uploads/2019/03/Agile-vs-Waterfall-3.png"
          url="https://powerslides.com/powerpoint-business/project-management-templates/agile-vs-waterfall/"
        />
      </Section>
      <Section level={3} title="Manifeste Agile">
        <List
          items={[
            "Lire le [manifeste](https://agilemanifesto.org/iso/fr/manifesto.html) ainsi que ses [12 principes](https://agilemanifesto.org/iso/fr/principles.html)",
            "Synthétiser en quelques mots-clés",
          ]}
        />
      </Section>
    </RevealDeck>
  );
}

function WWHSection(props: {
  title: string;
  what: string;
  why: string;
  how: ListItem[];
}) {
  return (
    <Section level={3} title={props.title}>
      <List
        fragment={[false, true]}
        items={[
          ["_Quoi ?_", [props.what]],
          ["_Pourquoi ?_", [props.why]],
          ["_Comment ?_", props.how],
        ]}
      />
    </Section>
  );
}
