import { api } from "../util/requester.js";
const endpoints = {
  // •Create Furniture (POST): http://localhost:3030/data/catalog
  // •All Furniture (GET): http://localhost:3030/data/catalog
  // •Furniture Details (GET): http://localhost:3030/data/catalog/:id
  // •Update Furniture (PUT): http://localhost:3030/data/catalog/:id
  // •Delete Furniture (DELETE):  http://localhost:3030/data/catalog/:id
  // •My Furniture (GET): http://localhost:3030/data/catalog?where=_ownerId%3D%22{userId}%22
  // Change the url depanding on the task.
  baseURl: "http://localhost:3030/data/cyberpunk",
  baseCatalog: "http://localhost:3030/data/cyberpunk?sortBy=_createdOn%20desc",
  baseDetails: "http://localhost:3030/data/cyberpunk/",
  myFurniture: (id) =>`http://localhost:3030/data/catalog?where=_ownerId%3D%22${id}%22`,
  // remove or add it depanding on the task
};

// modify the function if the task is asking (GET) 
// but the function is (PUT) just change it to api.get(...).
async function create(data) {
    return await api.post(endpoints.baseURl, data);
}
async function getAll() {
    return await api.get(endpoints.baseCatalog);
}
async function Details(id){
    return await api.get(endpoints.baseDetails + id);
}
async function update(id,data){
    return await api.put(endpoints.baseDetails + id,data);
}
async function del(id){
    return await api.del(endpoints.baseDetails + id);
}
async function getMy(userId){
    return await api.get(endpoints.myFurniture(userId));
}

export const dataService = {
    create,
    getAll,
    Details,
    update,
    del,
    getMy
}

