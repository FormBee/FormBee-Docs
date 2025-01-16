## SMTP Setup for Self-Hosting

To enable email delivery for your self-hosted FormBee backend, you will need to configure SMTP (Simple Mail Transfer Protocol). SMTP is a protocol used for sending emails from one server to another. For your backend to send form data via email, you'll need access to an SMTP server.

### Step-by-Step SMTP Setup

1. **Obtain SMTP Credentials**: 
   - For most email services, you'll need a username, password, SMTP server address, and port number. These details are typically found in your email provider’s settings.
   
2. **Configure Environment Variables**:
    - In each of the self-hosting guides, we show where and how to include your SMTP credentials in the environment variables.

3. **Test the SMTP Connection**:
   - After configuration, it’s a good idea to test your setup to ensure emails are sending correctly. You may have a built-in command or tool in your backend to do this.

### Example SMTP Settings for Popular Providers

Here's how to set up SMTP for a few common email providers:

- **Gmail**:
Gmail has completely stopped supporting App Passwords since they are less secure, so you need to use OAuth to send emails from gmail.

1. To use Gmail while self hosting formbee you will need to create a new app in your [Google Cloud Dashboard](https://console.cloud.google.com/apis/credentials) 
2. In the google cloud console be sure to enable the gmail API, and add https://developers.google.com/oauthplayground to your authorized redirect URIs for the next step.
3. You will need to use the [Google Oauth Playground](https://developers.google.com/oauthplayground/) to obtain both an OAuth Refresh token, and access token.
  - In the Oauth playground click the gear in the top right corner, scroll down and select "Use your own credentials". 
  - Select Gmail API v1 as the scope, then authorize and exchange your token for a refresh and access token.

You can now provide these tokens to the environmental variables when self hosting the email form submission back end.

- **Zoho**:
  Host: smtp.zoho.com
  Port: 465
  Username: Your Zoho email address
  Password: Your Zoho password or an App Password if using two-factor authentication
  Note: You may need to generate an app password for your zoho email.
- **Outlook**:
  Unfortunately as of now Outlook has stopped supporting app passwords, and also hasn't provided adequit resources for setting it up as a NodeMailer provider without app passwords.

- **Custom SMTP Server**:
  - If you’re using a custom SMTP server, consult your server’s documentation for the correct settings. Just google "smtp server settings for [your provider]".
  - If your SMTP provider allows you to create an "App Password" use that instead of your real email password.
