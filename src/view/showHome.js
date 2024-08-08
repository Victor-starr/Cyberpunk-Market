import {html} from "../../node_modules/lit-html/lit-html.js";
const root = document.querySelector("main");

const template = () => html`
  <section id="hero">
    <img src="./images/home.png" alt="home" />
    <p>We know who you are, we will contact you</p>
  </section>
`;

export async function showHome(ctx) {
    ctx.render(template(),root);
}