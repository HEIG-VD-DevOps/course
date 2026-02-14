import { List, Section, Text } from "@site/src/components/Deck";
import Mermaid from "@site/src/components/Mermaid";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Introduction(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="introduction"
      title="DevOps"
      subTitle="David Tang"
    >
      <Section level={2} title="Parcours">
        <Mermaid>
          {`
          timeline
            Gymnase d'Yverdon
            EPFL : BSc & MSc en Informatique
            Ingénieur informaticien : ELCA (CFF, transN, TPF, RhB, SECUTIX, BCV) : EPFL (ENAC-IT4R)
            Enseignant : Gymnase Provence : HEIG-VD : Gymnase pour Adultes : HEP Vaud
          `}
        </Mermaid>
      </Section>
      <Section level={2} title="Organisation">
        <List
          fragment
          items={[
            ["Cours & Laboratoires", ["**Vendredi** de 13h15 à 16h30"]],
            [
              "Évaluation",
              [
                "1 **examen** écrit : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _50%_",
                "2 **tests** continus : &nbsp;&nbsp;&nbsp; _30%_",
                "3 **laboratoires** notés : _20%_",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Contenu">
        <Text>
          [Fiche
          d'unité](https://gaps.heig-vd.ch/public/fiches/uv/uv.php?id=7181)
        </Text>
        <List
          fragment
          items={[
            "Définition et principes",
            "Développement & Git workflows",
            "Intégration, build & packaging (Docker)",
            "CI / CD (GitLab)",
            "Tests automatisés",
            "Kubernetes - objets, stratégies de déploiement",
            "Packaging k8s avec Helm",
            "GitOps et déploiement avec ArgoCD",
            "Observabilité & OpenTelemetry",
          ]}
        />
      </Section>
      <Section level={2} title="Liens">
        <List
          items={[
            [
              "[heig.davidtang.ch](https://heig.davidtang.ch)",
              ["**Calendrier**", "**Supports** de cours"],
            ],
            [
              "[Cyberlearn](https://cyberlearn.hes-so.ch/course/view.php?id=30801)",
              [
                "DevOps 2024-2025 printemps",
                "**Forum** (questions, réponses, annonces)",
              ],
            ],
          ]}
        />
      </Section>
    </RevealDeck>
  );
}
