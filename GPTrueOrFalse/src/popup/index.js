window.onload = () => {
  //check if the ask background script for list of tabs with loaded
  return (
    browser.runtime
      .sendMessage({ type: "get-injected" })
      .then(injected_obj => {
        return browser.tabs
          .query({ active: true, currentWindow: true })
          .then(query_result => {
            let current_tab_id = query_result[0].id;
            // if the current tab has already been injected
            if (injected_obj[current_tab_id]) {
              return Promise.resolve();
            } else {
              // update the injected list in the background script
              return browser.runtime
                .sendMessage({
                  type: "injection-update",
                  content: {
                    task: "append",
                    value: current_tab_id
                  }
                })
                .then(() => {
                  // inject the necessary scripts otherwise.
                  return browser.tabs.executeScript({
                    file: "/libraries/jquery-3.4.1.slim.min.js"
                  });
                })
                .then(() => {
                  return browser.tabs.executeScript({
                    file: "/libraries/browser-polyfill.min.js"
                  });
                })
                .then(() => {
                  return browser.tabs.executeScript({
                    file: "/content/content.js"
                  });
                });
            }
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
        // Activate or deactivate button depending on number of words
        let selected_words = res.token_number;
        if (selected_words >= 50) {
          return activateButton("evaluateSelectedText");
        } else {
          return deactivateButton("evaluateSelectedText", selected_words);
        }
      })
      .catch(err => console.log(err))
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
