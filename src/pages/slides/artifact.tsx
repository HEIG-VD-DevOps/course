import { Code, Image, List, Section } from "@site/src/components/Deck";
import Mermaid from "@site/src/components/Mermaid";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Artifact(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="artifact"
      title="Artefact"
      subTitle="DevOps"
    >
      <Section level={3} title="Cycle de vie d'un programme">
        <Mermaid>
          {`
          flowchart LR
          subgraph "Développement"
            code[<i class="ph ph-code"></i> Code]-->build[<i class="ph ph-wrench"></i> Build]
          end
            build-->package[<i class="ph ph-package"></i> Package]-->run
          subgraph "Production"
            run[<i class="ph ph-play"></i> Run]-->deploy[<i class="ph ph-cloud"></i> Operate]
          end
          `}
        </Mermaid>
      </Section>
      <Section level={2} title="Package">
        <List
          fragment
          items={[
            "**Contrat** entre le développeur et l'opérateur",
            "**Format** de livraison",
            [
              "Exemples",
              [
                ".jar, .war, .ear (Java)",
                ".apk (Android)",
                ".exe, .dll (Windows)",
                ".html, .css, .js (Web)",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="Dépendances">
        <List
          fragment
          items={[
            "Besoin de libraries **externes** ?",
            "Comment les **gérer** et les **distribuer** ?",
            "**Gestionnaire de paquets**",
            [
              "Fichier de configuration (liste des dépendances)",
              ["pom.xml (Maven)", "package.json (npm)"],
            ],
          ]}
        />
      </Section>
      <Section level={4} title="Gestionnaire de paquets">
        <List
          fragment
          items={[
            "Maven, Gradle (Java)",
            "npm, pnpm, yarn (Node.js)",
            "APT (Advanced Packaging Tool) (Linux)",
            "pip, Poetry (Python)",
          ]}
        />
      </Section>
      <Section level={4} title="Dependency">
        <Image
          src="https://imgs.xkcd.com/comics/dependency.png"
          url="https://xkcd.com/2347"
        />
      </Section>
      <Section level={3} title="Configuration">
        <List
          fragment
          items={[
            "Comment **run** le programme ?",
            "Quel **OS** ?",
            "Quelle **version** ?",
            "Quelle **commande** ?",
            "Quels **arguments** ?",
          ]}
        />
      </Section>
      <Section level={2} title="Mieux qu'un paquet ?">
        <List
          fragment={[true, true]}
          items={[
            "Souhait : Code + Dépendances + Configuration",
            [
              "Solution 1 : Machine virtuelle ?",
              ["Problème : **lourd** et **lent**"],
            ],
            "Solution 2 : **OS-level** virtualization (Conteneur)",
          ]}
        />
      </Section>
      <Section level={2} title="Conteneur vs machine virtuelle">
        <Image
          src="https://www.docker.com/app/uploads/2021/11/docker-containerized-and-vm-transparent-bg.png"
          url="https://www.docker.com/resources/what-container/"
        />
      </Section>
      <Section level={2} title="Conteneur">
        <List
          fragment
          items={[
            "Partage le **noyau** de l'OS",
            "**Isolation** des ressources (fichiers, processus, ...)",
            "**Léger** (distribution) et **rapide** (démarrage)",
            [
              "**Docker** (leader)",
              [
                "Entreprise **privée**",
                "Construit sur des technologies **pré-existante** (namespaces, cgroups, ...)",
              ],
            ],
            ["**Podman** (alternative)", ["Projet **open-source**"]],
          ]}
        />
      </Section>
      <Section level={2} title="Conteneur">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/0/09/Docker-linux-interfaces.svg"
          url="https://commons.wikimedia.org/wiki/File:Docker-linux-interfaces.svg"
        />
      </Section>
      <Section level={2} title="Conteneur">
        <Image
          src="https://jfrog--c.documentforce.com/servlet/servlet.ImageServer?id=01569000008kqFT&oid=00D20000000M3v0"
          url="https://jfrog.com/devops-tools/article/understanding-and-building-docker-images/"
        />
      </Section>
      <Section level={3} title="Dockerfile">
        <Code>
          {`
          FROM python:3

          WORKDIR /usr/src/app

          COPY requirements.txt ./
          RUN pip install --no-cache-dir -r requirements.txt

          COPY . .

          CMD [ "python", "./your-daemon-or-script.py" ]
          `}
        </Code>
        <List
          fragment
          items={[
            "Recette pour **construire** une image",
            "[Bonnes pratiques](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) sur le site de Docker",
          ]}
        />
      </Section>
      <Section level={3} title="Couches">
        <Image
          src="https://docs.docker.com/build/images/cache-stack.png"
          url="https://docs.docker.com/build/cache/"
          height="75%"
        />
        <List fragment items={["Image = couches de **diff** de fichiers"]} />
      </Section>
      <Section level={3} title="Cache des couches">
        <Image
          src="https://docs.docker.com/build/images/cache-stack-invalidated.png"
          url="https://docs.docker.com/build/cache/"
          height="75%"
        />
        <List
          fragment
          items={[
            "**Ordre** des couches pour le **cache**",
            "Du plus **stable** (dépendances) au plus **volatile** (code)",
          ]}
        />
      </Section>
      <Section level={3} title="Container">
        <Image
          src="https://docs.docker.com/engine/storage/drivers/images/sharing-layers.webp"
          url="https://docs.docker.com/engine/storage/drivers/"
          height="75%"
        />
        <List
          fragment
          items={["**Partage** des couches entre les containers"]}
        />
      </Section>
      <Section level={3} title="Multi-stage builds">
        <Code lines="1-4|6-9|7">
          {`
          FROM maven:3.5.0-jdk-8-alpine AS builder
          ADD ./pom.xml pom.xml
          ADD ./src src/
          RUN mvn clean package

          FROM openjdk:8-jre-alpine
          COPY --from=builder target/my-app.jar my-app.jar
          EXPOSE 8080
          CMD ["java", "-jar", "my-app.jar"]
          `}
        </Code>
        <List
          fragment
          items={[
            "**Compiler** dans une image",
            "Plus **léger** (pas de JDK dans l'image finale)",
            "**Réutiliser** des couches",
          ]}
        />
      </Section>
      <Section level={3} title="Taille des images">
        <List
          fragment
          items={[
            "Taille de l'image = **somme** des couches",
            "Inclure que les fichiers **nécessaire**",
            "Utiliser les **multi-stage builds**",
            [
              "Préférer la version **alpine** des images ([Alpine Linux](https://alpinelinux.org/))",
              ["`python:3.11` ~360 Mo", "`python:3.11-alpine` ~18 Mo"],
            ],
            "Moins de packages **pré-installés**",
            "Parfois des problèmes de **compatibilité**",
          ]}
        />
      </Section>
      <Section level={3} title="Dockerignore">
        <List
          fragment
          items={[
            "Lors d'un build : `docker build -t my-image .`",
            "Envoi de tous les fichiers du **context** (répertoire courant) au **daemon**",
            "Utiliser un fichier [.dockerignore](https://docs.docker.com/engine/reference/builder/#dockerignore-file) pour **exclure** des fichiers -> build plus rapide",
          ]}
        />
        <Code fragment>
          {`
          # Ignore all files
          *
          # Allow files and directories
          !src/
          !pom.xml
          `}
        </Code>
      </Section>
      <Section level={3} title="Comment animer un dîner de codeurs">
        <Image
          src="https://www.commitstrip.com/wp-content/uploads/2016/06/Strip-Discussion-Docker-650-final.jpg"
          url="https://www.commitstrip.com/fr/2016/06/24/how-to-host-a-coder-dinner-party/"
        />
      </Section>
      <Section level={3} title="Docker Hub">
        <List
          fragment
          items={[
            "[hub.docker.com](https://hub.docker.com/)",
            "**Registre** d'images Docker",
            "**Public** et **privé** (payant)",
            "Préférez les images **officielles**",
          ]}
        />
      </Section>
      <Section level={2} title="Artefact">
        <List
          fragment
          items={[
            "**Résultat** d'un **build**",
            "Terme **générique** (pas de format spécifique) du paquet",
          ]}
        />
      </Section>
      <Section level={3} title="Artefact vs Package">
        <Mermaid>
          {`
          flowchart
          subgraph "Artefact"
            docker[Docker image]
            subgraph "Package"
              jar[JAR]
              npm[npm package]
              python[Python wheel]
            end
          end
          `}
        </Mermaid>
      </Section>
      <Section level={2} title="Gestionnaire d'artefacts">
        <List
          fragment
          items={[
            [
              "[Sonatype Nexus Repository](https://www.sonatype.com/nexus-repository-sonatype)",
              [
                "[Version OSS](https://www.sonatype.com/nexus-repository-oss) (open-source software)",
              ],
            ],
            [
              "[JFrog Artifactory](https://jfrog.com/artifactory/)",
              ["Version payante plus complète que Nexus"],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Versioning">
        <List
          fragment
          items={[
            "[Semantic Versioning](https://semver.org/)",
            "`MAJOR.MINOR.PATCH`",
            "`1.0.0`",
            "`1.0.1` (bug fix)",
            "`1.1.0` (new feature)",
            "`2.0.0` (breaking change)",
            [
              "Utilisé par les **gestionnaires de paquets**",
              [
                "`^1.0.0` (>= 1.0.0 &lt; 2.0.0)",
                "`~1.0.0` (>= 1.0.0 &lt; 1.1.0)",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="Docker Image Tag">
        <List
          fragment
          items={[
            ["`latest`", ["Par **défaut** si non spécifié"]],
            [
              "`1.3.2`",
              [
                "Spécifique à une **version** précise",
                "Pas de mise à jour des **patch** de **sécurité** automatiquement",
              ],
            ],
            [
              "`1.3`",
              [
                "Spécifique à une version **minor**",
                "**Recommandé** car **stable** et **sécurisé**",
                "Selon les projets, plutôt fixer la version **major**",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Fichier lock">
        <List
          fragment
          items={[
            "**Verrouille** les versions des dépendances",
            [
              "Exemples",
              ["`package-lock.json` (npm)", "`poetry.lock` (Poetry)"],
            ],
            "À **versionner** dans le dépôt de code",
          ]}
        />
      </Section>
    </RevealDeck>
  );
}
