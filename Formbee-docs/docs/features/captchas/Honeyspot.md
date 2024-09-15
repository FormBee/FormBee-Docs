---
sidebar_position: 5
title: HoneySpot
---

# Honey Spot

A honeyspot is a type of spam prevention technique that involves placing an input field on a web page that is hidden from the user.
If the the field is filled out by a bot, the form submission is discarded.

## How to make a honeyspot?

To make a honeyspot, you need to add a hidden input field to your form.
```html title="index.html"
<input type="text" name="honeypot" style="display:none;">
```

Then you need to block the submission of the form if the honeypot field is filled out.
```js title="script.js"
document.querySelector('form').addEventListener('submit', (ev) => {
    if (document.getElementById('honeyspot').value) {
      /* Preventing default in an HTML form will prevent the form from submitting.*/
      ev.preventDefault();
      console.log('Honeypot filled out');
    } else {
      console.log('Submitting form, in an HTML form this would allow the form to submit. In more complex apps, add your own submission logic.');
    }
  });
```