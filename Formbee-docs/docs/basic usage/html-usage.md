---
sidebar_position: 1
title: HTML
---

# HTML

Using FormBee in your HTML forms is very simple. Simply add a POST method attribute to your form, and an action attribute of `https://api.formbee.dev/[api-key]`.

```html
<form action="https://api.formbee.dev/formbee/[api-key]" method="POST">
  <input type="text" name="name" placeholder="Name">
  <input type="email" name="email" placeholder="Email">
  <input type="submit" value="Submit">
</form>
```

Make sure to include name attributes for all the fields in your form, and replace the `[api-key]` with your actual API key. You can name your `<input>` elements whatever you'd like.
