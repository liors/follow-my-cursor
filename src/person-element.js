import { LitElement, html } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';

class MyElement extends LitElement {
    static get properties() {
        return {
            store: {
                type: Array
            },
            direction: {
                type: String,
                reflect: true
            },
            id: {
                type: String
            }
        };
    }

    constructor() {
        super();
    }

    firstUpdated() {
        const position = this.getBoundingClientRect();
        let myEvent = new CustomEvent('person-element-loaded', {
            detail: { position, id: this.id },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(myEvent);
    }


    getImageStyle(image) {
        const imageIsShownStyle = {
            height: '185px',
            width: '185px',
            top: '0',
            left: '0',
            position: 'absolute',
            zIndex: 1
        }
        const imageStyle = {
            height: '185px',
            width: '185px',
            top: '0',
            left: '0',
            position: 'absolute',
            zIndex: 0
        };

        if (image.direction === this.direction) {
            return imageIsShownStyle
        } else {
            return imageStyle;
        }
    }

    render() {
        const itemTemplates = [];
        this.store.map(image => {
            itemTemplates.push(html`<img style=${styleMap(this.getImageStyle(image))} src=${image.src}></img>`);
        })

        const imageContainerStyle = {
            position: 'relative',
            height: '185px'
        };

        return html`
            <div style=${styleMap(imageContainerStyle)}>${itemTemplates}</div>
        `;
    }
}
customElements.define('person-element', MyElement);
