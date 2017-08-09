AKQA Products
=============

The AKQA Products (Front-End Test) displays a list of products in a responsive grid.
These products can be sorted by selecting a filter in the dropdown menu.

## Setup
 1. Ensure [NPM](https://www.npmjs.com/) is installed (Node >= v4.0.0)
 1. `cd` into the app directory on the command line
 1. Install app dependencies with `npm install`

## Run
Once setup is complete, run the app from the root directory with `npm start`.
Then navigate to `http://localhost:8080/` in your web browser to view the app.
If webpack fails to bundle the app, try running `npm rebuild node-sass`, otherwise
check your version of node with `node --version`

## Build (optional)
You can also build the app into the `/public` directory by running `npm run build`
