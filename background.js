async function init() {
  browser.composeScripts.register({
    css: [],
    js: [
      {file: "compose.js"},
    ]
  });
}

init();