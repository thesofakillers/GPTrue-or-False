import { getOS } from './getos';

browser.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(async message => {
    console.log(message.greeting);

    let os = await getOS();
    port.postMessage({
      greeting: 'reply from background script, got os=' + os
    });
  });
});
