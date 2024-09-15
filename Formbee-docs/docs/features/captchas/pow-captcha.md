---
sidebar_position: 1
title: PoW Captcha
---

# Pow Captcha

A PoW Captcha aka, a [Proof of Work](https://en.wikipedia.org/wiki/Proof_of_work) Captcha is a captcha that requires the users device to solve a small computational problem in order to pass the captcha. This is effective against bots and other automated programs because it can be computationally expensive if performed on a large scale, making it difficult for bots to overwhelm the system. The task usually involves hashing or solving a puzzle that takes a minimal but measurable amount of processing power to solve, preventing automated attacks while remaining user-friendly for legitimate visitors.

## How to use it?
The PoW captcha API is only available on the Growth, and Premium plans.

We use [Altcha](https://altcha.org/) to power our PoW captcha, for aditional info about altcha visit their [website](https://altcha.org/).

## How to use it?
First we need to install the Altcha Module. 
```bash
npm install altcha
```

Then we need to import altcha into our project.
```js
import 'altcha';
```
or 
```js
import "./node_modules/altcha/dist/altcha.js";
```

Now we can add the altcha captcha widget to our form.
```html
<form>
    <altcha-widget
      class="altcha"
      challengeurl="https://api.formbee.dev/challenge/[api-key]"
      hidelogo
      hidefooter
    ></altcha-widget>
</form>
```

Replace the `[api-key]` with your actual API key.

You will also need to validate that the captcha has been solved by the user before submitting the form.
```js
const altcha = document.querySelector('altcha-widget');
altcha.addEventListener('solved', () => {
  // Handle the form submission here
});