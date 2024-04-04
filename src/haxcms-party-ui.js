import { html, css } from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import "@lrnwebcomponents/rpg-character/rpg-character.js";

export class HaxcmsPartyUI extends DDD {
    static get tag() {
        return "haxcms-party-ui"
    }

    constructor() {
        super();
        this.characters = ["jas9049"];
        this.userName = "Name"
    }

    static get styles() {
        return [
            super.styles,
            css`
            :host {
                display: block;
            }

            .ui-wrapper {
                border-radius: var(--ddd-radius-md);
                background-color: var(--ddd-theme-default-nittanyNavy);
                width: auto;
                height: var(--haxcms-party-ui-height, 325px);
            }

            .title {
                color: var(--ddd-theme-default-white);
                text-align: center;
            }

            .add-button {
                justify-content: center;
                align-items: center;
                cursor: pointer;
                height: 50px;
                width: 50px;
                color: var(--ddd-theme-default-nittanyNavy);
                background-color: var(--ddd-theme-default-white);
                font-weight: var(--ddd-font-primary-medium);
                text-decoration: none;
                border-radius: var(--ddd-radius-xs);
                border-color: var(--component-border-color, var(--ddd-theme-default-link));
            }

            .character-wrapper {
                display: flex;
                margin: 0;
                text-align: center;
                position: absolute;
                top: 275px;
                left: 700px;
                -ms-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
                align-content: center;
            }

            .user {
                flex-direction: column;
                padding: var(--ddd-spacing-4) var(--ddd-spacing-4) var(--ddd-spacing-4) var(--ddd-spacing-4);
            }

            .user-name {
                color: var(--ddd-theme-default-white);
                font-size: 12pt;
            }

            .delete-button {
                justify-content: center;
                align-items: center;
                cursor: pointer;
                height: 50px;
                width: 75px;
                color: var(--ddd-theme-default-nittanyNavy);
                background-color: var(--ddd-theme-default-white);
                font-weight: var(--ddd-font-primary-medium);
                text-decoration: none;
                border-radius: var(--ddd-radius-xs);
                border-color: var(--component-border-color, var(--ddd-theme-default-link));
            }

            .save-button {
                justify-content: center;
                align-items: center;
                cursor: pointer;
                height: 50px;
                width: 50px;
                color: var(--ddd-theme-default-nittanyNavy);
                background-color: var(--ddd-theme-default-white);
            }

            .cancel-button {
                justify-content: center;
                align-items: center;
                text-align: center;
                cursor: pointer;
                height: 50px;
                width: 75px;
                color: var(--ddd-theme-default-nittanyNavy);
                background-color: var(--ddd-theme-default-white);
            }

            .input-block {
                margin: 0;
                position: absolute;
                top: 175px;
                left: 725px;
                -ms-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
            }

            .save-cancel-wrapper {
                margin: 0;
                padding: var(--ddd-spacing-4) var(--ddd-spacing-4) var(--ddd-spacing-4) var(--ddd-spacing-4);
                position: absolute;
                top: 400px;
                left: 725px;
                -ms-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
                align-content: center;
            }
            `
        ];
    }

    addItem(e) {
        const characterName = this.shadowRoot.querySelector(".username-textbox").value;

        if (/^[a-zA-Z0-9]{1,10}$/.test(characterName)) {
            console.log(characterName);
            this.characters = [...this.characters, characterName];
            console.log(this.characters);
        }
        else {
            alert(`Name must not include special character`);
        }
    }

    updateName(e) {
        this.userName = e.target.value;
    }

    deleteItem(e) {
        this.characters.pop();
        this.requestUpdate();
    }

    saveItem() {
        const listOfNames = this.characters.join(', ');
        alert(`Party saved. Users: ${listOfNames}`);
        this.makeItRain();
    }

    cancelItem() {
        this.characters = [];
        this.characters.push("jas9049");    
    }

    render() {
        return html`
        <div class="ui-wrapper">
            <p class="title">Add Party Members</p>
            <div class="input-block">
                <input type="text" class="username-textbox" placeholder="Enter username" @input=${this.updateName}>
                <button class="add-button" @click="${this.addItem}">Add</button>
                <button class="delete-button" @click="${this.deleteItem}">Delete</button>
            </div>
            <div class="character-wrapper">
                ${this.characters.map((character) => html`
                    <rpg-character class="user" seed="${character}"></rpg-character>
                    <p class="user-name">${character}</p>
                `)}
            </div>
            <div class="save-cancel-wrapper">
                <confetti-container id="confetti"><button class="save-button" @click="${this.saveItem}">Save</button></confetti-container>
                <button class="cancel-button" @click="${this.cancelItem}">Cancel</button>
            </div>
        </div>
        `
    }

    static get properties() {
        return {
            characters: { type: Array },
            userName: { type: String },
        }
    }

    makeItRain() {
        import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
          (module) => {
            setTimeout(() => {
              this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
            }, 0);
          }
        );
    }
}
globalThis.customElements.define(HaxcmsPartyUI.tag, HaxcmsPartyUI);

