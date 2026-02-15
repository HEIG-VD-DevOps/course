import { Image, List, Section, Text } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Gitops(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="gitops"
      title="GitOps"
      subTitle="DevOps"
    >
      <Section level={2} title="GitOps">
        <Text>DevOps + IaC + CD = GitOps</Text>
      </Section>
      <Section level={3} title="Historique GitOps">
        <Image
          src="/course/img/gitops/Short-Line-Time-backWhite-2022v2.png"
          url="https://www.weave.works/technologies/gitops/"
        />
      </Section>
      <Section level={3} title="4 Principes du GitOps">
        <List
          fragment={[true, true]}
          items={[
            ["**Déclaratif**", ["Infrastructure as Code"]],
            [
              "**Versionné** et **immutable**",
              ["Git comme source de vérité", "Historique et collaboration"],
            ],
            [
              "**Automatique** (Pulled automatically)",
              ["Continuous Deployment"],
            ],
            [
              "**Vérification** (Continuously reconciled)",
              ["Monitoring et alertes"],
            ],
          ]}
        />
      </Section>
      <Section level={3} title="Outils du GitOps">
        <Image
          src="/course/img/gitops/Guide-To-GitOps-Diagrams1.png"
          url="https://www.weave.works/technologies/gitops/"
        />
      </Section>
      <Section level={2} title="ArgoCD">
        <Image
          src="https://argo-cd.readthedocs.io/en/stable/assets/logo.png"
          url="https://argo-cd.readthedocs.io/en/stable/"
          height="256px"
        />
        <List
          fragment
          items={[
            "**Outils** GitOps déployé sur **Kubernetes**",
            "**Synchronisation** d'un [Helm Chart](https://helm.sh/) ou d'un [Kustomize](https://kustomize.io/) sur Git avec un cluster Kubernetes",
          ]}
        />
      </Section>
      <Section level={2} title="ArgoCD">
        <Image
          src="https://redhat-scholars.github.io/argocd-tutorial/argocd-tutorial/_images/argocd-sync-flow.png"
          url="https://redhat-scholars.github.io/argocd-tutorial/argocd-tutorial/index.html"
        />
      </Section>
      <Section level={2} title="ArgoCD">
        <Image
          src="https://picluster.ricsanfre.com/assets/img/cicd-gitops-architecture.png"
          url="https://picluster.ricsanfre.com/docs/argocd/"
        />
      </Section>
      <Section level={2} title="ArgoCD">
        <Image
          src="https://argoproj.github.io/argo-cd-ui.gif"
          url="https://argoproj.github.io/cd/"
        />
      </Section>
    </RevealDeck>
  );
}
