# http-securifier

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

NOTE: This is not designed for security, but should be fine for requesting images, etc from insecure servers.

A simple proxy to request any HTTP resource through an HTTPS connection

This script was designed to prevent mixed-content warnings when you must request unencrypted resources.

After deploying to Heroku, just make requests to:

`https://your-app-name.herokuapp.com/?url=http://example.com/insecure-image.jpg`
