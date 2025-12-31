const { execSync } = require("child_process");

execSync("chmod +x node_modules/.bin/vite", { stdio: "inherit" });
execSync("vite build", { stdio: "inherit" });
