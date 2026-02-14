import { Image, List, Section, Text } from "@site/src/components/Deck";
import Mermaid from "@site/src/components/Mermaid";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Code(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="code"
      title="Code"
      subTitle="DevOps"
    >
      <Section level={2} title="IDE">
        <List
          fragment={[true, true]}
          items={[
            "**I**ntegrated **D**evelopment **E**nvironment",
            "**Éditeur de texte** avec des fonctionnalités supplémentaires",
            "Facilite l'**édition** et le **débogage** du code",
            [
              "Partage de **configuration** entre les développeurs",
              [
                "Spécifique à l'IDE ou [EditorConfig](https://editorconfig.org/)",
                "[Prettier](https://prettier.io/) pour le **formattage** du code",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="IDE">
        <List
          fragment={[true, true]}
          items={[
            [
              "IDE populaires",
              [
                [
                  "[Visual Studio Code](https://code.visualstudio.com/) ou [VSCodium](https://vscodium.com/)",
                  ["**Open source** et **gratuit**"],
                ],
                [
                  "[IntelliJ IDEA](https://www.jetbrains.com/idea/) ou autres IDE de [JetBrains](https://www.jetbrains.com/)",
                  [
                    "**Payant** (sauf étudiant), mais meilleur **refactoring** et **autocomplétion**",
                  ],
                ],
              ],
            ],
            [
              "**Jupyter** ?",
              [
                "Pour des **rapports** interactifs **&ne;** développement de **logiciels**",
              ],
            ],
            "[2024 Developer Survey](https://survey.stackoverflow.co/2024/technology#most-popular-technologies-new-collab-tools)",
          ]}
        />
      </Section>
      <Section level={2} title="VCS">
        <List
          fragment={[true]}
          items={[
            "**V**ersion **c**ontrol **s**ystem (Logiciel de gestion de versions)",
            "**Conserve** le code source avec son **historique**",
            "Facilite la **collaboration**",
            "Le plus populaire: **Git** (**Décentralisé**)",
          ]}
        />
      </Section>
      <Section level={3} title="Git">
        <List
          fragment={[true]}
          items={[
            "Les modifications sont stockées dans des **commits**",
            "Chaque commit est **identifié** par un **hash**",
            "Chaque commit a un **parent**",
            "Les **branches** et **tags** sont des **pointeurs** vers un commit",
            "Les **branches** sont des pointeurs **mobiles**",
          ]}
        />
      </Section>
      <Section level={3} title="Réécriture de l'historique">
        <List
          fragment={[true]}
          items={[
            "**commit --amend** : modifie le dernier commit",
            "**rebase -i** : modifie les x derniers commits",
            "**rebase** : déplace les commits vers une référence (branche ou commit)",
            "Écrire un historique **propre** et **lisible** avant de merge",
          ]}
        />
      </Section>
      <Section level={2} title="Workflow">
        <List
          fragment={[true]}
          items={[
            "**Comment** utiliser Git ?",
            "Un workflow est une **méthode** d'utilisation de Git",
            [
              "Plusieurs workflows existent",
              [
                "Centralized Workflow",
                "Feature Branch Workflow",
                "Gitflow Workflow",
                "Forking Workflow",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="Centralized Workflow">
        <List
          fragment={[true]}
          items={[
            "Proche de l'utilisation de **SVN**",
            "**Une** seule branche : main",
            "**Tous** les développeurs travaillent sur la même branche",
            "Résolution des conflits **avant** de push",
          ]}
        />
      </Section>
      <Section level={3} title="Centralized Workflow">
        <Image
          src="https://wac-cdn.atlassian.com/dam/jcr:8fe7b38d-e671-4d2f-bde7-52c5f60e1164/01%20Central%20Repository.svg"
          url="https://www.atlassian.com/git/tutorials/comparing-workflows"
        />
      </Section>
      <Section level={3} title="Centralized Workflow">
        <Image
          src="https://wac-cdn.atlassian.com/dam/jcr:2943ffa0-df0a-493b-8677-30b31a1a43e3/02%20Local%20Repository.svg"
          url="https://www.atlassian.com/git/tutorials/comparing-workflows"
        />
      </Section>
      <Section level={3} title="Centralized Workflow">
        <Image
          src="https://wac-cdn.atlassian.com/dam/jcr:78c9d390-8f85-48a3-833e-fdbc6eb65282/Marys_Repository.svg"
          url="https://www.atlassian.com/git/tutorials/comparing-workflows"
        />
      </Section>
      <Section level={3} title="Feature Branch Workflow">
        <List
          fragment={[true]}
          items={[
            "Une nouvelle **branche** par fonctionnalité",
            "Une **personne** par branche",
            "**Merge/Pull request** sur la branche main",
            "**Code review** avant le merge",
          ]}
        />
      </Section>
      <Section level={3} title="Feature Branch Workflow">
        <div className="fragment">
          <Text>Nouvelle fonctionnalité</Text>
          <Image
            src="https://wac-cdn.atlassian.com/dam/jcr:223f5106-2191-4450-8916-e5c80d7d907a/02.svg"
            url="https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow"
            height="50%"
          />
        </div>
        <div className="fragment">
          <Text>Fonctionnalité fusionnée</Text>
          <Image
            src="https://wac-cdn.atlassian.com/dam/jcr:09308632-38a3-4637-bba2-af2110629d56/07.svg"
            url="https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow"
            height="50%"
          />
        </div>
      </Section>
      <Section level={3} title="Gitflow Workflow">
        <List
          fragment={[true, true]}
          items={[
            [
              "Deux branches principales : **main** et **develop**",
              ["main : **stable**", "develop : en cours de **développement**"],
            ],
            ["Une branche par **fonctionnalité**", ["Merge dans **develop**"]],
            [
              "Une branche par **release** ou **hotfix**",
              ["Merge dans **develop** et **main**"],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="Gitflow Workflow">
        <Image
          src="https://nvie.com/img/git-model@2x.png"
          url="https://nvie.com/posts/a-successful-git-branching-model/"
        />
      </Section>
      <Section level={3} title="Gitflow Workflow">
        <Image
          src="https://wac-cdn.atlassian.com/dam/jcr:a13c18d6-94f3-4fc4-84fb-2b8f1b2fd339/01%20How%20it%20works.svg"
          url="https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow"
        />
      </Section>
      <Section level={3} title="Gitflow Workflow">
        <Image
          src="https://wac-cdn.atlassian.com/dam/jcr:34c86360-8dea-4be4-92f7-6597d4d5bfae/02%20Feature%20branches.svg"
          url="https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow"
        />
      </Section>
      <Section level={3} title="Gitflow Workflow">
        <Image
          src="https://wac-cdn.atlassian.com/dam/jcr:8f00f1a4-ef2d-498a-a2c6-8020bb97902f/03%20Release%20branches.svg"
          url="https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow"
        />
      </Section>
      <Section level={3} title="Gitflow Workflow">
        <Image
          src="https://wac-cdn.atlassian.com/dam/jcr:cc0b526e-adb7-4d45-874e-9bcea9898b4a/04%20Hotfix%20branches.svg"
          url="https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow"
        />
      </Section>
      <Section level={3} title="Forking Workflow">
        <List
          fragment={[true, true]}
          items={[
            [
              "Similaire au **Feature Branch Workflow**",
              ["**Fork** au lieu de créer une branche"],
            ],
            "Chaque développeur a sa propre **copie** du dépôt",
          ]}
        />
      </Section>
      <Section level={3} title="Quel workflow choisir ?">
        <List
          fragment={[true, true]}
          items={[
            "Éviter le **Centralized**",
            "**Feature Branch** pour les **petits** projets (même seul)",
            [
              "Idéalement le **Gitflow** ou une simplification",
              [
                "[GitHub flow](https://docs.github.com/fr/get-started/quickstart/github-flow)",
                "[GitLab flow](https://about.gitlab.com/topics/version-control/what-is-gitlab-flow/)",
              ],
            ],
            "**Adapter** le workflow selon les collaborateurs et le projet",
          ]}
        />
      </Section>
      <Section level={3} title='"Rebase" Workflow'>
        <List
          fragment={[true, true]}
          items={[
            "Ma propre adaptation du **Gitflow**",
            "**main** : déployé en **production**",
            "**develop** : déployé en **pré-production**",
            "**tag** : v0.1.0, v1.0.0, ... sur main",
            "**feature** : branche par fonctionnalité",
            "Historique **linéaire**, fast-forward merge après rebase",
          ]}
        />
      </Section>
      <Section level={4} title="Feature branch">
        <Mermaid>
          {`
          gitGraph
            commit id: "feat: initialize"
            branch develop
            commit id: "feat: add a"
            branch feature/1
            commit id: "feat: add 1a"
            commit id: "feat: add 1b"
            checkout develop
            commit id: "feat: add b"
          `}
        </Mermaid>
      </Section>
      <Section level={4} title="Merge to develop">
        <Mermaid>
          {`
          gitGraph
            commit id: "feat: initialize"
            branch develop
            commit id: "feat: add a"
            commit id: "feat: add b"
            commit id: "feat: add 1a"
            commit id: "feat: add 1b"
          `}
        </Mermaid>
      </Section>
      <Section level={4} title="Deploy">
        <Mermaid>
          {`
          gitGraph
            commit id: "feat: initialize"
            commit id: "feat: add a"
            commit id: "feat: add b"
            commit id: "feat: add 1a"
            commit id: "feat: add 1b" tag: "v0.1.0"
          `}
        </Mermaid>
      </Section>
    </RevealDeck>
  );
}
