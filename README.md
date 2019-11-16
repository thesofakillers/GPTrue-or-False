# GPTrue or False Browser Extension

A browser extension that displays the [GPT-2](https://openai.com/blog/better-language-models/) Log Probability of selected portions of text.

Among the many things that [OpenAI](https://openai.com/)'s GPT-2 model can do, one of these is detecting with certain amount of certainty whether a given portion of text is fake or real. This extension hopes to bring this functionality to your browser (Chrome and Firefox).

Inspired by [this tweet](https://twitter.com/karpathy/status/1192169928079503360?s=20) from [Andrej Karpathy](https://cs.stanford.edu/~karpathy/), the director of AI at [Tesla](https://www.tesla.com/).

The extension is written using [Mozilla](https://www.mozilla.org/en-US/)'s [WebExtension browser API Polyfill](https://github.com/mozilla/webextension-polyfill), to be able to use [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) while developing cross-browser (Chrome and Firefox) extensions.

The extension makes use of HTTP requests to the [detector API](https://github.com/openai/gpt-2-output-dataset/tree/master/detector) designed by OpenAI and hosted publicly [here](https://huggingface.co/openai-detector/) by [Hugging Face](https://huggingface.co/) (huge thanks!).

## Thanks

I would like to thank Andrew Karpathy for the idea and [David Ma](http://david.ma/) for [retweeting it](https://twitter.com/madavidj/status/1192189367579639810?s=20) with some incentive.

I would like to thank Alexandre Girard of [JoliBrain](https://github.com/jolibrain) for a [quick demo](https://gist.github.com/alx/d1efbedc930a618a73a27a3df0a1e4b6) he posted and putting pressure on me to get to work on this before someone else did.

I would like to thank the team at [Hugging Face](https://huggingface.co/) for hosting OpenAI's detector publically.

I would like to thank [Filip Stanis](https://github.com/fstanis) for providing a [boilerplate](https://github.com/fstanis/webextensions-webpack-boilerplate) for utilizing [webpack](https://webpack.js.org/) with the [WebExtensions API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions).

And of course, I would like to thank the team at [OpenAI](https://openai.com/) for developing GPT-2 in the first place.
