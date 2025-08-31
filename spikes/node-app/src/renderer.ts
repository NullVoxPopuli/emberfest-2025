import { Window } from 'happy-dom';

const universalUserAgent = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36`;

const windowWithOptions = new Window({
  width: 1920,
  height: 1080,
  url: 'http://localhost:8080',
  console: globalThis.console,
  settings: {
    // disableJavaScriptEvaluation: true,
    navigator: {
      userAgent: universalUserAgent,
    },
    // device: {
    // 	prefersColorScheme: 'dark'
    // }
  },
});

windowWithOptions.document.write(`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Node App</title>
  </head>
  <body></body>
</html>
        `);

// Object.assign(globalThis, {
//   window,
//   document: window.document,
// });

let dom = { window: windowWithOptions };

// import jsdom from 'jsdom';

// const { JSDOM } = jsdom;

// const dom = new JSDOM(`<!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="utf-8">
//     <title>Node App</title>

//   </head>
//   <body>
//   </body>
// </html>`, {
//   userAgent: universalUserAgent,
//   resources: new jsdom.ResourceLoader({
//     userAgent: universalUserAgent
//   })
// });

Object.assign(globalThis, {
  window: dom.window,
  document: dom.window.document,
  location: dom.window.location,
  history: dom.window.history,
  // navigator: dom.window.navigator,
  // self: dom.window,
});
