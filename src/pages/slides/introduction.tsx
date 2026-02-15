import {  Image, List, Section, Text } from "@site/src/components/Deck";
import Mermaid from "@site/src/components/Mermaid";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Introduction(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="introduction"
      title="DevOps"
      subTitle="Pamela Delgado"
    >
      <Section level={2} title="À propos de moi">
        <Image
          src="/course/img/00_aboutme.jpg"
        />

      </Section>
      <Section level={2} title="Organisation">
        <List
          fragment
          items={[
            ["Cours & Laboratoires", ["**Mardi** de 8h30 à 12h00"]],
            [
              "Évaluation",
              [
                "1 **examen** écrit : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _50%_",
                "2 **tests** + 1 présentation : &nbsp;&nbsp;&nbsp; _30%_",
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
              "https://heig-vd-devops.github.io/course",
              ["**Calendrier**", "**Supports** de cours"],
            ],
            [ "Teams 26_HEIG-VD_DOP",
              [
                "Code pour rejoindre roxslh4",
                "**Forum** (questions, réponses, annonces)",
              ],
            ],
          ]}
        />
      </Section>
    </RevealDeck>
  );
}
