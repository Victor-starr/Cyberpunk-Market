import { userUtil } from "./userUtil.js";
import { notificationMessage } from "../app.js"

// Dont change anything 
async function requester(method, url, data) {
  const option = {
    method,
    headers: {},
  };
  const userData = userUtil.getToken();
  if(userData){
    option.headers['X-Authorization'] = userData;
  }
  if(data){
    option.headers['Content-Type'] = 'application/json';
    option.body = JSON.stringify(data);
  }
  try {
    const response = await fetch(url, option);
    
    if(!response.ok){
        const error = response.json();
        throw new Error(error.message);
    }
    if(response.status === 204){
        return response;
    }
    return await response.json();
  } catch (error) {
    alert(error);
    notificationMessage(error);
    throw new Error(error);
  }
}

async function get(url) {
    return requester('GET', url);
}
async function post(url, data) {
    return requester('POST', url, data);
}
async function put(url, data) {
    return requester('PUT', url, data);
}
async function del(url) {
    return requester('DELETE', url);
}

export const api = {
    get,
    post,
    put,
    del
}



