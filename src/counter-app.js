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
        return css`
          :host {
            display: inline-flex;
          }

          .counter-wrapper {
            border: 3px solid;
            border-radius: 6px;
            background-color: cyan;
            padding: 16px;
            margin: 32px 16px;
          }

          .title {
            font-size: 40px;
            text-align: center;
          }

          .counter {
            font-size: 100px;
            text-align: center;
          }

          .btn1 {
            background-color: purple;
            color: white;
            font-size: 20px;
            border-radius: 10%;
            padding: 16px 16px 16px 16px;
            margin: 4px 150px 4px 150px;
          }

          .btn2 {
            background-color: purple;
            color: white;
            font-size: 20px;
            border-radius: 10%;
            padding: 16px 16px 16px 16px;
            margin: 4px 150px 4px 150px;
          }
        `
    }

    render() {
        return html`
        <div class="counter-wrapper">
            <h1 class="title">Counter App</h1>
            <h2 class="counter">${this.counter}</h2>
            <div class="btn-wrapper1">
                <button class="btn1">${this.btnText1}</button>
            </div>
            <div class="btn-wrapper2">
                <button class="btn2">${this.btnText2}</button>
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