---
sidebar_position: 2
title: HTML & Fetch API
---

# Fetch

The Fetch API with Formbee in vanilla HTML and JS is quite simple to get up and running. Simply make a POST request to `https://api.formbee.dev/formbee/[api-key]` with a JSON body containing the form data. 

### An example with error handling:

```js
    const formData = {
      field1: 'value1',
      field2: 'value2',
      field3: 'value3',
    };
    
    fetch(`https://api.formbee.dev/formbee/[api-key]`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then(response => {
      if (response.ok) {
        alert('Form submitted successfully');
      } else {
        alert('Form submission failed');
      }
    }).catch(err => {
      console.error('Error:', err);
      alert('Form submission failed');
    });
```

### An example with HTML + Fetch API:

```html
<form id="contactForm">
    <input type="text" name="email" id="email" placeholder="email" required>
    <input type="text" name="name" id="name" placeholder="name" required>
    <button type="submit" class="button">Submit</button>
</form>

<script>
  document.getElementById('contactForm').addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    
    // Adding all form data to an object
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    try {
      const response = await fetch('https://api.formbee.dev/formbee/[apikey]', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formObject)
      });

      if (response.ok) {
        alert('Form submitted successfully');
      } else {
        alert('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form.');
    }
  });
</script>
```