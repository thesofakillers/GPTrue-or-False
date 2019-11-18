window.onload = () => {
  // get the current tab
  return (
    browser.tabs
      .query({ active: true, currentWindow: true })
      .then(query_result => {
        // ask it if the content script is already loaded
        return browser.tabs.sendMessage(query_result[0].id, {
          type: "loaded-check"
        });
      })
      .then(res => {
        // if it is, do nothing for this promise
        if (res) return Promise.resolve();
      })
      .catch(() => {
        // an error being thrown signals the content script not being loaded, load it.
        return browser.tabs
          .executeScript({
            file: "./libraries/jquery-3.3.1.slim.min.js"
          })
          .then(() => {
            return browser.tabs.executeScript({
              file: "./libraries/browser-polyfill.min.js"
            });
          })
          .then(() => {
            return browser.tabs.executeScript({
              file: "./content/content.js"
            });
          });
      })
      // check that enough words are selected
      .then(() => {
        return browser.tabs.query({ active: true, currentWindow: true });
      })
      .then(query_result => {
        return browser.tabs.sendMessage(query_result[0].id, {
          type: "selection-check"
        });
      })
      .then(res => {
        // Activate or deactivate button dependng on number of words
        let selected_words = res.token_number;
        if (selected_words >= 50) {
          return activateButton("evaluateSelectedText");
        } else {
          return deactivateButton("evaluateSelectedText", selected_words);
        }
      })
  );
};

// orders content script to evaluate
document.getElementById("evaluateSelectedText").onclick = () => {
  browser.tabs
    .query({ active: true, currentWindow: true })
    .then(query_result =>
      browser.tabs.sendMessage(query_result[0].id, {
        type: "evaluate"
      })
    )
    .catch(err => console.log(err));
};

// activates a given button
function activateButton(button_id) {
  let button = document.getElementById(button_id);
  button.disabled = false;
  button.innerText = "Determine Realness!";
  button.className = "btn btn-success";
}

// deactivates a given button
function deactivateButton(button_id, selection_length) {
  let button = document.getElementById(button_id);
  button.innerText = `Select at least 50 words! (${selection_length} Selected)`;
  button.disabled = true;
}
