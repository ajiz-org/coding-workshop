function elements(...tagNames) {
  tagNames.forEach((tagName) => element(tagName));
}
async function element(tagName, cb) {
  if (customElements.get(tagName)) return;

  const templateHTML = await (await fetch(`${tagName}.html`)).text();

  const template = document.createElement("template");
  template.innerHTML = templateHTML;
  const { content } = template;

  customElements.define(
    tagName,
    class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(content.cloneNode(true));
        const old = window.root;
        window.root = this.shadowRoot;
        for (const script of this.shadowRoot.querySelectorAll("script")) {
          const clone = document.createElement("script");
          for (const attrib of [...script.attributes]) {
            clone.setAttribute(attrib.name, attrib.value);
          }
          clone.textContent = script.textContent;
          script.remove();
          this.shadowRoot.appendChild(clone);
        }
        window.root = old;
        cb?.(this.shadowRoot);
      }
    }
  );
}
