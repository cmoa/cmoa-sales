# CMOA Sales

Frontend tooling and HTML/CSS/JS for CMOA sales pages and sales widget

## Overview

The `cart.html`, `cart-promo.html`, and `checkout.html` pages approximate the shopping cart production environment and are to be used to test CSS and JS, whereas the CMS site templates for the header and footer are the *actual code snippets* to be **copy/pasted** to the [CMP Sales CMS](https://sales.carnegiemuseums.org/manage/).

Any updates or changes made here need to be recompiled, and the files in `dist/` should be moved to the sales production webserver.

_Note, don’t forget to ammend the `CSS` and `JS` links in the **Header** and **Footer** with the cache-busting content hash!_

---

## Setup

This project requires node and gulp.

[node](https://nodejs.org/en/download/package-manager/) is available on most platforms and can also be managed with tools like [nvm](https://github.com/creationix/nvm).

If the gulp command-line utility has not been installed globally on your machine, run `npm install -g gulp-cli`

Finally, run `npm install` to install project-specific dependencies.

## Development

Run `npm start` to launch a development server with Browsersync. The browser should automatically reload on file changes.

## Building

Run `npm run build` to compile files for production. Bundled files will be created in the local `dist/` folder.



