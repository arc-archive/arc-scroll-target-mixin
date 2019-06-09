import { LitElement, html, css } from 'lit-element';
import { ArcScrollTargetMixin } from '../arc-scroll-target-mixin.js';

class XScrollable extends ArcScrollTargetMixin(LitElement) {
  static get styles() {
    return css`
    :host {
      display: block;
      font: 14px arial;
    }

    .item {
      border-bottom: 1px solid #ccc;
      background-color: white;
      padding: 20px;
      width: 200%;
    }`;
  }

  static get properties() {
    const top = super.properties || {};
    const props = {
      itemCount: {type: Number}
    };
    return Object.assign({}, top, props);
  }

  constructor() {
    super();
    this.itemCount = 200;
    // this._defaultScrollTarget = null;
  }

  render() {
    const items = this._getItems(this.itemCount);
    return html`
    ${items.map((item, index) => html`<div class="item">${index}</div>`)}
    `;
  }

  _getItems(itemCount) {
    const items = new Array(itemCount);
    while (itemCount > 0) {
      items[--itemCount] = true;
    }
    return items;
  }
}
window.customElements.define('x-scrollable', XScrollable);