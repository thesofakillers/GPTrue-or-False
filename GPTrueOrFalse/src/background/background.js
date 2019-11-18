// initialize object containing ids of tabs who have been injected
let injected = {};
browser.runtime.onMessage.addListener(gotMessage);
function gotMessage(message) {
  console.log(injected);
  if (message.type === "get-injected") {
    return Promise.resolve(injected);
  } else if (message.type === "injection-update") {
    if (message.content.task === "append") {
      injected[message.content.value] = true;
    } else if (message.content.task === "delete") {
      delete injected[message.content.value];
    }
  }
}

// remove tabs from injected obj when they are closed
browser.tabs.onRemoved.addListener(handleRemoved);
function handleRemoved(tabId) {
  if (injected[tabId]) delete injected[tabId];
}
