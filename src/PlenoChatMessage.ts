import {
  LitElement,
  html,
  customElement,
  TemplateResult,
  property,
  css,
  CSSResult,
} from "lit-element";

@customElement("pleno-chat.message")
export default class PlenoChatMessage extends LitElement {
  @property() time = "";

  @property() user = "";

  @property() text = "";

  protected render(): TemplateResult {
    return html`
      <section class="wrapper">
        <header>
          ${this.user}
          <time>${this.time}</time>
        </header>
        <article>${this.text}</article>
      </section>
    `;
  }

  static get styles(): CSSResult {
    return css`
      :host {
        display: block;
      }

      .wrapper {
        background-color: var(--middle-blue);

        margin: 16px;
        padding: 16px;

        border-radius: 8px;

        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .wrapper header {
        display: flex;
        justify-content: space-between;
      }
    `;
  }
}

