---
title: Self Hosting With Webhooks Only
sidebar_position: 4
---

# What is webhooks only self hosting?

With this docker image you can recieve your form data anywhere that has a webhook URL that accepts post requests. You can use our integrations docs to see some of the services throughout the web that accept web hooks!

Webhooks are one of the simplest ways to recieve your form data. It requires much less setup than recieving form data via email.

### Firstly, pull the docker image

```bash
docker pull oia123/formbee-webhooks
```

### Now you're ready to run the docker image.



```bash
docker run -e WEBHOOK_URL=yourwebhookurl -e ORIGIN=* -p 3000:3000 oia123/formbee-webhooks
```

- ```WEBHOOK_URL``` is the webhook URL where the form data will be sent.
- ```ORIGIN``` is the domain where CORS is allowing requests from. By default it's set to * to allow all origins.

## Once you're up and running
You can now access the backend at http://localhost:3000.

### Available endpoints

- ```/``` is a basic endpoint you can use to make sure your server is running, it will simply return a message.
- ```/webhook/send``` is the endpoint you submit form data to, to recieve it where the webhook is pointing.

## Example of using the webhook endpoint

```js
    fetch(`http://localhost:3000/webhook/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
```

## Source Code For This Image
Formbee is fully open-source, you're welcome to check out the source code for this image [here](https://github.com/FormBee/FormBee/blob/main/docker-images/webhooks/index.ts).

## Deploy where you like!
You can self host this image wherever you like to run your containers! I like to use either [AWS ECS](https://aws.amazon.com/ecs/) or [Railway](https://railway.app/) to host my containers.