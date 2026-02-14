import { mermaidConfig } from "@site/src/components/Reveal";
import clsx from "clsx";
import mermaid from "mermaid";
import { PropsWithChildren, useEffect, useRef } from "react";

export default function Mermaid(
  props: PropsWithChildren<{ fragment?: boolean }>,
) {
  const divRef = useRef<HTMLDivElement>();

  mermaid.initialize({
    startOnLoad: false,
    ...mermaidConfig,
  });

  useEffect(() => {
    mermaid
      .render(
        `mermaid-${Math.random().toString(36).substring(2)}`,
        props.children.toString().trim(),
      )
      .then(
        (value) => {
          if (divRef.current) {
            divRef.current.innerHTML = value.svg;
          }
        },
        (error) => {
          if (divRef.current) {
            divRef.current.innerHTML = error;
            divRef.current.style.color = "red";
          }
        },
      );
  });

  return (
    <div
      ref={divRef}
      className={clsx("mermaid", { fragment: props.fragment })}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}
