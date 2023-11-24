import fs from "fs";
import data from "./data.json" assert { type: "json" };

for (let i = 0; i < data.length; i++) {
  fs.writeFile(
    "./data.txt",
    data[i].id + " - " + data[i].title + "\n" + data[i].description + "\n\n",
    { flag: "a" },
    () => {
      console.log("ist gespeichert");
    }
  );
}
