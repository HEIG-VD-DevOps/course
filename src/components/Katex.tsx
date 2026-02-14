import clsx from "clsx";
import katex from "katex";
import { PropsWithChildren, useEffect, useRef } from "react";

export default function Katex(
  props: PropsWithChildren<{ fragment?: boolean }>,
) {
  const divRef = useRef<HTMLDivElement>();

  useEffect(() => {
    katex.render(props.children.toString().trim() ?? "", divRef.current, {
      output: "mathml",
      throwOnError: true,
    });
  });

  return (
    <div ref={divRef} className={clsx("katex", { fragment: props.fragment })} />
  );
}
