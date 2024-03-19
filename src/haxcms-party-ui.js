import { html, css } from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import "@lrnwebcomponents/rpg-character/rpg-character.js";

export class HaxcmsPartyUI extends DDD {
    static get tag() {
        return "haxcms-party-ui"
    }

    constructor() {
        super();
    }

    static get styles() {
        return [
            super.styles,
            css``
        ];
    }

    render() {
        return html`
        <div>
            <p>Add Members</p>
            <div>
                <input type="text" class="Username-Textbox" placeholder="Enter username">
                <button class="add-button">Add</button>
            </div>
            <div>
                <rpg-character></rpg-character>
                <rpg-character></rpg-character>
                <rpg-character></rpg-character>
                <rpg-character></rpg-character>
                <rpg-character></rpg-character>
            </div>
            <div>
                <button class="delete-button">delete</button>
            </div>
            <div>
                <button class="save-button">save</button>
                <button class="cancel-button">save</button>
            </div>
        </div>
        `
    }

    static get properties() {
        return {

        }
    }
}
globalThis.customElements.define(HaxcmsPartyUI.tag, HaxcmsPartyUI);

