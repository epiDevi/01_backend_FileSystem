import fs from "fs";
export function createAndWrite(text, path) {
  fs.access(path + "/text.txt", (err) => {
    if (err && err.code === "ENOENT") {
      fs.writeFile("./assets/text.txt", text + "\n", { flag: "a" }, () =>
        console.log("neue text")
      );
    } else {
      fs.writeFile(
        "./assets/text.txt",
        "Hi , text datei war schon da, und ich bin nur neue Text \ncd",
        { flag: "a" },
        () => console.log("neue text")
      );
    }
  });
}
