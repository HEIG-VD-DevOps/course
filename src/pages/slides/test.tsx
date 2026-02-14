import { Image, List, Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Test(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="test"
      title="Test automatisé"
      subTitle="DevOps"
    >
      <Section level={3} title="Tester c'est douter">
        <Image
          src="https://live.staticflickr.com/4500/37150757250_00a4a2a533_c.jpg"
          url="https://www.flickr.com/photos/xapn/37150757250"
        />
      </Section>
      <Section level={3} title="Pourquoi ?">
        <List
          fragment
          items={[
            "Éviter les **bugs** et les **régressions**",
            "Vérifier la **sécurité** et la **performance**",
            "Valider les **spécifications**",
          ]}
        />
      </Section>
      <Section level={3} title="Quand ?">
        <Image
          src="https://www.researchgate.net/profile/Maurice-Dawson/publication/255965523/figure/fig1/AS:297976107945984@1448054448271/IBM-System-Science-Institute-Relative-Cost-of-Fixing-Defects.png"
          url="https://www.researchgate.net/figure/IBM-System-Science-Institute-Relative-Cost-of-Fixing-Defects_fig1_255965523"
        />
      </Section>
      <Section level={3} title="Catégorisation des tests">
        <Image
          src="https://www.softwaretestinghelp.com/wp-content/qa/uploads/2007/08/Classification-of-Software-testing-types.png"
          url="https://www.softwaretestinghelp.com/types-of-software-testing/"
        />
      </Section>
      <Section level={2} title="(Non-)Fonctionnel">
        <List
          fragment={[false, true]}
          items={[
            [
              "Test _fonctionnel_",
              [
                "Vérifie que le logiciel fait ce qu'il est censé faire selon les **spécifications fonctionnelles**",
                "Exemples: unitaires, intégration, bout en bout",
              ],
            ],
            [
              "Test _non-fonctionnel_",
              [
                "Ne dépends pas des fonctionnalités du logiciel",
                "Exemples: sécurité, performance",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Types de tests">
        <List
          items={[
            "Tests **unitaires**",
            "Tests d'**intégration**",
            "Tests de **bout en bout** (E2E)",
            "Tests d'**acceptation**",
            "Tests de **sécurité**",
            "Tests de **performance**",
          ]}
        />
      </Section>
      <Section level={3} title="Tests unitaires">
        <List
          fragment
          items={[
            "Vérifie un **composant** isolé (fonction, classe, etc.)",
            [
              "Besoin de **mocks** pour simuler les dépendances",
              [
                "Mock au niveau de la **classe** ou de la **méthode**",
                "Frameworks : Mockito (Java), unittest.mock (Python), etc.",
              ],
            ],
            "Frameworks : JUnit (Java), Jest (JS), unittest (Python), etc.",
          ]}
        />
      </Section>
      <Section level={3} title="Tests d'intégration">
        <List
          fragment
          items={[
            "Vérifie l'**interaction** entre plusieurs composants",
            [
              "Appel à un **service** externe de test (mock)",
              [
                "Mock au niveau du **service** et de sa **réponse**",
                "Connection à une **base de données** de test",
              ],
            ],
            "Pour Spring (Java), démarrage d'un **contexte** de test",
          ]}
        />
      </Section>
      <Section level={3} title="Tests de bout en bout (end-to-end)">
        <List
          fragment
          items={[
            "Vérifie le **fonctionnement** de l'application en entier du point de vue de l'**utilisateur**",
            "Simulation depuis le **navigateur**: Selenium",
            "**Déploiement** de l'application sur un environnement de test",
          ]}
        />
      </Section>
      <Section level={4} title="Pyramide">
        <Image
          src="https://user.oc-static.com/upload/2019/08/17/15660719394662_P1CH1_pyramid.png"
          url="https://openclassrooms.com/fr/courses/6100311-testez-votre-code-java-pour-realiser-des-applications-de-qualite/6440061-choisissez-les-bons-tests-automatises-avec-la-pyramide-de-tests"
        />
      </Section>
      <Section level={4} title="Glace">
        <Image
          src="https://user.oc-static.com/upload/2019/08/18/15661075632134_P1CH1_cone_tests.png"
          url="https://openclassrooms.com/fr/courses/6100311-testez-votre-code-java-pour-realiser-des-applications-de-qualite/6440061-choisissez-les-bons-tests-automatises-avec-la-pyramide-de-tests"
        />
      </Section>
      <Section level={3} title="Tests d'acceptation">
        <List
          fragment
          items={[
            "Vérifie que le logiciel **répond aux besoins** du client",
            "**Scénarios** de test",
            "**Déploiement** de l'application sur un environnement accessible au client",
            "**Rapport** de test",
            "Proche du E2E mais orienté **métier**",
          ]}
        />
      </Section>
      <Section level={3} title="Tests de sécurité">
        <List
          fragment
          items={[
            "Vérifie que le logiciel n'est pas **vulnérable** aux attaques",
            "Vérification des **dépendances** vulnérables : [OWASP Dependency Check](https://owasp.org/www-project-dependency-check/), [GitHub Dependabot](https://github.com/dependabot)",
            "Analyse du **code source** : [SonarQube](https://www.sonarqube.org/), [GitLab SAST](https://docs.gitlab.com/ee/user/application_security/sast/)",
            "Vérification des vulnérabilités connues sur un **déploiement** : [OWASP ZAP](https://owasp.org/www-project-zap/)",
          ]}
        />
      </Section>
      <Section level={3} title="Tests de performance">
        <List
          fragment={[true, true]}
          items={[
            [
              "Vérifie que le logiciel **répond aux exigences** de performance",
              [
                "**Load** (charge) : temps de réponse en fonction du nombre d'utilisateurs",
                "**Endurance** : stabilité sur le long terme",
                "**Stress** (surcharge) : stabilité en cas de surcharge",
                "**Scale** : adaptation à une montée en charge",
              ],
            ],
            "Déploiement sur un environnement dédié avec les même **ressources** que la production",
          ]}
        />
      </Section>
      <Section level={2} title="Couverture de code">
        <List
          fragment
          items={[
            [
              "Mesure le **pourcentage** de code couvert par les tests",
              [
                "[JaCoCo](https://www.eclemma.org/jacoco/) (Java), [Coverage.py](https://coverage.readthedocs.io/en/) (Python), etc.",
              ],
            ],
            "Couverture des lignes, conditions, fonctions, etc.",
            "Fixer un **objectif** de couverture : p. ex. 80%",
            "Bonne couverture **≠** bons tests",
          ]}
        />
      </Section>
      <Section level={2} title="Random testing">
        <List
          fragment
          items={[
            "Génération **aléatoire** de données de test",
            "Vérification du résultat selon les **spécifications**",
            "**Seed** pour pouvoir reproduire les tests en cas d'erreur",
          ]}
        />
      </Section>
      <Section level={2} title="Test-driven development (TDD)">
        <List
          fragment={[true, true]}
          items={[
            [
              "Écriture des tests **avant** le code",
              [
                "Ajouter un test",
                "Lancer tous les tests et vérifier l'échec",
                "Écrire le code",
                "Lancer tous les tests et vérifier le succès",
                "Refactor le code",
              ],
            ],
          ]}
        />
      </Section>
      <Section level={2} title="Test-driven development (TDD)">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/TDD_Global_Lifecycle.png"
          url="https://commons.wikimedia.org/wiki/File:TDD_Global_Lifecycle.png"
        />
      </Section>
      <Section level={3} title="Tester ou ne pas tester, telle est la question">
        <Image
          src="https://www.commitstrip.com/wp-content/uploads/2013/04/Strips-Conscienses-du-test-550-final.jpg"
          url="https://www.commitstrip.com/fr/2013/04/16/tester-ou-ne-pas-tester-telle-est-la-question/"
        />
      </Section>
    </RevealDeck>
  );
}
