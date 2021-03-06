# Description

(To be used as the long description on the Chrome and Firefox pages)

---

OpenAI's recently released GPT-2 model has revealed itself to be capable of generating incredibly human-like text.

With the rampant spread of fake news and reviews in today's world, such tools may pose a threat to the quality of the information found on the internet.

Luckily, OpenAI also released a detector which is designed to detect whether a given portion of text has been generated by GPT-2 or not.

This extension brings the detector to your browser via a simple browser extension. Simply select a portion of text (at least 50 words) and the extension will determine and display the probability of whether the selected text was generated by GPT-2 or not.

Some notes:

- The detector itself does not run in your browser. The extension makes HTTP requests to https://huggingface.co/openai-detector where the detector is publicly hosted and processes the response, displaying the results in your browser.
- Results should be taken with a grain of salt. The detector is designed specifically to work with GPT-2 generated text. Using a different model or finetuning GPT-2 could be enough to avoid detection. In general, the detector is imperfect. Human-generated text may be marked as GPT-2 generated, and vice-versa.
