import { Api } from "reveal.js";

export default () => ({
  id: "link",
  init: (reveal: Api) => {
    (reveal.getSlidesElement()?.querySelectorAll("a") ?? []).forEach(
      (element: Element) => {
        element.setAttribute("target", "_blank");
      },
    );
  },
});
