import { LitElement, html, css } from "lit";

export class CounterApp extends LitElement {

    static get tag() {
        return 'counter-app';
    }

    constructor() {
        super();
        this.counter = "5"
        this.min = "1"
        this.max = "10"
        this.btnText1 = "+"
        this.btnText2 = "-"
    }

    static get styles() {
        return css``
    }

    render() {
        return html``
    }

    static get properties() {
        return {

        }
    }
}