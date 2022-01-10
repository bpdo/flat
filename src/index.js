const fs = require("fs").promises;
const { getTheme } = require("./theme");

const darkTheme = getTheme("dark");

fs.mkdir("./dist", { recursive: true })
  .then(() =>
    Promise.all([
      fs.writeFile(
        "./dist/dark-color-theme.json",
        JSON.stringify(darkTheme, null, 2)
      ),
    ])
  )
  .catch(() => process.exit(1));
