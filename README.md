# ArcScrollTargetMixin

[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/arc-scroll-target-mixin.svg)](https://www.npmjs.com/package/@advanced-rest-client/arc-scroll-target-mixin)

[![Tests and publishing](https://github.com/advanced-rest-client/arc-scroll-target-mixin/actions/workflows/deployment.yml/badge.svg)](https://github.com/advanced-rest-client/arc-scroll-target-mixin/actions/workflows/deployment.yml)

This mixin is a port of [iron-overlay-behavior](https://github.com/PolymerElements/iron-overlay-behavior)
that works with LitElement.

`ArcScrollTargetMixin` allows an element to respond to scroll events from a designated scroll target.

Elements that consume this mixin can override the `_scrollHandler`
method to add logic on the scroll event.

## Installation

```sh
npm i @advanced-rest-client/arc-scroll-target-mixin
```

## Usage

```javascript
import { LitElement } from 'lit-element';
import { ArcScrollTargetMixin } from '@advanced-rest-client/arc-scroll-target-mixin/arc-scroll-target-mixin.js';

class ArcScrollTargetImpl extends ArcScrollTargetMixin(LitElement) {
  static get properties() {
    const top = super.properties || {};
    const props = {
      myProp: { type: String }
    }
    return Object.assign({}, top, props);
  }

  _scrollHandler(e) {
    ...
  }
}
```

Note, You need to include properties from the mixin manually as simple class
extension overrides `properties`.

## Testing

```bash
npm run test
```

## Testing with Sauce Labs

```bash
npm run test:sl
```

## Demo

```bash
npm start
```
