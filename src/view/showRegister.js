
import { html } from "../../node_modules/lit-html/lit-html.js";
import { userService } from "../service/userService.js";
let context = null; 
let root = document.querySelector("main"); 

let template = () => html`
<section id="register">
    <div class="form">
      <h2>Register</h2>
      <form @submit=${onSubmit} class="register-form">
        <input
          type="text"
          name="email"
          id="register-email"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="password"
        />
        <input
          type="password"
          name="re-password"
          id="repeat-password"
          placeholder="repeat password"
        />
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
      </form>
    </div>
  </section>
`;
export function showReg(ctx) {
  ctx.render(template(), root); // on render aways add ctx.render(template(), root) to display the page
  context = ctx; // if there is a second function use context to take the ctx outside the showFunction so you can use it later on.
}
async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formEntries = Object.fromEntries(formData);
  const data = {
    email: formEntries.email,
    password: formEntries.password,
    repassword: formEntries["re-password"],
  };
  if (!data.email || !data.password || !data.repassword) {
    context.notificationMessage('All fields are required');
    return //alert("All fields are required");
  }
  if (data.password !== data.repassword) {
    context.notificationMessage("Passwords don't match");
    return //alert("Passwords don't match");
  }
  delete data.repassword;
  await userService.register(data);

  context.updateNav();
  context.goTo("/"); 
}