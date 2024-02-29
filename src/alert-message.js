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
        if (localStorage.getItem('openStatus') == "false") {
            this.open = false;
        }
    }

    static get styles() {
        return css`

        .alert-icon {
            width: 50px;
            height: auto;
        }

        .open-alert {
            border: none;
            background-color: lightblue;
        }

        .closed-alert {
            display: block;
            background-color: lightblue;
        }

        .opened-alert {
            display: none;
            background-color: blue;
            color: white;
        }

        :host([alertStatus="notice"]) .open-alert {
            background-color: lightblue;
        }

        :host([alertStatus="notice"]) .closed-alert {
            background-color: lightblue;
        }

        :host([alertStatus="notice"]) .opened-alert{
            background-color: blue;
            color: white;
        }

        :host([alertStatus="warning"]) .open-alert {
            background-color: lightyellow;
        }

        :host([alertStatus="warning"]) .closed-alert {
            background-color: lightyellow;
        }

        :host([alertStatus="warning"]) .opened-alert {
            background-color: yellow;
            color: black;
        }

        :host([alertStatus="alert"]) .open-alert {
            background-color: lightpink;
        }

        :host([alertStatus="alert"]) .closed-alert {
            background-color: lightpink;
        }

        :host([alertStatus="alert"]) .opened-alert{
            background-color: red;
            color: black;
        }

        .hide-alert {
            display: none;
        }

        .show-alert {
            display: block
        }
        `
    }

    toggleAlert() {
        this.open = !this.open
        localStorage.setItem('openStatus', this.open);

        if (this.open == true) {
            const openedstate = document.querySelector('alert-message');
            openedstate.shadowRoot.querySelector('.opened-alert').classList.remove('hide-alert');
            openedstate.shadowRoot.querySelector('.opened-alert').classList.add('show-alert');

            openedstate.shadowRoot.querySelector('.closed-alert').classList.remove('show-alert');
            openedstate.shadowRoot.querySelector('.closed-alert').classList.add('hide-alert');
        }
        else {
            const closedstate = document.querySelector('alert-message');
            closedstate.shadowRoot.querySelector('.opened-alert').classList.remove('show-alert');
            closedstate.shadowRoot.querySelector('.opened-alert').classList.add('hide-alert');

            closedstate.shadowRoot.querySelector('.closed-alert').classList.remove('hide-alert');
            closedstate.shadowRoot.querySelector('.closed-alert').classList.add('show-alert');
        }
    }

    render() {
        return html`
        <div class="alert-wrapper">
            <div class="alert-wrap">
                <div class="closed-alert hide-alert">
                    <button class="open-alert" @click=${this.toggleAlert}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 82 82" class="alert-icon"><g transform="translate(-350.099 -428.714)"><g transform="translate(350.099 428.714)" fill="none" stroke-width="6"><circle cx="41" cy="41" r="41" stroke="none"></circle><circle cx="41" cy="41" r="38" fill="none"></circle></g><g transform="translate(384.41 448.566)"><rect width="10.381" height="7.786" transform="translate(0.919 34.336)"></rect><path d="M6520.672,2327.554h-5.854l-3.21-23.669V2299.2h11.81v4.681Z" transform="translate(-6511.607 -2299.203)" class="alert-icon-min"></path></g></g></svg>
                        <slot>${this.alertTitle}</slot>
                    </button>
                </div>
                <div class="opened-alert show-alert">
                    <slot><p>${this.alertDate}</p></slot>
                    <button class="close-alert" @click=${this.toggleAlert}>Close</button>
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
            open: { type: Boolean, reflect: true },
        }
    }
}

globalThis.customElements.define(alertMessage.tag, alertMessage);