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
                height: var(--haxcms-party-ui-height, 300px);
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
                margin: 0;
                position: absolute;
                top: 39%;
                left: 50%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
                align-content: center;
            }

            .user-name {
                padding: var(--ddd-spacing-m0);
                color: var(--ddd-theme-default-white);
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

    deleteItem(e) {
        this.characters.pop();
        this.requestUpdate();
    }

    render() {
        return html`
        <div class="ui-wrapper">
            <p class="title">Add Party Members</p>
            <div class="input-block">
                <input type="text" class="username-textbox" placeholder="Enter username">
                <button class="add-button" @click="${this.addItem}">Add</button>
                <button class="delete-button" @click="${this.deleteItem}">Delete</button>
            </div>
            <div class="character-wrapper">
                ${this.characters.map((character) => html`
                    <rpg-character seed="${character}"></rpg-character>
                    <p class="user-name">${character.characterName}</p>
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

