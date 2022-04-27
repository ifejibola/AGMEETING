import { authHeader } from "../helpers/auth-header";
import { handleResponse } from "../helpers/handle-response";
import axios from "axios";
import download from "downloadjs";

export const vaultService = {
  getAll,
  downloadFile,
};

async function getAll() {
  const files = [];
  await axios
    .get("http://localhost:3000/api/v1/allFiles", {
      headers: authHeader(),
    })
    .then((filesList) => {
      files.push(...filesList.data.theFiles);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
  console.log(files);
  return files;
}

async function downloadFile(id, path) {
  try {
    const result = await axios.get(
      `http://localhost:3000/api/v1/download/${id}`,
      {
        headers: authHeader(),
        responseType: "blob",
      }
    );
    const split = path.split("\\");
    const filename = split[split.length - 1];
    console.log(filename);
    return download(result.data, filename);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      console.log("Error: ", error);
    }
  }
}
