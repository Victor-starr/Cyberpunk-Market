// APP.JS FILE

import page from "../node_modules/page/page.mjs"; // dont touch
import { render } from "../node_modules/lit-html/lit-html.js"; // dont touch
import { userService } from "./service/userService.js";

import { showHome } from "./view/showHome.js";
import { showReg } from "./view/showRegister.js";
import { showLogin } from "./view/showLogin.js";
import { userUtil } from "./util/userUtil.js";
import { showMarket } from "./view/showMarket.js";
import { showDetails } from "./view/showDetails.js";
import { showEdit } from "./view/showEdit.js";
import { showCreate } from "./view/showCreate.js";

page(updateCtx); // dont touch
page("/", showHome);
page("/login", showLogin);
page("/register", showReg);
page("/logout", logOut);
page("/market", showMarket);
page("/sell", showCreate);
page("/details/:id", showDetails);
page("/edit/:id", showEdit);
page.start(); // dont touch
updateNav(); // dont touch

// don't touch this functions updateCtx, goTO, updateNav
function updateCtx(ctx, next) {
  ctx.updateNav = updateNav;
  ctx.goTo = goTo;
  ctx.render = render;
  ctx.notificationMessage = notificationMessage;
  next();
}

function goTo(path) {
  page.redirect(path);
}
export function notificationMessage(message) {
  const errorBox = document.getElementById("errorBox");
  const msg = errorBox.querySelector("span.msg");
  errorBox.style.display = "block";
  msg.textContent = message;
  setTimeout(() => {
      errorBox.style.display = "none";
      msg.textContent = "";
  }, 3000);
}
// update nav if user logged in
function updateNav() {
  const user = userUtil.getUserData();
  const guestNav = document.querySelector("div.guest");
  const userNav = document.querySelector("div.user");
  if (user) {
    guestNav.style.display = "none";
    userNav.style.display = "inline-block";
  } else {
    guestNav.style.display = "inline-block";
    userNav.style.display = "none";
  }
}

// don't touch logout
async function logOut() {
  await userService.logout();
  updateNav();
  goTo("/");
}

// // SHOWHOME.JS FILE

// import { html } from "../../node_modules/lit-html/lit-html.js";
// import { dataService } from "../service/dataService.js";
// let root = document.querySelector(".container"); // TODO check in what are you putting it in.
// let template = (items) => html`
//   <div class="container">
//   ${items.map(x => createTemp(x))} // adding multiple items if not just remove the line
//   </div>
// `;
// // items template example you need to change the key names
// const createTemp = (item) => html` <div class="col-md-4">
//   <div class="card text-white bg-primary">
//     <div class="card-body">
//       <img src="${item.img}" />
//       <p>Description ${item.description}</p>
//       <footer>
//         <p>Price: <span>${item.price} $</span></p>
//       </footer>
//       <div>
//         <a href="/details/${item._id}" class="btn btn-info">Details</a>
//       </div>
//     </div>
//   </div>
// </div>`;

// export async function showHome(ctx) {
//     const items = await dataService.getAll();
//   ctx.render(template(items), root); // display all of them
// }

// // SHOWLOGIN.js

// import { html, render } from "../../node_modules/lit-html/lit-html.js";
// import { userService } from "../service/userService.js";
// let context = null; // only if there is mult functions that will make user actions like login and logout.
// let root = document.querySelector(".container"); // TODO check in what are you putting it in.

// let template = () => html`
//   <div class="row space-top">
//     <div class="col-md-12">
//       <h1>Login User</h1>
//       <p>Please fill all fields.</p>
//     </div>
//   </div>
//   <form @submit=${onSubmit}>
//     <div class="row space-top">
//       <div class="col-md-4">
//         <div class="form-group">
//           <label class="form-control-label" for="email">Email</label>
//           <input class="form-control" id="email" type="text" name="email" />
//         </div>
//         <div class="form-group">
//           <label class="form-control-label" for="password">Password</label>
//           <input
//             class="form-control"
//             id="password"
//             type="password"
//             name="password"
//           />
//         </div>
//         <input type="submit" class="btn btn-primary" value="Login" />
//       </div>
//     </div>
//   </form>
// `;
// export function showLogin(ctx) {
//   ctx.render(template(), root); // on render aways add ctx.render(template(), root) to display the page
//   context = ctx; // if there is a second function use context to take the ctx outside the showFunction so you can use it later on.
// }
// async function onSubmit(e) {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const { email, password} = Object.fromEntries(formData);
//   if (!email || !password) {
//     alert("All fields are required");
//   }
//   await userService.login({ email, password });
//   context.updateNav();// use here context.updateNav() as a global var because its outside the showFunction
//   context.goTo("/"); // same thing here.
// }
