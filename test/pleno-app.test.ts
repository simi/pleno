import { html, fixture, expect } from '@open-wc/testing';

import PlenoApp from '../src/PlenoApp.js';
import '../src/pleno-app.js';

describe('PlenoApp', () => {
  let element: PlenoApp;
  beforeEach(async () => {
    element = await fixture(html`<pleno-app></pleno-app>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
