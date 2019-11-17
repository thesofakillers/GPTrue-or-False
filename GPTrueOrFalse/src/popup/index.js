window.onload = () => {
  browser.tabs
    .query({ active: true, currentWindow: true })
    .then(query_result => {
      return browser.tabs.sendMessage(query_result[0].id, {
        type: "selection-check"
      });
    })
    .then(res => {
      if (res.token_number > 50) {
        return activateButton("evaluateSelectedText");
      } else {
        return deactivateButton("evaluateSelectedText");
      }
    })
    .catch(err => console.log(err));
};

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
  let activateButton = document.getElementById(button_id);
  activateButton.disabled = false;
  activateButton.innerText = "Determine Realness!";
  activateButton.className = "btn btn-success";
}

// deactivates a given button
function deactivateButton(button_id) {
  let activateButton = document.getElementById(button_id);
  activateButton.disabled = true;
}
