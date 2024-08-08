import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../service/dataService.js";
let root = document.querySelector("main");
let template = (items) => html`
  <h3 class="heading">Market</h3>
  <section id="dashboard">
    ${items.length ? html`${items.map((x) => createTemp(x))}`: html`<h3 class="empty">No Items Yet</h3>`};
  </section>

`;
// items template example you need to change the key names
const createTemp = (item) => html`
<div class="item">
      <img src="${item.imageUrl}" alt="example1" />
      <h3 class="model">${item.item}</h3>
      <div class="item-info">
        <p class="price">Price: €${item.price}</p>
        <p class="availability">${item.availability}</p>
        <p class="type">Type: ${item.type}</p>
      </div>
      <a class="details-btn" href="/details/${item._id}">Uncover More</a>
    </div>
`;

export async function showMarket(ctx) {
  const items = await dataService.getAll();
  ctx.render(template(items), root); // display all of them
}
