# Automated Accessibility Testing

HTML is a very forgiving and flexible language — developers can use an element in a way that doesn’t match its defined semantics. An example of this is the classic 'use a div as a button':

```html
<div class="o-button" onClick="this.onClick">Click me</div>
```

Using a `<div>` instead of `<button>` element means the browser doesn’t know this is meant to act like a button. It therefore doesn’t enable the ‘pressed’ states, nor the ability for this element to get focus, nor keyboard usage (buttons can be pressed, once focused, by hitting `return`). Screenreader users will often navigate a page by cycling through all the headings/links/buttons on a page; this div-button will not be visible on that list as the browser doesn’t know it’s supposed to be a button.

This is a particularly egregious error; many are less easy to spot e.g. too-low contrast between foreground & background colours can be very hard to spot by simply looking. Or perhaps the developer is behind on current best practice, and uses something like `<nav role="navigation">`, which used to be considered a good approach but is now considered unnecessary redundancy.

We can avoid many of the simpler cases of broken semantics, and actually many more accessibility issues, by using an automated accessibility testing tool (testing with real users is the only way to really be comprehensive, as many issues unfortunately cannot be machine-tested). Recommended is [`pa11y`](https://github.com/pa11y/pa11y). This tool spins up a phantomJS instance, visits the provided URL, and runs tests against the live DOM. Errors and recommendations will be flagged in the output on stdout. The tests match the various levels of [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/intro/wcag) (the level can be set in configuration).

## Installation & usage

Pa11y requires node:

```sh
brew install node
```

Install pa11y globally:

```sh
npm install -g pa11y
```

You can then run an ad hoc test immediately (replace the url with the correct one):
```sh
pa11y http://localhost:3000
```

But for real integration into the development process, add an npm command to run pa11y and make sure it’s run when running other checks:

```sh
"scripts": {
  …
  "a11y": "pa11y --ignore notice http://localhost:3000",
  "checks": "npm run lint && npm run a11y && npm run test"
  …
}
```

Note the `--ignore notice` parameter. The output of all accessibility testing tools can be very noisy, as the tool strives for completeness and notifies the developer of everything they should be checking. This is very correct but means the actionable errors & warnings get buried. Using this parameter is recommended for most instances, though it’s worth checking the notices sometimes — try occasionally running pa11y in the manner of the first ad hoc/CLI test example.
