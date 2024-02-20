import { LitElement, html, css } from "lit";

export class CounterApp extends LitElement {

    static get tag() {
        return 'counter-app';
    }

    constructor() {
        super();
        this.counter = 5;
        this.min = 1;
        this.max = 10;
        this.btnText1 = "+";
        this.btnText2 = "-";
    }

    static get styles() {
        return css`
          :host {
            display: inline-flex;
          }

          .counter-wrapper {
            border: 3px solid;
            border-radius: 6px;
            background-color: gold;
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

          .btn-group button {
            background-color: purple;
            color: white;
            font-size: 20px;
            border-radius: 10%;
            padding: 16px 16px 16px 16px;
            margin: 20px 40px 20px 40px;
            float: left;
            width: 50px;
          }

          .btn-group button:focus,
          .btn-group button:hover {
            background-color: blue;
          }

          :host([counter="18"]) .counter {
            color: blue;
          }

          :host([counter="21"]) .counter {
            color: green;
          }

          .change-counter {
            color: red;
          }
        `
    }

    increase(){
        if (this.counter < this.max) {
            this.counter++;
        }
    }

    decrease() {
        if (this.counter > this.min) {
            this.counter--;
        }
    }

    checkminmaxchange() {
      if (this.min == this.counter || this.max == this.counter) {
        this.minmaxchange = true;
      }
      else {
        this.minmaxchange = false;
      }
    }

    
    updated(changedProperties) {
      if (changedProperties.has('counter')) {
        // do your testing of the value and make it rain by calling makeItRain
        if (this.counter === 21) {
          this.makeItRain();
        }
      }
    }

    makeItRain() {
      // this is called a dynamic import. It means it won't import the code for confetti until this method is called
      // the .then() syntax after is because dynamic imports return a Promise object. Meaning the then() code
      // will only run AFTER the code is imported and available to us
      import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
        (module) => {
          // This is a minor timing 'hack'. We know the code library above will import prior to this running
          // The "set timeout 0" means "wait 1 microtask and run it on the next cycle.
          // this "hack" ensures the element has had time to process in the DOM so that when we set popped
          // it's listening for changes so it can react
          setTimeout(() => {
            // forcibly set the poppped attribute on something with id confetti
            // while I've said in general NOT to do this, the confetti container element will reset this
            // after the animation runs so it's a simple way to generate the effect over and over again
            this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
          }, 0);
        }
      );
    }

    render() {
      this.checkminmaxchange();
        return html`
        <div class="counter-wrapper">
            <h1 class="title">Counter App</h1>
            <confetti-container id="confetti"><h2 class="counter ${this.minmaxchange ? css`change-counter` : css}">${this.counter}</h2></confetti-container>
            <div class="btn-group">
                <button class="btn1" @click="${this.increase}" ?disabled="${this.max == this.counter}">${this.btnText1}</button>
                <button class="btn2" @click="${this.decrease}" ?disabled="${this.min == this.counter}">${this.btnText2}</button>
            </div>
        </div> 
        `
    }

    static get properties() {
        return {
            counter: { type: Number, reflect: true },
            min: { type: Number },
            max: { type: Number },
            btnText1: { type: String },
            btnText2: { type: String },
        }
    }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);