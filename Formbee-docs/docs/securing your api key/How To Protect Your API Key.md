# How to protect your API key

## Why do we need to protect our API key?

Your API key is like a password to your formbee usage. If a malicious user gets access to your api key, they could spam the key, and use up all of your usage.

## What can I do to protect my API key?

There are a few ways to protect your API key:

1. Whitelist your domain in the FormBee dashboard. [How to whitelist your domain.](https://docs.formbee.dev/docs/features/Allowed-Domains) This will be enough protection for many use cases, however, a milicious user could still send form submissions via the developer console, since those requests are not blocked by the domain whitelist since they come from the whitelisted domain.

2. Set up a minimal server to pass your API key in with a .env variable. [Templates for minimal server.](https://example.com)

With this, your minimal server will act as a middleman/proxy between your frontend and FormBee.