import { Image, List, Section, Text } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Devsecops(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="devsecops"
      title="DevSecOps"
      subTitle="DevOps"
    >
      <Section level={3} title="DevOps + Sécurité">
        <Image
          src="https://dt-cdn.net/images/devsecops-image-2000-6557ba1b00.png"
          url="https://www.dynatrace.com/news/blog/what-is-devsecops/"
        />
      </Section>
      <Section level={2} title="DevSecOps">
        <List
          fragment
          items={[
            "**À l'époque** : Équipe sécurité **à part entière** et en **fin** de cycle.",
            "Sécurité **intégrée** au processus DevOps.",
            "**Tout le monde** responsable de la sécurité.",
            "**Automatisation** des tests de sécurité.",
          ]}
        />
      </Section>
      <Section level={3} title="DevSecOps Manifesto">
        <Text>https://www.devsecops.org/</Text>
        <List
          fragment
          items={[
            "Amélioration **continue**.",
            "**Collaboration** et **partage** (contribution publique).",
            "**Monitoring** et **tests** de sécurité **proactif** (Red Team vs Blue Team).",
          ]}
        />
      </Section>
      <Section level={3} title="Pen Testing">
        <List
          fragment={[true, true]}
          items={[
            "Penetration testing (Test d'intrusion)",
            "Tester la **sécurité** d'un système en **simulant** une attaque malveillante.",
            [
              '**Red Team vs Blue Team** est un "jeu" de Pen Testing.',
              [
                "Red Team : attaquant",
                "Blue Team : défenseur",
                "**Entraînement** des deux équipes",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={4} title="Purple Team">
        <Image
          src="https://sf-cdn.iansresearch.com/sitefinity/images/default-source/blogs/blog-features/red-blue-purple-teams-who-does-what.png"
          url="https://www.iansresearch.com/resources/all-blogs/post/security-blog/2022/04/19/understand-the-roles-of-red-blue-and-purple-teams"
        />
      </Section>
      <Section level={2} title="Shift Left"></Section>
      <Section level={3} title="Shift">
        <Image
          src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*dtBnysYjyhnFdD4I-f0IRw.png"
          url="https://medium.com/@dees3g/shift-left-testing-catching-defects-early-11396960d96e"
        />
      </Section>
      <Section level={3} title="Shift Left">
        <List
          fragment
          items={[
            "Se préoccuper (de la sécurité) **tôt** dans le cycle de vie du développement.",
            "**Détecter** les problèmes depuis la **planification**",
          ]}
        />
      </Section>
      <Section level={2} title="Bonnes pratiques">
        <List
          fragment
          items={[
            "**Automatisation** des tests de sécurité (SAST, DAST, etc.).",
            "**Monitoring** de la sécurité avec un système SIEM (Security Information and Event Management), comme un outils APM mais orienté sécurité.",
            "**IaC** pour éviter les erreurs de configuration.",
            "**Formation** des collaborateurs à la sécurité et **collaboration** (peer review, etc.).",
            "Infrastructure **immutable** pour minimiser les failles de sécurité.",
          ]}
        />
      </Section>
      <Section level={2} title="OWASP">
        <List
          fragment
          items={[
            "Open Web Application Security Project",
            "**Organisation** à but non lucratif.",
            "**Recommandations** pour sécuriser les applications web.",
          ]}
        />
      </Section>
      <Section level={3} title="OWASP Top 10">
        <Image
          src="https://owasp.org/www-project-top-ten/assets/images/mapping.png"
          url="https://owasp.org/www-project-top-ten/"
          height="500px"
        />
        <List
          fragment
          items={[
            "Les 10 **risques** de sécurité les plus **critiques**.",
            "A04:2021 : **Shift Left**",
            "A05,A06,A08:2021 : **Automatisation**",
            "A09:2021 : **SIEM**",
          ]}
        />
      </Section>
      <Section level={3} title="Selon Microsoft">
        <Image
          src="https://learn.microsoft.com/fr-fr/azure/cloud-adoption-framework/secure/media/devsecops-controls.png"
          url="https://learn.microsoft.com/fr-fr/azure/cloud-adoption-framework/secure/devsecops-controls"
        />
      </Section>
      <Section level={3} title="Selon Atlassian">
        <Image
          src="https://wac-cdn.atlassian.com/dam/jcr:5f26d67b-bed6-4be1-912b-4032de4d06b0/devsecops-diagram.png"
          url="https://www.atlassian.com/fr/devops/devops-tools/devsecops-tools"
        />
      </Section>
    </RevealDeck>
  );
}
