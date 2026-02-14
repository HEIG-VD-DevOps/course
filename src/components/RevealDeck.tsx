import { useLocation } from "@docusaurus/router";
import { Section } from "@site/src/components/Deck";
import Reveal from "@site/src/components/Reveal";
import { PropsWithChildren } from "react";

export default function RevealDeck(
  props: PropsWithChildren<{
    embedded: boolean;
    name: string;
    title: string;
    subTitle?: string;
  }>,
) {
  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const page = urlSearchParams.get("page") !== null;

  return (
    <Reveal name={props.name} full={!props.embedded} page={page}>
      <Section key={0} level={1} title={props.title}>
        {props.subTitle}
      </Section>
      {props.children}
    </Reveal>
  );
}
