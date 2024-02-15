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
        return html`
        <div class="counter-wrapper">
            <h1>Counter App</h1>
            <h2>${this.counter}</h2>
            <div>
                <button>${this.btnText1}</button>
            </div>
            <div>
                <button>${this.btnText2}</button>
            </div>
        </div>
        `
    }

    static get properties() {
        return {
            counter: { type: String },
            min: { type: String },
            max: { type: String },
            btnText1: { type: String },
            btnText2: { type: String },
        }
    }
}