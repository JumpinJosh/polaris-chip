import { LitElement, html, css } from "lit";

export class alertMessage extends LitElement {
    static get tag() {
        return 'alert-message'
    }

    constructor() {
        super();
        this.alertTitle;
        this.alertParagraph;
    }

    static get styles() {
        return css``
    }

    render() {
        return html`
        <div class="alert-wrapper">
            <details>
            <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 82 82" class="alert-icon"><g transform="translate(-350.099 -428.714)"><g transform="translate(350.099 428.714)" fill="none" stroke-width="6"><circle cx="41" cy="41" r="41" stroke="none"></circle><circle cx="41" cy="41" r="38" fill="none"></circle></g><g transform="translate(384.41 448.566)"><rect width="10.381" height="7.786" transform="translate(0.919 34.336)"></rect><path d="M6520.672,2327.554h-5.854l-3.21-23.669V2299.2h11.81v4.681Z" transform="translate(-6511.607 -2299.203)" class="alert-icon-min"></path></g></g></svg>
                <summary></summary>
                <div>
                    <slot></slot>
                </div>
            </details>
        </div>
        `
    }

    static get properties() {
        return {

        }
    }
}

globalThis.customElements.define(alertMessage.tag, alertMessage);