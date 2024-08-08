import { api } from "../util/requester.js";
import { userUtil } from "../util/userUtil.js";

const endpoints = {
// •Register User (POST): http://localhost:3030/users/register
// •Login User (POST): http://localhost:3030/users/login
// •Logout User (GET): http://localhost:3030/users/logout
    // Change the url depanding on the task.
    register: 'http://localhost:3030/users/register',
    login: 'http://localhost:3030/users/login',
    logout: 'http://localhost:3030/users/logout',

}
async function register(data){
    const userData = await api.post(endpoints.register, data);
    userUtil.setUser(userData);
}
async function login(data){
    const userData = await api.post(endpoints.login, data);
    userUtil.setUser(userData);
}
async function logout(){
    await api.get(endpoints.logout);
    userUtil.clearUserData();
}

export const userService = {
    register,
    login,
    logout
}
