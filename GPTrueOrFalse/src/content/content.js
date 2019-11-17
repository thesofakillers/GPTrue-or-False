browser.runtime.onMessage.addListener(gotMessage);

function gotMessage(message) {
  if (message.type === "selection-check") {
    return checkSelection();
  } else if (message.type === "evaluate") {
    return evaluateSelection();
  }
}

function evaluateSelection() {
  console.log("TODO");
  // window.getSelection()

  // Selection {anchorNode: text, anchorOffset: 139, focusNode: text, focusOffset: 0, isCollapsed: false, …}
  // window.getSelection()

  // Selection {anchorNode: text, anchorOffset: 0, focusNode: text, focusOffset: 139, isCollapsed: false, …}
}

// checks whether the selected text is satisfactory for our needs and sends response
function checkSelection() {
  // get selected text in the current page
  let text = getSelectedText().toString();
  // if there is any selected text
  if (text) {
    // get the tokens in selected text
    let words = text.match(/\w+/g) || [];
    // respond with whether text is selected and how long it is
    return Promise.resolve({ token_number: words.length });
  } else {
    return Promise.resolve({ token_number: 0 });
  }
}

// gets the selected text in the current page
function getSelectedText() {
  // initialize text as false
  let text = false;
  // set text to selected text, if there is selected text
  if (window.getSelection) {
    text = window.getSelection();
  }
  return text;
}
