These docs will walk you through self hosting just a backend for recieving form data to your email with docker.

We have a template on Railway for this [here](https://railway.app/template/NR9kSH?referralCode=JI_qC_) if you want a setup as easy as typing in 4-5 env variables in a GUI.

## First, let's get the docker image

```bash
docker pull oia123/formbee-email-only
```

## Next, let's run the docker image

```bash
docker run -e EMAIL_PROVIDER=smtp.example.com -e EMAIL_USER=example@example.com -e EMAIL_PASSWORD=Password -e EMAIL_TO=example@example.com -e ORIGIN=* -e SMTP_PORT=465 -p 3000:3000 oia123/formbee-email-only
```
Make sure to replace these environmental variables with your own. Find out more about how to get your SMTP credentials [here](https://docs.formbee.dev/docs/self%20hosting/SMTP). 
- ```EMAIL_TO``` variable is the email address you want to recieve the form data at. 
- ```ORIGIN``` variable is the domain you want to allow to access the backend input * if you want to allow all domains to access the backend. 
- ```EMAIL_PROVIDER``` is the SMTP provider you are using. EMAIL_USER is your username (email address).
- ```EMAIL_PASSWORD``` is your email  password 
- ```SMTP_PORT``` is the port you are using for your SMTP provider this defaults to 465.

This will get the docker image running locally on port 3000. You can now access the backend at `http://localhost:3000`.
## That's it!

You can self host this image wherever you like to run your containers! I like to use either [AWS ECS](https://aws.amazon.com/ecs/) or [Railway](https://railway.app/) to host my containers.