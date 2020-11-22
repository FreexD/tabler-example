# Tabler chart dashboard

PoC of a dashboard with charts and levels made with tabler.

## Setup

You would need `node` and `npm` installed.
Install npm dependencies in main folder:

```sh
npm install
```

## Examples

Project consists of 2 examples of how the problem we mailed about can be solved. These are very simple but should give you a nice little head start into development with tabler ;)

### static

This example is a simple `http-server` returning `index.html` and all other assets statically. Tabler JS and CSS dist files are fetched from CDN in the latest alpha version. Charts data is (simulated to be) fetched asynchronously in `static/updateScript.js` - `getDataFromServer` method - to be replaced with real fetch if needed. The `update` script which fetches data and refreshes chart series/last sync time is triggered at an interval of 30 seconds.

This is more of a SPA approach, where server is only responsible of returning index.html and chart data and the JS on client/browser side does the rest. I didn't use any frontend framework for it (like react or angular) but the point is made that it will work :)

To the static server:
```sh
npm run static
```

To the static server with autoreload:
```sh
npm run dev:static
```

### ssr

In this example we have a server (for the sake of it it's express.js) that is responsible for rendering and returning the HTML file to the client on each request. I feel like this is more of what you have proposed in your email than the `static` example. Chart data, last sync time, and dashboard levels are calculated on the server on each request and rendered into result HTML/JS (using EJS in that case). Dashboard is refreshed every 30 seconds using a meta tag. 

To the express server:
```sh
npm run ssr
```

To run the express server with autoreload:
```sh
npm run dev:ssr
```

## Development

Useful links when developing with charts and tabler:

- tabler documentation: https://preview.tabler.io/docs/index.html,
- tabler examples: https://preview.tabler.io/,
- bootstrap documentation: https://v5.getbootstrap.com/docs/5.0/getting-started/introduction/,
- bootstrap examples: https://v5.getbootstrap.com/docs/5.0/examples/,
- apexcharts documentation: https://apexcharts.com/docs/installation/,
- apexcharts examples: https://apexcharts.com/javascript-chart-demos/,

## Memory/CPU measurement

Chrome profiler.



