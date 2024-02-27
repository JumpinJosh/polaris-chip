import { LitElement, html, css } from "lit";

export class alertMessage extends LitElement {
    static get tag() {
        return 'alert-message'
    }

    constructor() {
        super();
        this.alertTitle = "Test Campus Alert";
        this.alertDate = "February 14, 2024 12:00 PM";
        this.alertParagraph = "This is a test alert. Please remain calm as nothing serious has happened";
        this.alertStatus = "notice";
        this.open = true;
    }

    static get styles() {
        return css`

        .alert-icon {
            width: 50px;
            height: auto;
        }

        .open-alert {
            background-color: yellow;
        }

        :host([alertStatus="notice"]) {
            background-color: blue;
        }

        :host([alertStatus="warning"]) {
            background-color: yellow;
        }

        :host([alertStatus="alert"]) {
            background-color: red;
        }
        `
    }

    render() {
        return html`
        <div class="alert-wrapper">
            <div class="alert-wrap">
                <div class="closed-alert">
                    <button class="open-alert" @click="${this.openAlert}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 82 82" class="alert-icon"><g transform="translate(-350.099 -428.714)"><g transform="translate(350.099 428.714)" fill="none" stroke-width="6"><circle cx="41" cy="41" r="41" stroke="none"></circle><circle cx="41" cy="41" r="38" fill="none"></circle></g><g transform="translate(384.41 448.566)"><rect width="10.381" height="7.786" transform="translate(0.919 34.336)"></rect><path d="M6520.672,2327.554h-5.854l-3.21-23.669V2299.2h11.81v4.681Z" transform="translate(-6511.607 -2299.203)" class="alert-icon-min"></path></g></g></svg>
                        <slot>${this.alertTitle}</slot>
                    </button>
                </div>
                <div class="opened-alert">
                    <slot><p>${this.alertDate}</p></slot>
                    <button class="close-alert" @click="${this.closeAlert}">Close</button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 82" class="alert-icon"><g transform="translate(-350.099 -428.714)"><g transform="translate(350.099 428.714)" fill="none" stroke-width="6"><circle cx="41" cy="41" r="41" stroke="none"></circle><circle cx="41" cy="41" r="38" fill="none"></circle></g><g transform="translate(384.41 448.566)"><rect width="10.381" height="7.786" transform="translate(0.919 34.336)"></rect><path d="M6520.672,2327.554h-5.854l-3.21-23.669V2299.2h11.81v4.681Z" transform="translate(-6511.607 -2299.203)"></path></g></g></svg>
                    <div class="message">
                        <slot><p>${this.alertParagraph}</p></slot>
                    </div>
                </div>
            </div>
        </div>
        `
    }

    static get properties() {
        return {
            alertTitle: { type: String, attribute: "alert-title" },
            alertParagraph: { type: String, attribute: "alert-paragraph" },
            alertDate: { type: String, attribute: "alert-date" },
            alertStatus: { type: String, attribute: "alert-status" },
            open: { type: Boolean },
        }
    }
}

globalThis.customElements.define(alertMessage.tag, alertMessage);