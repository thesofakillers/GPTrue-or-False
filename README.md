# GPTrue or False Browser Extension

A browser extension that displays the [GPT-2](https://openai.com/blog/better-language-models/) Log Probability of selected portions of text.

Among the many things that [OpenAI](https://openai.com/)'s GPT-2 model can do, one of these is detecting with certain amount of certainty whether a given portion of text is fake or real. This extension hopes to bring this functionality to your browser (Chrome and Firefox).

Inspired by [this tweet](https://twitter.com/karpathy/status/1192169928079503360?s=20) from [Andrej Karpathy](https://cs.stanford.edu/~karpathy/), the director of AI at [Tesla](https://www.tesla.com/).

The extension is written using [Mozilla](https://www.mozilla.org/en-US/)'s [WebExtension browser API Polyfill](https://github.com/mozilla/webextension-polyfill), to be able to use [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) while developing cross-browser (Chrome and Firefox) extensions.

The extension makes use of HTTP requests to the [detector API](https://github.com/openai/gpt-2-output-dataset/tree/master/detector) designed by OpenAI and hosted publicly [here](https://huggingface.co/openai-detector/) by [Hugging Face](https://huggingface.co/) (huge thanks!).
