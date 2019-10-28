import { LitElement, html } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';
import './person-element.js';
import groupBy from '../node_modules/lodash-es/groupBy.js';
import images from '../defaultImages.json';

class MyElement extends LitElement {
  constructor() {
    super();
    this.images = images;
    this.persons = groupBy(this.images, 'id');
    this.direction = { 'p1': 'c', 'p2': 'c' };
    this.imagePositions = {};
    this.addEventListener('person-element-loaded', this.handlePersonElementLoaded);
    document.addEventListener('mousemove', this.onMousemove.bind(this))
  }

  calcImagePerCordinate(imagePosition, { x, y }) {
    const imageTop = imagePosition.top;
    const imageLeft = imagePosition.left;
    const imageWidth = imagePosition.width;
    const imageHeight = imagePosition.height;
    if (x < imageLeft) {
      if (y < imageTop) {
        return 'tl'
      } else if (y > imageTop + imageHeight) {
        return 'bl'
      } else {
        return 'l'
      }
    } else if (x > imageLeft + imageWidth) {
      if (y < imageTop) {
        return 'tr'
      } else if (y > imageTop + imageHeight) {
        return 'br'
      } else {
        return 'r'
      }
    } else {
      if (y < imageTop) {
        return 't'
      } else {
        return 'b'
      }
    }
  }

  handlePersonElementLoaded({ detail: { id, position } }) {
    this.imagePositions[id] = position;
  }

  onMousemove({ clientX, clientY }) {
    this.direction = this.images.reduce((result, { id }) => {
      if (this.imagePositions[id]) {
        result[id] = this.calcImagePerCordinate(this.imagePositions[id], { x: clientX, y: clientY })
      }
      return result;
    }, {})
    this.requestUpdate();
  }

  render() {
    const imageContainerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, 190px)',
      gridGap: '20px',
      padding: '10px 10px 10px 0'
    }

    const itemTemplates = [];
    Object.keys(this.persons).map(personId => {
      itemTemplates.push(html`<person-element .store=${this.persons[personId]} id=${personId} direction=${this.direction[personId]}></person-element>`);
    })

    return html`
      <div style=${styleMap(imageContainerStyle)}>${itemTemplates}</div>
    `;
  }
}
customElements.define('my-element', MyElement);
