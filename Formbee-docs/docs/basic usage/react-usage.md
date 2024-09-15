---
sidebar_position: 2
title: React
---

The following is an example of how to use FormBee in a React app with comments to annotate the code.

```jsx
import { useState } from 'react';
import './App.css';

function App() {

  // Create a state object to store the form data
  const [formData, setFormData] = useState({ field1: '', field2: '', field3: '' });
  const apiKey = 'b27ed43d-5d46-469e-a99b-d656991e0c05';
  
  // Handle form change events
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send the form data to FormBee
    fetch(`https://api.formbee.dev/${apiKey}`, {
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
  };
  return (
    {/* Standard JSX form markup */}
    <div className="App">
      <h1>FormBee React Example</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="field1"
            value={formData.field1}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="field2"
            value={formData.field2}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="field3"
            value={formData.field3}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
```

We also have a [React example](https://github.com/formbee/formbee-example-react) on GitHub that you can use as a reference.