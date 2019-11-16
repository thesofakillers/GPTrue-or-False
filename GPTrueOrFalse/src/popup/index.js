import contentScript from "../content/index.js";

document.getElementById("action").addEventListener("click", function() {
  browser.tabs.executeScript({
    file: contentScript
  });
});
