import { LitElement, html, css } from 'lit-element';
import './x-scrollable.js';

class XNestedScrollable extends LitElement {
  static get styles() {
    return css`
    :host {
      display: block;
    }
    #xRegion {
      width: 100px;
      height: 100px;
      overflow: auto;
    }`;
  }

  render() {
    return html`<div id="xRegion">
      <x-scrollable id="xScrollable" scroll-target="xRegion"></x-scrollable>
    </div>`;
  }
}
window.customElements.define('x-nested-scrollable', XNestedScrollable);
