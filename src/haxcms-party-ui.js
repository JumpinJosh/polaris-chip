import { html, css } from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import "@lrnwebcomponents/rpg-character/rpg-character.js";

export class HaxcmsPartyUI extends DDD {
    static get tag() {
        return "haxcms-party-ui"
    }

    constructor() {
        super();
        this.characters = [];
        this.userName = "JumpinJosh"
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
                height: 250px;
            }

            .title {
                color: var(--ddd-theme-default-white);
                text-align: center;
            }

            .add-button {
                justify-content: center;
                align-items: center;
                cursor: pointer;
                height: fit-content;
                width: fit-content;
                color: var(--ddd-theme-default-nittanyNavy);
                background-color: var(--ddd-theme-default-white);
            }

            .save-button {
                justify-content: center;
                align-items: center;
                cursor: pointer;
                height: fit-content;
                width: fit-content;
                color: var(--ddd-theme-default-nittanyNavy);
                background-color: var(--ddd-theme-default-white);
            }

            .cancel-button {
                justify-content: center;
                align-items: center;
                cursor: pointer;
                height: fit-content;
                width: fit-content;
                color: var(--ddd-theme-default-nittanyNavy);
                background-color: var(--ddd-theme-default-white);
            }

            .input-block {
                margin: 0;
                position: absolute;
                top: 25%;
                left: 50%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
            }

            .save-cancel-wrapper {
                margin: 0;
                position: absolute;
                top: 45%;
                left: 50%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
                align-content: center;
            }
            `
        ];
    }

    addItem(e) {
        const characterName = this.shadowRoot.querySelecter(".username-text").value;
    
        const character = {
          name: characterName,
        }
        console.log(character);
        this.characters = [...this.characters, character];
        console.log(this.characters);
    }

    render() {
        return html`
        <div class="ui-wrapper">
            <p class="title">Add Party Members</p>
            <div class="input-block">
                <input type="text" class="username-textbox" placeholder="Enter username">
                <button class="add-button" @click="${this.addItem}">Add</button>
            </div>
            <div class="character-wrapper">
                <button class="delete-button">Delete</button>
                ${this.characters.map((character) => html`
                    <rpg-character seed="${this.userName}"></rpg-character>
                    <p class="user-name">${this.userName}</p>
                `)}
            </div>
            <div class="save-cancel-wrapper">
                <button class="save-button">Save</button>
                <button class="cancel-button">Cancel</button>
            </div>
        </div>
        `
    }

    static get properties() {
        return {
            characters: { type: Array },
        }
    }
}
globalThis.customElements.define(HaxcmsPartyUI.tag, HaxcmsPartyUI);

