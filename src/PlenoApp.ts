import {
  LitElement,
  html,
  css,
  CSSResult,
  customElement,
  TemplateResult,
} from "lit-element";

import './PlenoVideo.js';
import './PlenoChat.js';

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
          <aside>
            <pleno-chat></pleno-chat>
          </aside>
        </section>
        <footer>built with :love: by Ruby Elders</footer>
      </div>
    `;
  }

  static get styles(): CSSResult {
    return css`
      :host {
        --background-color: hsla(184, 19%, 83%, 1);
        --middle-blue: hsla(186, 52%, 67%, 1);
        display: block;
        height: 100%;
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        background-color: var(--background-color);
      }

      section {
        flex: 1;
        display: flex;
        flex-direction: row;
        overflow: auto;
      }

      header {
        flex: 0 0;
      }

      header h1 {
        margin: 0;
        padding: 16px;
      }

      footer {
        flex: 0 0;
        padding: 16px;
        text-align: center;
      }

      main {
        flex: 1;
        position: sticky;
        top: 0;
      }

      aside {
        max-width: 400px;
        flex: 1;
      }

      @media (max-width: 1024px) {
        section {
          flex-direction: column;
        }

        aside {
          max-width: none;
          max-height: 200px;
          flex: 0;
        }
      }
    `;
  }
}
