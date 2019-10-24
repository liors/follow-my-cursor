import { LitElement, html } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';
import './person-element.js';
import groupBy from './node_modules/lodash-es/groupBy.js';

class MyElement extends LitElement {
  constructor() {
    super();
    this.images = [{ "direction": "c", "id": "p2", "src": "https://static.wixstatic.com/media/4eedb8_a2aca09246004ad681d4fa2741b19d1e~mv2.jpg/v1/fill/w_578,h_579,al_c,q_80,usm_0.66_1.00_0.01/4eedb8_a2aca09246004ad681d4fa2741b19d1e~mv2.jpg.webp" }, { "direction": "bl", "id": "p2", "src": "https://static.wixstatic.com/media/4eedb8_70d7a13cba5f475c91fe15354b2693ec~mv2.jpg/v1/fill/w_578,h_579,al_c,q_80,usm_0.66_1.00_0.01/4eedb8_70d7a13cba5f475c91fe15354b2693ec~mv2.jpg.webp" }, { "direction": "b", "id": "p2", "src": "https://static.wixstatic.com/media/4eedb8_4508bd59afe84dde944c8c46fefec635~mv2.jpg/v1/fill/w_578,h_579,al_c,q_80,usm_0.66_1.00_0.01/4eedb8_4508bd59afe84dde944c8c46fefec635~mv2.jpg.webp" }, { "direction": "br", "id": "p2", "src": "https://static.wixstatic.com/media/4eedb8_a6209e77e2f74f7abcd76ab3171c0b62~mv2.jpg/v1/fill/w_578,h_579,al_c,q_80,usm_0.66_1.00_0.01/4eedb8_a6209e77e2f74f7abcd76ab3171c0b62~mv2.jpg.webp" }, { "direction": "l", "id": "p2", "src": "https://static.wixstatic.com/media/4eedb8_0ed7d7a2e722495cba45a04cc2432b6c~mv2.jpg/v1/fill/w_578,h_579,al_c,q_80,usm_0.66_1.00_0.01/4eedb8_0ed7d7a2e722495cba45a04cc2432b6c~mv2.jpg.webp" }, { "direction": "r", "id": "p2", "src": "https://static.wixstatic.com/media/4eedb8_f4dcb89449394ff5bd43eff2d378a99b~mv2.jpg/v1/fill/w_578,h_579,al_c,q_80,usm_0.66_1.00_0.01/4eedb8_f4dcb89449394ff5bd43eff2d378a99b~mv2.jpg.webp" }, { "direction": "tr", "id": "p2", "src": "https://static.wixstatic.com/media/4eedb8_c8ac7569974141289a83dbe9dfb1ec12~mv2.jpg/v1/fill/w_578,h_579,al_c,q_80,usm_0.66_1.00_0.01/4eedb8_c8ac7569974141289a83dbe9dfb1ec12~mv2.jpg.webp" }, { "direction": "t", "id": "p2", "src": "https://static.wixstatic.com/media/4eedb8_eb6f1d5d9f934637aa055addbcd5f149~mv2.jpg/v1/fill/w_578,h_579,al_c,q_80,usm_0.66_1.00_0.01/4eedb8_eb6f1d5d9f934637aa055addbcd5f149~mv2.jpg.webp" }, { "direction": "tl", "id": "p2", "src": "https://static.wixstatic.com/media/4eedb8_cbb5efb8848d44e8aa2fd26b6a1ffece~mv2.jpg/v1/fill/w_578,h_579,al_c,q_80,usm_0.66_1.00_0.01/4eedb8_cbb5efb8848d44e8aa2fd26b6a1ffece~mv2.jpg.webp" }, { "direction": "c", "id": "p1", "src": "https://static.wixstatic.com/media/4eedb8_d6d684c7ddc64363a54cf39715586f92~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01/4eedb8_d6d684c7ddc64363a54cf39715586f92~mv2.jpg.webp" }, { "direction": "bl", "id": "p1", "src": "https://static.wixstatic.com/media/4eedb8_2a10441b860d44dea740900391cd3771~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01/4eedb8_2a10441b860d44dea740900391cd3771~mv2.jpg.webp" }, { "direction": "b", "id": "p1", "src": "https://static.wixstatic.com/media/4eedb8_9f7a69872e3e4fd89e1c7a051f169dc7~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01/4eedb8_9f7a69872e3e4fd89e1c7a051f169dc7~mv2.jpg.webp" }, { "direction": "br", "id": "p1", "src": "https://static.wixstatic.com/media/4eedb8_88264f1a60074049a8545c7a603a95cd~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01/4eedb8_88264f1a60074049a8545c7a603a95cd~mv2.jpg.webp" }, { "direction": "l", "id": "p1", "src": "https://static.wixstatic.com/media/4eedb8_58c4229718714a1eaced7501bc5f73c7~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01/4eedb8_58c4229718714a1eaced7501bc5f73c7~mv2.jpg.webp" }, { "direction": "r", "id": "p1", "src": "https://static.wixstatic.com/media/4eedb8_e5fc280de5024fcd8658b20f5a5e802b~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01/4eedb8_e5fc280de5024fcd8658b20f5a5e802b~mv2.jpg.webp" }, { "direction": "tr", "id": "p1", "src": "https://static.wixstatic.com/media/4eedb8_f1b7c5ff6e514ab0b7bb8428368f339f~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01/4eedb8_f1b7c5ff6e514ab0b7bb8428368f339f~mv2.jpg.webp" }, { "direction": "t", "id": "p1", "src": "https://static.wixstatic.com/media/4eedb8_822e31635aab4b36b38140a49d975f46~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01/4eedb8_822e31635aab4b36b38140a49d975f46~mv2.jpg.webp" }, { "direction": "tl", "id": "p1", "src": "https://static.wixstatic.com/media/4eedb8_833282486cb844709dfbda76709af39b~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01/4eedb8_833282486cb844709dfbda76709af39b~mv2.jpg.webp" }];
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
