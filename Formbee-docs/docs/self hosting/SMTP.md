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
  - Host: `smtp.gmail.com`
  - Port: `587` (TLS) or `465` (SSL)
  - Username: Your Gmail address
  - Password: Your Gmail password or an [App Password](https://knowledge.workspace.google.com/kb/how-to-create-app-passwords-000009237) if using two-factor authentication
  - Note: You may need to enable access for less secure apps or generate an App Password if two-factor authentication is enabled.

- **Outlook**:
  - Host: `smtp.office365.com`
  - Port: `587` (TLS)
  - Username: Your Outlook email address
  - Password: Your Outlook email password

- **Custom SMTP Server**:
  - If you’re using a custom SMTP server, consult your server’s documentation for the correct settings. Just google "smtp server settings for [your provider]".
