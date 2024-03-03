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
        this.sticky = false;
    }

    static get styles() {
        return css`

        :host([sticky]) {
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .alert-icon {
            width: 50px;
            height: auto;
        }

        .open-alert {
            border: none;
            background-color: transparent;
            cursor: pointer;
            text-transform: uppercase;
            font-weight: 700;
            font-style: italic;
            display: -webkit-box;
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            color: #000321;
            font-size: 1.25rem;
            text-align: center;
            margin: 0em;
            padding-block: 1px;
            padding-inline: 6px;
            letter-spacing: normal;
            word-spacing: normal;
            line-height: normal;
        }

        .closed-alert {
            display: block;
            background-color: #bf8226;
            align-items: center;
            justify-content: center;
        }

        .opened-alert {
            display: none;
            background-color: #bf8226;
            color: #000321;
        }

        .close-alert {
            position: relative;
            display: block;
            float: right;
            top: 0;
            right: 2.5rem;
            border: none;
            background-color: transparent;
            cursor: pointer;
            text-transform: uppercase;
            padding-top: 2rem;
            padding-bottom: 0.5rem;
            color: #ffffff;
            font-size: 1rem;
            line-height: 1.125rem;
            font-weight: 700;
            letter-spacing: 0.03rem;
        }

        .date {
            margin-left: 2.5rem;
            -webkit-box-flex: 1;
            flex: 1 1 140px;
            text-transform: uppercase;
            -webkit-box-ordinal-group: 2;
            order: 1;
            align-self: center;
            font-size: 1rem;
            line-height: 1.125rem;
            font-weight: 700;
            letter-spacing: 0.03rem;
            color: #ffffff;
        }

        .message-wrapper {
            -webkit-box-align: unset;
            align-items: unset;
            margin: auto 2.5rem;
            -webkit-transform: skew(20deg);
            transform: skew(20deg);
            -webkit-box-ordinal-group: 4;
            order: 3;
            -webkit-box-flex: 1;
            flex: 1 1 100%;
            margin: auto 0;
            display: -webkit-box;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            flex-direction: row;
            align-self: flex-end;
            -webkit-box-align: center;
            align-items: center;
            line-height: 1.2;
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
            <div class="alert-wrap" ?sticky="${this.sticky}">
                <div class="closed-alert hide-alert">
                    <button class="open-alert" @click=${this.toggleAlert}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 82 82" class="alert-icon"><g transform="translate(-350.099 -428.714)"><g transform="translate(350.099 428.714)" fill="none" stroke-width="6"><circle cx="41" cy="41" r="41" stroke="none"></circle><circle cx="41" cy="41" r="38" fill="none"></circle></g><g transform="translate(384.41 448.566)"><rect width="10.381" height="7.786" transform="translate(0.919 34.336)"></rect><path d="M6520.672,2327.554h-5.854l-3.21-23.669V2299.2h11.81v4.681Z" transform="translate(-6511.607 -2299.203)" class="alert-icon-min"></path></g></g></svg>
                        <slot>${this.alertTitle}</slot>
                    </button>
                </div>
                <div class="opened-alert show-alert">
                    <slot><p class="date">${this.alertDate}</p></slot>
                    <button class="close-alert" @click=${this.toggleAlert}>Close</button>
                    <div class="masseage-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 82" class="alert-icon"><g transform="translate(-350.099 -428.714)"><g transform="translate(350.099 428.714)" fill="none" stroke-width="6"><circle cx="41" cy="41" r="41" stroke="none"></circle><circle cx="41" cy="41" r="38" fill="none"></circle></g><g transform="translate(384.41 448.566)"><rect width="10.381" height="7.786" transform="translate(0.919 34.336)"></rect><path d="M6520.672,2327.554h-5.854l-3.21-23.669V2299.2h11.81v4.681Z" transform="translate(-6511.607 -2299.203)"></path></g></g></svg>
                        <div class="message">
                            <slot><p>${this.alertParagraph}</p></slot>
                        </div>
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