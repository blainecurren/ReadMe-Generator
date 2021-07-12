// TODO: Create a function to write README file
const fs = require("fs");

const writeToFile = (fileName, data) => {
  return fs.writeFileSync("./dist/README.md", data, (err) => {
    if (err) {
      reject(err);
      return;
    }

    resolve({
      ok: true,
      message: "File created!",
    });
  });
};

module.exports = writeToFile;
