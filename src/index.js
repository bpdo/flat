const fs = require("fs").promises;

const { getTheme } = require("./theme");

(async () => {
  try {
    const dist = "./dist";

    // create the dist folder
    await fs.mkdir(dist, { recursive: true });

    // get the theme
    const theme = getTheme();

    // write the theme file
    await fs.writeFile(
      `${dist}/flat-dark-color-theme.json`,
      JSON.stringify(theme, null, 2)
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
