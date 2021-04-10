import {
  LitElement,
  html,
  css,
  CSSResult,
  customElement,
  TemplateResult,
} from "lit-element";

import './PlenoVideo.js';

@customElement("pleno-app")
export default class PlenoApp extends LitElement {
   protected render(): TemplateResult {
    return html`
      <div class="wrapper">
        <header><h1>Pléno v0.1</h1></header>
        <section>
          <main>
            <pleno-video src="https://pspcr-ott-live.ssl.cdn.cra.cz/channels/ps-stream1/playlist/cze.m3u8"></pleno-video>
          </main>
          <aside></aside>
        </section>
        <footer></footer>
      </div>
    `;
  }

  static get styles(): CSSResult {
    return css`
      .wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
      }

      section {
        flex: 1;
        display: flex;
        flex-direction: row;
      }

      header {
        background-color: steelblue;
      }

      header h1 {
        margin: 0;
        padding: 16px;
      }

      footer {
        height: 32px;
        background-color: steelblue;
      }

      main {
        background-color: darkblue;
        flex: 1;
      }

      aside {
        max-width: 400px;
        background-color: cornflowerblue;
        flex: 1;
      }

      @media (max-width: 1024px) {
        section {
          flex-direction: column;
        }

        aside {
          max-width: none;
          max-height: 200px;
        }
      }
    `;
  }
}
