let port = browser.runtime.connect({ name: 'webextensions-boilerplate' });

port.postMessage({ greeting: 'hello from content script' });
port.onMessage.addListener(function(message) {
  console.log(message.greeting);
});
