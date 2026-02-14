import { Image, List, Section, Text } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Sre(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="sre"
      title="Ingénierie de la fiabilité des sites"
      subTitle="DevOps"
    >
      <Section level={2} title="Ingénierie de la fiabilité des sites">
        <Text>Site Reliability Engineering (SRE)</Text>
        <Text fragment>
          SRE is what you get when you treat **operations** as if it’s a
          **software** problem.
        </Text>
        <Text fragment>https://sre.google/</Text>
      </Section>
      <Section level={2} title="SRE">
        <List
          fragment
          items={[
            "Créé en 2004 chez Google par Ben Treynor Sloss.",
            "Le principe : Un·e ingénieur·e **logiciel** qui s'occupe de l'**opérationnel**.",
            "**Développe** des outils pour **automatiser** les tâches opérationnelles.",
          ]}
        />
      </Section>
      <Section level={2} title="SRE vs DevOps">
        <List
          fragment={[false, true]}
          items={[
            [
              "Similarités :",
              [
                "**Collaboration** entre les équipes.",
                "**Automatisation** des tâches (tâches manuelles répétitives à bannir).",
              ],
            ],
            [
              "Différences :",
              [
                "SRE **précède** d'environ 3 ans DevOps (2007).",
                "SRE est une **pratique**, DevOps est une **culture**.",
                "DevOps se concentre sur la **livraison** de logiciels, SRE sur la **fiabilité** des systèmes",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Élimination des labeurs (toil)">
        <Text>Une tâche est probablement un labeur lorsque c'est : </Text>
        <List
          fragment
          items={[
            "**Manuel** : intervention humaine",
            "**Répétitif** : refaire la même chose",
            "**Automatisable** : une machine peut le faire",
            "**réactif** (pas proactif) : répondre à des événements au lieu de prévenir leur apparition",
            "**Sans valeur ajoutée durable** : réparer sans améliorer",
            "**Pas scalable** : O(n) au lieu de O(1)",
          ]}
        />
      </Section>
      <Section level={2} title="Conséquences des labeurs (toil)">
        <Text>Si on perd trop de temps à faire des labeurs :</Text>
        <List
          fragment
          items={[
            "**Carrière stagnante** : pas de temps pour apprendre/évoluer",
            "**Moral bas** : chacun·e a une limite de labeurs supportables",
          ]}
        />
      </Section>
      <Section level={3} title="Dette technique">
        <Image
          src="https://www.monkeyuser.com/2018/tech-debt/106-tech-debt.png"
          url="https://www.monkeyuser.com/2018/tech-debt/"
        />
      </Section>
      <Section
        level={2}
        title="Lessons Learned from Two Decades of Site Reliability Engineering"
      >
        <Text>
          https://sre.google/resources/practices-and-processes/twenty-years-of-sre-lessons-learned/
        </Text>
      </Section>
    </RevealDeck>
  );
}
