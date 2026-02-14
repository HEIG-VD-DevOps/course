import { Api } from "reveal.js";

export default () => ({
  id: "toc",
  init: (reveal: Api) => {
    const div = document.createElement("div");
    div.classList.add("toc");
    let content: string = "";
    let lastName: string = "";
    reveal
      .getSlidesElement()
      ?.querySelectorAll("h1, h2")
      .forEach((element: Element) => {
        const name = element.textContent;
        if (name === lastName) {
          return;
        } else {
          lastName = name;
        }
        if (element.localName === "h2") {
          content += "&nbsp;&nbsp;";
        }
        content += element.textContent + "<br />";
      });
    div.innerHTML = content;
    reveal.getSlidesElement().appendChild(div);
  },
});
