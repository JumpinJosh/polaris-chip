import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Indigo Bunting";
    this.imglink = "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15.jpg";
    this.paragraphtext = "This is a Indigo Bunting. A species of bird that is native to the southern region of canada and most of the United State. They are seed-eating birds that belongs to the cardinal family.";
    this.btnlink = "https://hax.psu.edu";
    this.btntext = "details";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .card1.change-color {
      background-color: #0EA625;
    }

      .card1 {
      border: 2px solid;
      border-radius: 4px;
      border-style: dashed;
      background-color: turquoise;
      padding: 8px;
      width: 400px;
      margin: 16px;
      height: auto;
    }

    .heading3 {
      font-family: "Lucida Console", "Courier New",   monospace;
      text-align: center;
    }

    .img1 {
      border-radius: 8px;
      padding: 8px;
      margin-left: 93px;
      margin-right: 100px;
      width: 200px;
      height: auto;
    }

    .paragraph1 {
      font-family: "Lucida Console", "Courier New",   monospace;
      text-align: center;
    }

    a {
      text-decoration: none;
    }

    .btn {
      background-color: blue;
      color: white;
      font-size: 20px;
      border-radius: 10%;
      padding: 16px 16px 16px 16px;
      margin: 4px 150px 4px 150px;
    }

    .btn:focus,
    .btn:hover {
      background-color: green;  
    }
    `;
  }

  render() {
    return html`
    <div class="card1">
      <h3 class="heading3">${this.title}</h3>
      <p class="paragraph1">${this.paragraphtext}</p>
      <img class="img1" src=${this.imglink}>
      <div class="btn-wrapper">
        <a href=${this.btnlink}>
          <button class="btn">${this.btntext}</button>
        </a>
      </div>
    </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String, reflect: true },
      imglink: { type: String, reflect: true },
      paragraphtext: { type: String },
      btnlink: { type: String },
      btntext: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
