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
                height: fit-content;
                width: fit-content;
                color: var(--ddd-theme-default-nittanyNavy);
                background-color: var(--ddd-theme-default-white);
                font-weight: var(--ddd-font-primary-medium);
                text-decoration: none;
                border-radius: var(--ddd-radius-xs);
                border-color: var(--component-border-color, var(--ddd-theme-default-link));
            }

            .character-wrapper {
                display: flex;
                flex-direction: row;
            }

            .user {
                display: flex;
                flex-direction: column;
                margin: 0;
                text-align: center;
                position: absolute;
                top: 41%;
                left: 50%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
                align-content: center;
            }

            .user-name {
                color: var(--ddd-theme-default-white);
                font-size: 12pt;
                border-bottom: 2px solid red;
            }

            .delete-button {
                justify-content: center;
                align-items: center;
                cursor: pointer;
                height: fit-content;
                width: fit-content;
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
                top: 55%;
                left: 50%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
                align-content: center;
            }
            `
        ];
    }

    addItem(e) {
        const characterName = this.shadowRoot.querySelector(".username-textbox").value;
    
        console.log(characterName);
        this.characters = [...this.characters, characterName];
        console.log(this.characters);
    }

    updateName(e) {
        this.userName = e.target.value;
    }

    deleteItem(e) {
        this.characters.pop();
        this.requestUpdate();
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
                <div class="user">
                    ${this.characters.map((character) => html`
                        <rpg-character seed="${character}"></rpg-character>
                        <p class="user-name">${character}</p>
                    `)}
                </div>
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
            userName: { type: String },
        }
    }
}
globalThis.customElements.define(HaxcmsPartyUI.tag, HaxcmsPartyUI);

