
import { html } from "../../node_modules/lit-html/lit-html.js";
import { userService } from "../service/userService.js";
let context = null; 
let root = document.querySelector("main"); 

let template = () => html`
   <section id="login">
    <div class="form">
      <h2>Login</h2>
      <form @submit=${onSubmit} class="login-form">
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button type="submit">login</button>
        <p class="message">
          Not registered? <a href="/register">Create an account</a>
        </p>
      </form>
    </div>
  </section>
`;
export function showLogin(ctx) {
  ctx.render(template(), root); // on render aways add ctx.render(template(), root) to display the page
  context = ctx; // if there is a second function use context to take the ctx outside the showFunction so you can use it later on.
}
async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const { email, password} = Object.fromEntries(formData);
  if (!email || !password) {
    context.notificationMessage('All fields are required');
    return alert('All fields are required!');
  }
  await userService.login({ email, password });
  context.updateNav();
  context.goTo("/"); 
}