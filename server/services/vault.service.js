import { authHeader } from "../helpers/auth-header";
import { handleResponse } from "../helpers/handle-response";
import axios from "axios";

export const vaultService = {
  getAll,
  //getById,
};

async function getAll() {
  let files = [];
  await axios
    .get("http://localhost:3000/api/v1/allFiles", {
      headers: authHeader(),
    })
    .then((filesList) => {
      files.push(...filesList.data.docFiles);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });

  return files;
}

// async function getById(id) {
//   let customers = [];
//   await axios
//     .get("http://localhost:3000/api/v1/users/" + id, {
//       headers: authHeader(),
//     })
//     .then((customersList) => {
//       customers.push(...customersList.data.users);
//     })
//     .catch((err) => {
//       console.log("Error: ", err);
//     });

//   return customers;
// }
