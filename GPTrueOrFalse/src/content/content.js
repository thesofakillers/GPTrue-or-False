// clear evaluations when user clicks away
$("html").on("blur focus keydown mousedown", function() {
  $(".GPT2Message").remove();
  $(".afterMeGpt2").removeClass("afterMeGpt2");
});

// communicate with popup
browser.runtime.onMessage.addListener(gotMessage);
function gotMessage(message) {
  if (message.type === "selection-check") {
    return checkSelection();
  } else if (message.type === "evaluate") {
    return evaluateSelection();
  }
}

// determines how real a portion of selected text is
function evaluateSelection() {
  // initiate element variable
  let element;
  // get the selected text
  let selection = window.getSelection();
  // determine which node is at the bottom of the selection and assign it to the element
  if (selection.anchorOffset && !selection.focusOffset) {
    element = selection.anchorNode.parentNode;
  } else if (selection.focusOffset && !selection.anchorOffset) {
    element = selection.focusNode.parentNode;
  }
  // parse the selected text
  let text = selection.toString();
  // evaluate
  fetch(
    "https://huggingface.co/openai-detector/?" +
      encodeURI(text.replace(/[\r\n]+/g, ""))
  )
    .then(response => response.json())
    .then(json => {
      // parse the response from Hugging Face
      let all_tokens = json.all_tokens;
      let used_tokens = json.used_tokens;
      let realness = Math.round(json.real_probability * 100 * 100) / 100;
      let css_color_string = generateHSLString(realness, 0, 120);
      // mark the element after which to insert the result of the evaluation
      element.className += " " + "afterMeGpt2";
      // prepare the message
      let message_text = `According to the detector, there is a ${realness} % chance that the selected text is real. ${used_tokens} out of ${all_tokens} tokens were considered`;
      // prepare the message element
      let message_element = $(`<p class='GPT2Message'>${message_text}</p>`);
      message_element.css("border", `2px dashed ${css_color_string}`);
      message_element.css("border-top", `5px solid ${css_color_string}`);
      // insert the message element
      message_element.insertAfter(".afterMeGpt2");
    })
    .catch(err => console.log(err));
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

// generates HSL string given on a percentage between a start and end color
function generateHSLString(percent, start, end) {
  let fraction = percent / 100;
  let offset = (end - start) * fraction;
  let hue = offset + start;

  // Return a CSS HSL string
  return `hsl(${hue}, 100%, 50%)`;
}
