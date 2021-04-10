import {
  LitElement,
  html,
  customElement,
  TemplateResult,
  css,
  CSSResult,
} from "lit-element";

import './PlenoChatMessage.js';

@customElement("pleno-chat")
export default class PlenoChat extends LitElement {
  messages = [
    {time: '12:05', user: 'Jimmy', text: 'Ahoj!'},
    {time: '12:05', user: 'Jimmy', text: 'Ahoj!'},
    {time: '12:05', user: 'Jimmy', text: 'Ahoj!'},
    {time: '12:05', user: 'Jimmy', text: 'Ahoj!'},
    {time: '12:05', user: 'Jimmy', text: 'Ahoj!'},
    {time: '12:05', user: 'Jimmy', text: 'Ahoj!'},
    {time: '12:05', user: 'Jimmy', text: 'Ahoj!'},
    {time: '12:05', user: 'Jimmy', text: 'Ahoj!'},
    {time: '12:05', user: 'Jimmy', text: 'Ahoj!'},
    {time: '12:05', user: 'Jimmy', text: 'Ahoj!'},
    {time: '12:05', user: 'Jimmy', text: 'Ahoj!'},
    {time: '12:05', user: 'Jimmy', text: 'Ahoj!'}
  ];

   protected render(): TemplateResult {
     return html`
       <div class="wrapper">
         ${this.messages.map(message => html`<pleno-chat.message time=${message.time} user=${message.user} text=${message.text}></pleno-chat.message>`)}
       </div>
     `;
   }

  static get styles(): CSSResult {
    return css`
      :host {
        display: block;
        height: 100%;
      }

      .wrapper {
        height: 100%;
      }
    `;
  }
}
