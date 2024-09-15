---
sidebar_position: 1
title: PoW Captcha
---

# Pow Captcha

A PoW Captcha aka, a [Proof of Work](https://en.wikipedia.org/wiki/Proof_of_work) Captcha is a captcha that requires the users device to solve a small computational problem in order to pass the captcha. This is effective against bots and other automated programs because it can be computationally expensive if performed on a large scale, making it difficult for bots to overwhelm the system. The task usually involves hashing or solving a puzzle that takes a minimal but measurable amount of processing power to solve, preventing automated attacks while remaining user-friendly for legitimate visitors.

## How to use it?
The PoW captcha API is only available on the Growth, and Premium plans.

We use [Altcha](https://altcha.org/) to power our PoW captcha, for additional info about altcha visit their [website](https://altcha.org/).

First we need to install the Altcha Module. 
```bash title="terminal"
npm install altcha
```

Then we need to import altcha into our project.
```js title="script.js"
import 'altcha';
```
or 
```js title="script.js"
import "./node_modules/altcha/dist/altcha.js";
```

include the altcha script in your html file.
```html title="index.html"
<script async defer src="/script.js" type="module"></script>
```

Now we can add the altcha captcha widget to our form.
```html title="index.html"
<form method="POST" action="https://api.formbee.dev/formbee/[apikey]" enctype="multipart/form-data">
  <div>
    <input type="text" name="name" placeholder="Name">
      <altcha-widget
        class="altcha"
        challengeurl="https://api.formbee.dev/challenge/[api-key]"
        hidefooter
      ></altcha-widget>
  </div>
    <button type="submit" class="button">Submit</button>
</form>
```

Replace the `[api-key]` with your actual API key.

You will also need to validate that the captcha has been solved by the user before submitting the form.
```js title="script.js"
const altcha = document.querySelector(".altcha");
let captchaDone = false;

document.querySelector('.altcha').addEventListener('statechange', (ev) => {
    // state can be: unverified, verifying, verified, error
    console.log('state:', ev.detail.state);
    if (ev.detail.state === 'verified') {
        captchaDone = true;
    }
  });

// submit
document.querySelector('form').addEventListener('submit', (ev) => {
    if (!captchaDone) {
      ev.preventDefault();
      console.log('Captcha not done');
    } else {
      console.log('Submitting form, in an HTML form this would allow the form to submit. In more complex apps, add your own submission logic.');
    }
  });
```