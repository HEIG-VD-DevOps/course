import { Code, Image, List, Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Development(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="development"
      title="Développement"
      subTitle="DevOps"
    >
      <Section level={2} title="The twelve-factor app">
        <List
          fragment
          items={[
            "[12factor.net](https://12factor.net/fr/)",
            [
              "Pour **concevoir** des applications",
              [
                "Facile à **déployer** sur le cloud",
                "**Portables** entre les environnements",
                "**Scalables** sans changement d'architecture",
              ],
            ],
            "Pour le **cloud**, mais compatible DevOps",
          ]}
        />
      </Section>
      <Section level={3} title="I. Base de code">
        <Image
          src="https://12factor.net/images/codebase-deploys.png"
          url="https://12factor.net/fr/codebase"
          height="100%"
        />
        <List
          fragment
          items={[
            "Plusieurs déploiements, un même code **versionné**",
            "Factorisation du code en **dépendance** externe",
          ]}
        />
      </Section>
      <Section level={3} title="II. Dépendances">
        <List
          fragment
          items={[
            "Déclaration explicite des **dépendances** externes avec leur **version**",
            "Utilisation d'un **gestionnaire** de dépendances",
          ]}
        />
      </Section>
      <Section level={3} title="III. Configuration">
        <List
          fragment
          items={[
            "**Séparation** de la configuration de l'application",
            "Paramétrage par des **variables d'environnement**",
            "**Même code** en production et en développement, mais **configuration différente**",
          ]}
        />
      </Section>
      <Section level={3} title="IV. Services">
        <List
          fragment
          items={[
            [
              "Les **ressources** externes sont des services **remplaçables**",
              ["Base de données, serveur mail, cache, etc."],
            ],
            "**Connexion** aux services par des variables d'environnement",
          ]}
        />
      </Section>
      <Section
        level={3}
        title="V. Assemblez, publiez, exécutez (Build, release, run)"
      >
        <Image
          src="https://12factor.net/images/release.png"
          url="https://12factor.net/fr/build-release-run"
          height="100%"
        />
        <List fragment items={["**Séparation** des trois étapes"]} />
      </Section>
      <Section level={3} title="VI. Processus">
        <List
          fragment
          items={[
            "L'application est **sans état** (stateless)",
            "Les états sont stockées dans des **services** externes (base de données, cache, etc.)",
          ]}
        />
      </Section>
      <Section level={3} title="VII. Associations de ports">
        <List
          fragment
          items={[
            "L'application est **accessible** uniquement par des **ports**",
            "Peut devenir un **service** externe d'une autre application",
          ]}
        />
      </Section>
      <Section level={3} title="VIII. Concurrence">
        <Image
          src="https://12factor.net/images/process-types.png"
          url="https://12factor.net/fr/concurrency"
          height="100%"
        />
        <List
          fragment
          items={["**Scalabilité** par duplication des processus indépendants"]}
        />
      </Section>
      <Section level={3} title="IX. Jetable">
        <List
          fragment
          items={[
            "**Démarrage** et **arrêt** rapide",
            "**Redémarrage** sans perte de données",
          ]}
        />
      </Section>
      <Section level={3} title="X. Parité dev/prod">
        <List
          fragment
          items={[
            "**Proximité** des environnements de **développement** et de **production**",
            "**Temporelle** : dernière version rapidement déployée",
            "**Humaine** : même équipe pour les deux environnements",
            "**Technique** : mêmes outils/technologies/versions (OS, DB, etc.)",
          ]}
        />
      </Section>
      <Section level={3} title="XI. Logs">
        <List
          fragment
          items={[
            "Logs traités comme des **flux** d'événements (pas de fichiers)",
            "Logs envoyés à la **sortie standard** (stdout)",
            "Logs **agrégés** et **indexés** par un service externe",
          ]}
        />
      </Section>
      <Section level={3} title="XII. Processus d’administration">
        <List
          fragment
          items={[
            "Exécution des commandes d'**administration/maintenance** dans un processus **ponctuel**",
            "Par exemple : migration de la base de données",
            "Livrées avec le code de l'application",
          ]}
        />
      </Section>
      <Section level={2} title="Environnement local">
        <List
          fragment
          items={[
            "**Déployer** l'application sur sa **machine**",
            "**similaire** à la production",
            "**Docker** : virtualise une machine",
            "**Docker Compose** : virtualise un réseau de machines (avec des sous-réseaux)",
          ]}
        />
      </Section>
      <Section level={2} title="Docker Compose">
        <List
          fragment
          items={[
            "**Définition** des services dans un fichier YAML `compose.yml`",
            [
              "**Actions groupées**",
              ["`docker compose up`, `docker compose down`, etc."],
            ],
            [
              "**Préconfiguration** des containers",
              ["variables d'environnement, ports, volumes, réseaux, etc."],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="Docker Compose : Exemple">
        <Code>
          {`
          services:
          db:
            image: postgres
            environment:
              POSTGRES_PASSWORD: password
          web:
            build: .
            command: python serve.py
            environment:
              DATABASE_URL: "postgres://postgres:password@db/postgres"
            ports:
              - "8000:8000"
          `}
        </Code>
      </Section>
      <Section level={3} title="Docker Compose : Utilisation">
        <List
          fragment
          items={[
            "**environment** de développement (local)",
            "**tests** d'intégration",
            "**poc** (proof of concept) avec des réseaux",
          ]}
        />
      </Section>
    </RevealDeck>
  );
}
