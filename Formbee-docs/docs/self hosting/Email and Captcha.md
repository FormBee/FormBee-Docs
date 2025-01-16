---
title: Email and Captcha
---

These docs will walk you through self hosting just a backend for recieving form data to your email and a [PoW captcha](https://docs.formbee.dev/docs/features/captchas/pow-captcha) with docker.
<!-- 
We have a template on Railway for this [here](https://railway.app/template/NR9kSH?referralCode=JI_qC_) if you want a setup as easy as typing in 4-5 env variables in a GUI. -->

## First, let's get the docker image

```bash
docker pull oia123/formbee-email-and-captcha
```

## Next, let's run the docker image

### If You're Using An SMTP Provider That Still Supports App Passwords


```bash
docker run -e EMAIL_PROVIDER=smtp.example.com -e EMAIL_USER=email@example.com -e EMAIL_PASSWORD=password -e EMAIL_TO=email@example.com -e ORIGIN=* -e SMTP_PORT=465 -e GMAIL_CLIENT=Google_Client -e GMAIL_SECRET=Google_Secret -e GMAIL_TRUE=False -e GMAIL_REFRESH=Google_Refresh_Token -e GMAIL_ACCESS=Gmail_AccessToken -p 3000:3000 oia123/formbee-email-and-captcha
```
Make sure to replace these environmental variables with your own. Find out more about how to get your SMTP credentials [here](https://docs.formbee.dev/docs/self%20hosting/SMTP). 
- ```EMAIL_PROVIDER``` is the SMTP provider you are using. EMAIL_USER is your username (email address).
- ```EMAIL_USER``` is your username (email address).
- ```EMAIL_PASSWORD``` is your email  password, for some SMTP providers you will need to use an app specific password they provide instead of your actual email    password.
- ```EMAIL_TO``` is the email address you want to recieve the form data at. 
- ```ORIGIN``` is the domain you want to allow to access the backend input * if you want to allow all domains to access the backend. 
- ```SMTP_PORT``` is the port you are using for your SMTP provider this defaults to 465.
### If You're Using Gmail
The web as a whole is moving towards OAuth2, and avoiding regular passwords or app specific passwords so using gmail takes some extra work.

```bash
docker run -e EMAIL_USER=email@example.com -e EMAIL_TO=email@example.com -e ORIGIN=* -e GMAIL_CLIENT=Google_Client -e GMAIL_SECRET=Google_Secret -e GMAIL_TRUE=True -e GMAIL_REFRESH=Google_Refresh_Token -e GMAIL_ACCESS=Gmail_AccessToken -p 3000:3000 oia123/formbee-email-and-captcha
```
- ```EMAIL_USER``` is your username (email address).
- ```EMAIL_TO``` is the email address you want to recieve the form data at. 
- ```ORIGIN``` is the domain you want to allow to access the backend input * if you want to allow all domains to access the backend. 
- ```GMAIL_CLIENT``` Obtain this from your google cloud engine dashboard (create credentials) [Google Cloud Dashboard](https://console.cloud.google.com/apis/credentials)
- ```GMAIL_SECRET``` Obtain this from your google cloud engine dashboard (create credentials) [Google Cloud Dashboard](https://console.cloud.google.com/apis/credentials)

In the google cloud console be sure to enable the gmail API, and add https://developers.google.com/oauthplayground to your authorized redirect URIs for the next step.

- ```GMAIL_TRUE``` Keep set to True if you're using gmail.
- ```GMAIL_REFRESH``` Obtain this by inputing your gmail clientID, and Secret into [Google Oauth Playground](https://developers.google.com/oauthplayground/)
- ```GMAIL_ACCESS``` Obtain this by inputing your gmail clientID, and Secret into [Google Oauth Playground](https://developers.google.com/oauthplayground/)

Make sure to select the Gmail API v1 scope in the Oauth playground. You can find where to set your own ClientID, and Secret by clicking the gear in the top right of the playground, and scrolling to the bottom.

## Once you're up and running
You can now access the backend at `http://localhost:3000`.

### Available endpoints

- ```/``` is a basic endpoint you can use to make sure your server is running it will respond "Formbee Email-Only is running"
- ```/challenge``` is the endpoint to pass into the "challengeurl" of the altcha-widget, see [PoW Captcha Docs](https://docs.formbee.dev/docs/features/captchas/pow-captcha)
- ```/formbee/email-only``` is the endpoint you submit form data to, to recieve it in your email.

## Source Code For This Image
Formbee is fully open-source, you're welcome to check out the source code for this image [here](https://github.com/FormBee/FormBee/blob/main/docker-images/email-and-captcha/index.ts).

## Deploy where you like!
You can self host this image wherever you like to run your containers! I like to use either [AWS ECS](https://aws.amazon.com/ecs/) or [Railway](https://railway.app/) to host my containers.