import "reveal.js/dist/reveal.css";

import "@site/src/css/highlight.scss";
import "@site/src/css/reveal.scss";

import useIsBrowser from "@docusaurus/useIsBrowser";
import Footer from "@site/src/components/plugins/footer";
import Link from "@site/src/components/plugins/link";
import Toc from "@site/src/components/plugins/toc";
import { MermaidConfig } from "mermaid";
import { PropsWithChildren, useEffect, useRef } from "react";
import { Api } from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown";

export const mermaidConfig: MermaidConfig = {
  sequence: {
    mirrorActors: false,
    showSequenceNumbers: true,
  },
  theme: "neutral",
  themeVariables: {
    fontFamily: "unset",
  },
  timeline: {
    disableMulticolor: true,
  },
};

/**
 * https://revealjs.com/react/
 */
export default function Reveal(
  props: PropsWithChildren<{
    name: string;
    full?: boolean;
    page?: boolean;
  }>,
) {
  const isBrowser = useIsBrowser();
  const divRef = useRef<HTMLDivElement>();
  const deckRef = useRef<Api | null>(null);

  function resize() {
    if (props.full) {
      divRef.current.style.height = `${window.innerHeight}px`;
    }
  }

  useEffect(() => {
    if (deckRef.current) {
      return;
    }

    Promise.all([
      import("reveal.js"),
      import("reveal.js/plugin/highlight/highlight"),
    ]).then(([reveal, highlight]) => {
      deckRef.current = new reveal.default(divRef.current!, {
        width: 1440,
        height: 900,
        plugins: [Markdown, highlight.default, Footer, Link, Toc],
        autoAnimateDuration: 0.25,
        autoAnimateUnmatched: false,
        controlsLayout: "edges",
        embedded: !props.full,
        fragments: !props.page,
        hash: true,
        pdfMaxPagesPerSlide: 1,
        pdfSeparateFragments: false,
        scrollActivationWidth: null,
        slideNumber: "c/t",
        transition: "fade",
        transitionSpeed: "fast",
      });
      deckRef.current.initialize();
    });

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);

      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);

  const revealDiv = (
    <div ref={divRef} className="reveal">
      <div className="slides">{props.children}</div>
    </div>
  );

  let pageUrlString = "";
  let fullUrlString = "";
  let printUrlString = "";
  if (isBrowser) {
    const slideUrl = new URL(`/course/slides/${props.name}`, window.location.origin);
    //const slideUrl = new URL(`/slides/${props.name}`, window.location.origin);
    const pageUrl = new URL(slideUrl);
    pageUrl.searchParams.append("page", "");
    const printUrl = new URL(slideUrl);
    printUrl.searchParams.append("print-pdf", "");
    pageUrlString = pageUrl.toString();
    fullUrlString = slideUrl.toString();
    printUrlString = printUrl.toString();
  }

  if (props.full) {
    return revealDiv;
  } else {
    return (
      <div>
        {revealDiv}
        <kbd>F</kbd> pour passer en plein écran ou <kbd>O</kbd> pour afficher la
        vue d'ensemble.
        <br />
        Versions{" "}
        <a href={pageUrlString} target="_blank">
          sans animation
        </a>
        ,{" "}
        <a href={fullUrlString} target="_blank">
          plein écran
        </a>
        ,{" "}
        <a href={printUrlString} target="_blank">
          imprimable
        </a>
        .
      </div>
    );
  }
}
