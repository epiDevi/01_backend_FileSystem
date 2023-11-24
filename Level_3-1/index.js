import fs, { mkdir } from "fs";
import { createAndWrite } from "./function.js";
const path = "./assets";

fs.access(path, (err) => {
  if (err && err.code === "ENOENT") {
    fs.mkdir(path, (err, path) => {
      if (err) {
        console.log("Error: ", err);
        return;
      }
      createAndWrite("Hallo, Ordner ist erstellt!", path);
    });
  } else {
    createAndWrite("Hallo , Ordner war schon da! ", path);
  }
});
