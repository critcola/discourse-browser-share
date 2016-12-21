<a href="https://critcola.com/?utm_source=github.com&utm_medium=readme&utm_term=logo&utm_content=discourse-browser-share&utm_campaign=development">![Logo](https://critcola.com/assets/images/crit-cola-banner.svg)</a>

# Discourse Browser Share

Add-on/extension adds a button to users' browsers for sharing webpages to Discourse websites. Leveraging [WebExtensions](https://developer.mozilla.org/en-US/Add-ons/WebExtensions), it is compatible with modern Firefox, Chrome, Edge, and Opera browsers. It was developed by [Daniel Marquard](https://github.com/DanielMarquard) for Crit Cola, but can be forked and customized for use with any Discourse website.

## Demo

Crit Cola's Discourse Browser Share for Firefox is currently pending approval by Mozilla.

## Usage 

Start by [forking](https://github.com/critcola/discourse-browser-share) Discourse Browser Share, then customize `background.js` and package information in `manifest.json` for your use case. Replace the icons in the `icons` directory with images of your choosing.

## Installation

There are multiple options for installing Discourse Browser Share, varying by browser.

### Mozilla Firefox

* [Build](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext) as a signed or unsigned XPI using [web-ext](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/web-ext_command_reference)
* Publish to [addons.mozilla.org](https://developer.mozilla.org/en-US/Add-ons/Distribution)
* Install locally as a [temporary add-on](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)

Note: Due to a [technical limitation](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/tabs/query#Browser_compatibility), this add-on is not compatible with Firefox for Android.

### Google Chrome

* [Build](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext) as an unsigned XPI using [web-ext](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/web-ext_command_reference) _(not supported)_
* Publish to the [Chrome Web Store](https://developer.chrome.com/webstore/publish)

### Microsoft Edge

Discourse Browser Share is compatible with Microsoft Edge, but is not supported.

### Opera

Discourse Browser Share is compatible with Opera, but is not supported.

## About Crit Cola

Crit Cola is an [Overwatch clan](https://critcola.com/?utm_source=github.com&utm_medium=readme&utm_term=overwatch-clan&utm_content=discourse-browser-share&utm_campaign=development), a growing community of PC gamers. Join our [Steam group](http://steamcommunity.com/groups/critcola) and follow us on [Twitter](https://twitter.com/CritColaGaming). Cheers!

## License

Discourse Browser Share is released under the [MIT License](LICENSE).
