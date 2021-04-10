import {
  LitElement,
  html,
  css,
  CSSResult,
  customElement,
  property,
  TemplateResult,
} from "lit-element";

import Hls from 'hls.js';

@customElement("pleno-video")
export default class PlenoVideo extends LitElement {
  @property({type: String}) src = "";

  async firstUpdated() {
    if (Hls.isSupported() && this.shadowRoot && this.src !== "") {
      const video = this.shadowRoot.getElementById('video') as HTMLMediaElement;
      const hls = new Hls();
      hls.attachMedia(video);
      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        hls.loadSource(this.src);
      });
    }
  }

  protected render(): TemplateResult {
    return html`
      <video id="video" controls preload="auto"></video>
    `;
  }

  static get styles(): CSSResult {
    return css`
      video {
        width: 100%;
        height: 100%;
      }
    `;
  }
}

