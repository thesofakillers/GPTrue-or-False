# Contributing

I should mention that I do not have a lot of experience in open source collaboration so at the moment I am kind of winging it for how to contribute to this project.

Please feel free to let me know if you have any suggestions on how we can make collaboration smoother.

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

## What should I work on?

Here is just a list of desired features that the extension is currently missing. Let me know if you have more ideas. The list is by no means exhaustive or mandatory.

- Support for browsers other than Firefox and Chrome
- Option to evaluate every single `<p>` element on the page at once. As [Andrej Karpathy suggested](https://twitter.com/karpathy/status/1192169928079503360?s=20)
  > Or maybe it just highlights the areas in walls of text that have a low log prob to help manage your attention.
- Incorporation of models other than GPT-2 to increase the range of bots that the detector is robust to.

## Technicalities

### Pull Request Process

The pull request process is pretty simple at the moment; simply ensure you follow the following guidelines

1. The modifications either
   - fix an issue
   - add functionality
2. The modifications are such that the extension still works on both Chrome and Firefox.
3. All new/edited code _must_ be commented. Please Refer to the [commenting section](#commenting-your-code) for more details.
4. All new/edited code _must_ follow [variable, function and class naming](#variable-function-and-class-naming) conventions.
5. Please ensure you update the version in [manifest.json](./src/manifest.json) accordingly based on [semantic versioning guidelines](https://semver.org/)

### Commenting your code

I am aware that perhaps I over-comment my code. That being said, I would much prefer that you over-comment than not comment at all. Comments can always be removed in minification if we ever decide to add that. The same cannot be said about the opposite.

I believe that in collaboration, comments are essential.

I do not expect every single line of code to be commented of course. Simple comments explaining general functionality of blocks of code will be sufficient.

### Variable, Function and Class naming

- **variables**: should follow the [snake_case](https://en.wikipedia.org/wiki/Snake_case) naming convention and generally be nouns
- **functions**: should follow the [camelCase](https://en.wikipedia.org/wiki/Camel_case) naming convention and generally be verbs
- **classes**: should also follow the camelCase naming convention, be capitalized and generally be nouns.

Please make sure that the names you give are somewhat descriptive. I really don't like when people use single letters for variable names for example.
