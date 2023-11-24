import fs from "fs";

// fs.writeFile("./blog1.txt", "Ich bin ein Webdeveloper", () =>
//   console.log("erledigt")
// );
// fs.writeFile("./blog2.txt", "Hi, ich bin deine neue text Datei", () =>
//   console.log("erledigt")
// );
// fs.mkdir("./assets", (err, path) => {
//   if (err) {
//     console.log("Error: ", err);
//   }
// });
// if (fs.existsSync("./delete.txt")) {
//   fs.unlinkSync("./delete.txt");
// } else {
//   fs.writeFile("./delete.txt", "", () => {
//     console.log("file ist da");
//   });
// }

// fs.writeFile("./Hello.txt", " ich bin deine Hello file", () => {
//   console.log("Hello ist da");
// });

fs.rename("./HelloWorld.txt", "./Hello.txt", () => {
  console.log("rename is done");
});
