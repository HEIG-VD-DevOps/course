import clsx from "clsx";
import {
  Children,
  createElement,
  PropsWithChildren,
  ReactElement,
} from "react";
import Markdown from "react-markdown";
import RehypeRaw from "rehype-raw";
import RemarkGfm from "remark-gfm";

export function trimIndentation(text: string) {
  const lines = text.split("\n");
  const firstLine = lines.find((line) => line.trim().length > 0);
  if (firstLine === undefined) {
    return text;
  }
  let i = 0;
  while (firstLine[i] === " ") {
    i++;
  }
  return lines.map((line) => line.slice(i)).join("\n");
}

export function Code(
  props: PropsWithChildren<{
    fragment?: boolean;
    lines?: string;
    height?: string;
  }>,
) {
  const unindented = trimIndentation(props.children.toString());
  return (
    <pre
      className={clsx({ fragment: props.fragment })}
      style={{ height: props.height }}
    >
      <code data-trim data-noescape data-line-numbers={props.lines ?? true}>
        {unindented}
      </code>
    </pre>
  );
}

export function Columns(
  props: PropsWithChildren<{
    vertical?: "start" | "center" | "end";
  }>,
) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: props.vertical ?? "center",
      }}
    >
      {Children.map(props.children, (child, index) => (
        <div
          key={index}
          style={{
            flex: 1,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

export function Image(props: {
  fragment?: boolean;
  src: string;
  url: string;
  height?: string;
  width?: string;
}) {
  return [
    <img
      key={0}
      className={clsx({ fragment: props.fragment })}
      style={{
        width: props.width ?? (props.height ? undefined : "100%"),
        height: props.height ?? "740px",
        margin: 0,
        objectFit: "contain",
      }}
      src={props.src}
    />,
    <p
      key={1}
      style={{
        fontSize: "small",
        lineHeight: 1,
        marginBottom: "1em",
        wordBreak: "break-all",
      }}
    >
      <a
        style={{
          color: "var(--ifm-color-gray)",
        }}
        href={props.url}
        target="_blank"
      >
        {props.url}
      </a>
    </p>,
  ];
}

export type ListItem = string | ReactElement | ListItem[];

export function List(props: {
  fragment?: boolean | boolean[];
  order?: boolean;
  items: ListItem[];
}) {
  const children = props.items.map((item, index) => (
    <li
      key={index}
      className={clsx({
        fragment: Array.isArray(props.fragment)
          ? props.fragment[0]
          : props.fragment,
      })}
      style={{
        listStyleType: item ? undefined : "none",
      }}
    >
      {typeof item === "string" ? (
        <Text>{item ? item : "&nbsp;"}</Text>
      ) : Array.isArray(item) ? (
        item.map((subitem, subindex) =>
          typeof subitem === "string" ? (
            <Text key={subindex}>{subitem ? subitem : "&nbsp;"}</Text>
          ) : Array.isArray(subitem) ? (
            <List
              key={subindex}
              items={subitem}
              fragment={
                Array.isArray(props.fragment)
                  ? props.fragment.slice(1)
                  : undefined
              }
            />
          ) : (
            subitem
          ),
        )
      ) : (
        item
      )}
    </li>
  ));
  return props.order ? <ol>{children}</ol> : <ul>{children}</ul>;
}

export function Section(
  props: PropsWithChildren<{
    level: number;
    title: string;
    fragment?: boolean;
  }>,
) {
  return (
    <section data-auto-animate>
      {createElement(
        `h${props.level}`,
        {
          className: clsx({ fragment: props.fragment }),
        },
        <Text>{props.title}</Text>,
      )}
      {props.children}
    </section>
  );
}

export function Table(props: {
  fragment?: boolean | number;
  headers?: string[];
  rows: (string | ReactElement)[][];
  rowHeaders?: string[];
  columnFixed?: boolean;
}) {
  return (
    <table
      className={clsx({
        fragment: typeof props.fragment === "number" || props.fragment,
      })}
      data-fragment-index={
        typeof props.fragment === "number" ? props.fragment : undefined
      }
      style={{
        display: "table",
        tableLayout: props.columnFixed ? "fixed" : undefined,
        width: props.columnFixed ? "100%" : undefined,
      }}
    >
      {props.headers ? (
        <thead>
          <tr>
            {props.headers.map((header, index) => (
              <th
                key={index}
                style={{ textAlign: "center", padding: "0em 1em" }}
              >
                <Text>{header ? header : "&nbsp;"}</Text>
              </th>
            ))}
          </tr>
        </thead>
      ) : undefined}
      <tbody>
        {props.rows.map((row, index) => (
          <tr key={index}>
            {props.rowHeaders ? (
              <th style={{ textAlign: "left", padding: "0em 1em" }}>
                <Text>{props.rowHeaders[index]}</Text>
              </th>
            ) : undefined}
            {row.map((item, index) => (
              <td
                key={index}
                style={{
                  textAlign: "center",
                  padding:
                    typeof item === "string" || item.type === Text
                      ? "0em 1em"
                      : 0,
                }}
              >
                {typeof item === "string" ? (
                  <Text>{item ? item : "&nbsp;"}</Text>
                ) : (
                  item
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function Text(
  props: PropsWithChildren<{
    fragment?: boolean;
    color?: "green" | "red" | "blue";
  }>,
) {
  return props.children ? (
    <div
      className={clsx(
        {
          fragment: props.fragment,
        },
        props.color,
      )}
    >
      <Markdown rehypePlugins={[RehypeRaw]} remarkPlugins={[RemarkGfm]}>
        {props.children.toString()}
      </Markdown>
    </div>
  ) : (
    <div>&nbsp;</div>
  );
}
