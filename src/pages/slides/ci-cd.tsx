import { Code, Image, List, Section, Text } from "@site/src/components/Deck";
import Mermaid from "@site/src/components/Mermaid";
import RevealDeck from "@site/src/components/RevealDeck";

export default function CiCd(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="ci-cd"
      title="CI/CD"
      subTitle="DevOps"
    >
      <Section level={3} title="CI/CD ?">
        <List
          fragment
          items={[
            "_CI_: Continuous **Integration** (Intégration continue)",
            "_CD_: Continuous **Delivery** (Distribution/Livraison continue)",
            "_CD_: Continuous **Deployment** (Déploiement continu)",
          ]}
        />
      </Section>
      <Section level={2} title="Continuous Integration">
        <List
          fragment={[false, true, true]}
          items={[
            [
              "Problèmes",
              [
                "**Plusieurs** développeurs sur le même projet",
                "**Intégration** des modifications dans un code **commun**",
                "Intégration des **services**",
              ],
            ],
            [
              "Solution",
              [
                [
                  "**Automatiser** l'intégration",
                  ["La **construction/compilation** (build)", "Les **tests**"],
                ],
              ],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Continuous Delivery">
        <List
          fragment={[true, true]}
          items={[
            [
              "**Automatiser** la **distribution** du logiciel",
              [
                "Création de l'**artefact** (jar, Docker image, etc.)",
                "**Publication** de l'artefact (npm, pip, Docker Hub, etc.)",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Continuous Deployment">
        <List
          fragment={[true, true]}
          items={[
            [
              "**Automatiser** le **déploiement** du logiciel",
              [
                "**Installation** de l'artéfact sur l'environnement de **production**",
                "**Mise à jour** du logiciel",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="CI/CD">
        <Image
          src="https://www.redhat.com/rhdc/managed-files/styles/wysiwyg_full_width/private/ci-cd-flow-desktop.png.webp?itok=mDEvsSsp"
          url="https://www.redhat.com/fr/topics/devops/what-is-ci-cd"
        />
      </Section>
      <Section level={3} title="CI/CD">
        <Image
          src="https://wac-cdn.atlassian.com/dam/jcr:b2a6d1a7-1a60-4c77-aa30-f3eb675d6ad6/ci%20cd%20asset%20updates%20.007.png"
          url="https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment"
        />
      </Section>
      <Section level={3} title="CI/CD">
        <Mermaid>
          {`
          sequenceDiagram
            actor dev as Developer
            participant vcs as Version Control System<br>(Git)
            participant cis as Continuous Integration Tool<br>(Jenkins, GitLab CI, ...)
            participant ar as Artifact Repository<br>(Sonatype Nexus, Artifactory, ...)
            participant paas as Platform as a Service<br>(Kubernetes, AWS, ...)

            autonumber

            rect rgb(227, 242, 253)
            note right of dev: Continuous Integration
            dev->>vcs: push code source
            vcs->>cis: trigger build
            cis->>vcs: pull code source
            cis->>cis: build & test
            end

            rect rgb(255, 235, 238)
            note right of cis: Continuous Delivery
            cis->>cis: build artifact
            cis->>ar: publish artifact
            end

            rect rgb(232, 245, 233)
            note right of cis: Continuous Deployment
            cis->>paas: trigger deployment
            paas->>ar: pull artifact
            paas->>paas: deploy artifact
            end
          `}
        </Mermaid>
      </Section>
      <Section level={2} title="Outils">
        <List
          fragment
          items={[
            [
              "[Jenkins](https://www.jenkins.io/)",
              [
                "Open source & on-premise",
                "Jobs lancés sur un serveur (maintenant aussi possible sur un container)",
              ],
            ],
            [
              "[GitHub Actions](https://github.com/features/actions)",
              ["Intégré à GitHub"],
            ],
            [
              "[GitLab CI/CD](https://docs.gitlab.com/ee/ci/)",
              ["Intégré à GitLab"],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="GitLab CI/CD">
        <Image
          src="https://docs.gitlab.com/ci/quick_start/img/pipeline_graph_v17_9.png"
          url="https://docs.gitlab.com/ci/quick_start/"
          height="50%"
        />
        <List
          fragment={[true, true, true]}
          items={[
            [
              "_Pipeline_",
              [
                [
                  "_Stage_ (build, test, deploy, etc.)",
                  [
                    "_Job_ contient un **script** exécuté par un **runner** dans un **container**",
                  ],
                ],
              ],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="`.gitlab-ci.yml`">
        <Code>
          {`
          build-job:
            stage: build
            script:
              - echo "Hello, $GITLAB_USER_LOGIN!"

          test-job1:
            stage: test
            script:
              - echo "This job tests something"

          test-job2:
            stage: test
            script:
              - echo "This job tests something, but takes more time than test-job1."
              - echo "After the echo commands complete, it runs the sleep command for 20 seconds"
              - echo "which simulates a test that runs 20 seconds longer than test-job1"
              - sleep 20

          deploy-prod:
            stage: deploy
            script:
              - echo "This job deploys something from the $CI_COMMIT_BRANCH branch."
            environment: production
          `}
        </Code>
      </Section>
      <Section level={3} title="Job et stage">
        <List
          fragment={[false, true]}
          items={[
            [
              "**Job** définit **quoi** exécuter (script)",
              ["Condition avec `rules`", "Dépendance avec `needs`"],
            ],
            [
              "**Stage** définit **quand** exécuter un job",
              [
                [
                  "**Ordre** des stages (par défaut)",
                  ["`.pre` > `build` > `test` > `deploy` > `.post`"],
                ],
              ],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="Variables">
        <List
          fragment={[true, true]}
          items={[
            [
              "**Variables d'environnement** injectées dans les jobs",
              [
                "`CI_COMMIT_BRANCH`,`CI_COMMIT_REF_NAME`, `CI_PIPELINE_SOURCE`, etc.",
                "[Predefined variables reference](https://docs.gitlab.com/ee/ci/variables/predefined_variables.html)",
              ],
            ],
            "Définition de ses propres variables",
          ]}
        />
      </Section>
      <Section level={3} title="Trigger une pipeline">
        <List
          fragment
          items={[
            "Sur un **push** sur une branche",
            "Sur une **merge request**",
            "**Régulièrement** (cron)",
            "**Webhook** sur l'API",
            "**Manuellement** depuis l'interface",
            "Depuis une **autre pipeline**",
          ]}
        />
      </Section>
      <Section level={3} title="Artefacts">
        <List
          fragment
          items={[
            "Fichiers ou dossiers",
            "À la fin de chaque **job**, possibilité de **sauvegarder** des **artefacts**",
            "Possibilité de **récupérer** les artéfacts d'un job dans un autre",
            "Possibilité de **télécharger** les artéfacts depuis l'interface",
            "[Job artifacts](https://docs.gitlab.com/ee/ci/jobs/job_artifacts.html)",
          ]}
        />
      </Section>
      <Section level={3} title="Cache">
        <List
          fragment
          items={[
            [
              "Possibilité de **cacher** des fichiers ou dossiers entre les **exécutions** d'un même job",
              ["[Caching](https://docs.gitlab.com/ee/ci/caching/)"],
            ],
            "Accélère les **exécutions** des jobs",
            "Utilisé pour les **dépendances** (node_modules, .m2, etc.)",
          ]}
        />
      </Section>
      <Section level={3} title="DRY">
        <List
          fragment
          items={[
            "DRY = Don't Repeat Yourself",
            "Pour **réutiliser** des pipelines",
            "[extends](https://docs.gitlab.com/ee/ci/yaml/#extends) pour réutiliser un job (de la même pipeline)",
            "[YAML anchors](https://docs.gitlab.com/ee/ci/yaml/yaml_optimization.html#anchors)",
            "[include](https://docs.gitlab.com/ee/ci/yaml/#include) pour réutiliser un fichier externe",
          ]}
        />
      </Section>
      <Section level={3} title="Runner">
        <List
          fragment
          items={[
            "Un **agent** qui exécute les jobs sur un serveur",
            ["**SaaS** runners sur GitLab.com", ["Limité puis payant"]],
            ["**Self-managed** runners", ["Illimité mais à gérer"]],
            "[GitLab Runner](https://docs.gitlab.com/runner/)",
          ]}
        />
      </Section>
      <Section level={3} title="Référence">
        <Text>https://docs.gitlab.com/ee/ci/yaml/</Text>
      </Section>
    </RevealDeck>
  );
}
