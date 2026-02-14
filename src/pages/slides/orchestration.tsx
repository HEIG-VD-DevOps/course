import { Code, Image, List, Section, Text } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Orchestration(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="orchestration"
      title="Orchestration"
      subTitle="DevOps"
    >
      <Section level={2} title="Orchestration">
        <List
          fragment
          items={[
            "**Orchestration** des **conteneurs** :",
            "**Automatiser** &hellip;",
            "l'**organisation**, la **coordination** et la **gestion**",
            "&hellip; des **conteneurs**",
          ]}
        />
      </Section>
      <Section level={2} title="Déploiement">
        <Image
          src="https://kubernetes.io/images/docs/Container_Evolution.svg"
          url="https://kubernetes.io/docs/concepts/overview/"
        />
      </Section>
      <Section level={2} title="Orchestrateurs"></Section>
      <Section level={3} title="Docker Compose">
        <List
          fragment
          items={[
            "Limité à une **machine** (host)",
            [
              "Définition en **YAML**",
              ["Healthcheck", "Scaling", "Restart policy", "&hellip;"],
            ],
            "**Simple** et idéal pour un PoC, un test ou un développement",
          ]}
        />
      </Section>
      <Section level={3} title="Docker Swarm">
        <List
          fragment
          items={[
            "**Cluster** de machines (hosts)",
            [
              "Chaque machine est un **node** qui peut être soit",
              [
                "**Manager** : gère le cluster",
                "**Worker** : exécute les conteneurs",
              ],
            ],
            "**CLI**, pas de GUI intégrée",
          ]}
        />
      </Section>
      <Section level={3} title="Docker Swarm">
        <Image
          src="https://docs.docker.com/engine/swarm/images/swarm-diagram.webp"
          url="https://docs.docker.com/engine/swarm/how-swarm-mode-works/nodes/"
        />
      </Section>
      <Section level={3} title="Kubernetes">
        <List
          fragment
          items={[
            "**K8s**",
            "Créé chez **Google** et offert à la **CNCF** (Cloud Native Computing Foundation)",
            "**Master** et **Nodes**",
            "**CLI** et **GUI** (Dashboard)",
          ]}
        />
      </Section>
      <Section level={3} title="Kubernetes">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/b/be/Kubernetes.png"
          url="https://commons.wikimedia.org/wiki/File:Kubernetes.png"
        />
      </Section>
      <Section level={3} title="OpenShift">
        <List
          fragment
          items={[
            "Développé par **Red Hat** par dessus **Kubernetes**",
            [
              "Fonctionnalités de K8s +",
              [
                "Image registry",
                "CI/CD intégré",
                "Meilleur cloisonnement entre les projets",
              ],
            ],
            "**Open Source** (OKD) et **Enterprise**",
          ]}
        />
      </Section>
      <Section level={3} title="OpenShift">
        <Image
          src="https://access.redhat.com/webassets/avalon/d/OpenShift_Container_Platform-4.7-About-en-US/images/85e2ccff4943c4c3e4378306c0732873/oke-about.png"
          url="https://access.redhat.com/documentation/en-us/openshift_container_platform/4.7/html/about/oke-about"
        />
      </Section>
      <Section level={3} title="Alternatives">
        <List
          fragment
          items={[
            "**Nomad** : par **HashiCorp** (Vagrant, Terraform, Vault, Consul, ...)",
            "**Mesos** : par **Apache**",
          ]}
        />
      </Section>
      <Section level={3} title="Rancher">
        <List
          fragment
          items={[
            "**Rancher** est un **orchestrateur de K8s**",
            "Evite le **vendor lock-in**",
          ]}
        />
      </Section>
      <Section level={3} title="Rancher">
        <Image
          src="https://ranchermanager.docs.rancher.com/assets/images/rancher-architecture-separation-of-rancher-server-b32508a12beee49d72836caa5469e585.svg"
          url="https://ranchermanager.docs.rancher.com/reference-guides/rancher-manager-architecture/architecture-recommendations"
        />
      </Section>
      <Section level={3} title="Rancher">
        <Image
          src="https://www.rancher.com/assets/img/logos/screen2-thumbnail-suse.svg"
          url="https://www.rancher.com/why-rancher"
        />
      </Section>
      <Section level={2} title="Kubernetes">
        <Image
          fragment
          src="https://www.cncf.io/wp-content/uploads/2020/09/Kubernetes-architecture-diagram-1-1.png"
          url="https://www.cncf.io/blog/2019/08/19/how-kubernetes-works/"
        />
      </Section>
      <Section level={3} title="Pod">
        <List
          fragment
          items={[
            "Plus petite **unité** déployable de K8s",
            [
              "1 ou plusieurs **conteneurs** qui partagent",
              ["le **réseau** (localhost)", "le **stockage** (volumes)"],
            ],
            "**Phases** : Pending, Running, Succeeded, Failed, Unknown",
            "**Restart policy** : Always, OnFailure, Never",
            "**Probes** (health check) : Startup (démarré), Readiness (prêt), Liveness (toujours en vie)",
          ]}
        />
      </Section>
      <Section level={3} title="Pod">
        <Code lines="1-10|2|6|8|10">
          {`
          apiVersion: v1
          kind: Pod
          metadata:
            name: nginx
          spec:
            containers:
              - name: nginx
                image: nginx:stable
                ports:
                  - containerPort: 80
          `}
        </Code>
      </Section>
      <Section level={3} title="Deployment">
        <List
          fragment={[true, true]}
          items={[
            [
              "Défini un **état souhaité** des Pods",
              ["Crée un **ReplicaSet** pour chaque nouvel **état**"],
            ],
            "**Rolling update** : déploiement progressif",
            "**Rollback** : retour à la version précédente",
            "**Scaling** : augmentation ou diminution du nombre de Pods",
          ]}
        />
      </Section>
      <Section level={3} title="Deployment">
        <Code lines="1-6|2|7-8,12|12-21">
          {`
          apiVersion: apps/v1
          kind: Deployment
          metadata:
            name: nginx-deployment
            labels:
              app: nginx
          spec:
            replicas: 3
            selector:
              matchLabels:
                app: nginx
            template:
              metadata:
                labels:
                  app: nginx
              spec:
                containers:
                  - name: nginx
                    image: nginx:stable
                    ports:
                      - containerPort: 80
          `}
        </Code>
      </Section>
      <Section level={3} title="Service">
        <List
          fragment={[true, true]}
          items={[
            [
              "**Reverse Proxy** sur les **Pods** (Reverse Proxy)",
              ["**Selector** sur les Pods"],
            ],
            "**Load Balancing** entre les Pods",
          ]}
        />
      </Section>
      <Section level={3} title="Service">
        <Image
          src="https://kubernetes.io/docs/tutorials/kubernetes-basics/public/images/module_04_labels.svg"
          url="https://kubernetes.io/docs/tutorials/kubernetes-basics/expose/expose-intro/"
        />
      </Section>
      <Section level={3} title="Service">
        <Code lines="1-13|15-26|5-6|20-21|11-13|22-26|13,26">
          {`
          apiVersion: v1
          kind: Pod
          metadata:
            name: nginx
            labels:
              app.kubernetes.io/name: proxy
          spec:
            containers:
              - name: nginx
                image: nginx:stable
                ports:
                  - containerPort: 80
                    name: http-web-svc

          apiVersion: v1
          kind: Service
          metadata:
            name: nginx-service
          spec:
            selector:
              app.kubernetes.io/name: proxy
            ports:
              - name: name-of-service-port
                protocol: TCP
                port: 80
                targetPort: http-web-svc
          `}
        </Code>
      </Section>
      <Section level={3} title="Probes">
        <Text>**Health check** des Pods</Text>
      </Section>
      <Section level={4} title="Readiness Probe">
        <Image
          src="https://storage.googleapis.com/gweb-cloudblog-publish/original_images/google-kubernetes-probe-readiness6ktf.GIF"
          url="https://cloud.google.com/blog/products/containers-kubernetes/kubernetes-best-practices-setting-up-health-checks-with-readiness-and-liveness-probes"
        />
      </Section>
      <Section level={4} title="Liveness Probe">
        <Image
          src="https://storage.googleapis.com/gweb-cloudblog-publish/original_images/google-kubernetes-probe-livenessae14.GIF"
          url="https://cloud.google.com/blog/products/containers-kubernetes/kubernetes-best-practices-setting-up-health-checks-with-readiness-and-liveness-probes"
        />
      </Section>
      <Section level={3} title="Ingress">
        <List
          fragment
          items={[
            "**Abstraction** qui définit un ensemble de **Services**",
            "Connexion **externe** au cluster",
          ]}
        />
      </Section>
      <Section level={3} title="Ingress">
        <Image
          src="https://kubernetes.io/docs/images/ingress.svg"
          url="https://kubernetes.io/docs/concepts/services-networking/ingress/"
        />
      </Section>
      <Section level={3} title="Volume">
        <Image
          src="https://vocon-it.com/wp-content/uploads/2018/12/2018-12-02-23_05_06-Minikube-and-Kubeadm-Google-Pr%C3%A4sentationen.png"
          url="https://vocon-it.com/2018/12/10/kubernetes-4-persistent-volumes-hello-world/"
        />
      </Section>
      <Section level={3} title="Configuration">
        <List
          fragment
          items={[
            "Définition des **ConfigMap** et **Secret** globalement",
            "**Injection** dans les Pods",
          ]}
        />
      </Section>
      <Section level={3} title="Namespace">
        <Image
          src="https://i0.wp.com/belowthemalt.com/wp-content/uploads/2022/04/image-5.png"
          url="https://belowthemalt.com/2022/04/09/kubernetes-namespaces/"
          height="500px"
        />
        <List
          fragment
          items={[
            "**Isolation** des ressources",
            "Nom **unique** au sein d'un namespace",
          ]}
        />
      </Section>
      <Section level={3} title="Configuration des ressources">
        <List
          fragment
          items={[
            "Fichier YAML pour définir les ressources",
            [
              "`kubectl apply -f deployment.yaml` pour les déployer",
              [
                "Deployment",
                "Service",
                "Ingress",
                "Volume",
                "ConfigMap",
                "Secret",
              ],
            ],
          ]}
        />
      </Section>
    </RevealDeck>
  );
}
