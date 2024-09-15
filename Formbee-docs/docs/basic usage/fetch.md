---
sidebar_position: 2
title: Fetch
---

# Fetch

You can also use FormBee with the Fetch API. Simply make a POST request to `https://api.formbee.dev/formbee/[api-key]` with a JSON body containing the form data. Here's an example with error handling:

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