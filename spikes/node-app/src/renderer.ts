import { Window } from 'happy-dom';

const universalUserAgent = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36`;

const window = new Window({
  console: globalThis.console,
  settings: {
    navigator: {
      userAgent: universalUserAgent,
    },
  },
});

window.document.body.innerHTML = '<div></div>';

Object.assign(globalThis, {
  window: window,
  document: window.document,
  location: window.location,
  history: window.history,
  // navigator exists on node's globalThis already
  // navigator: window.navigator,
  // self: dom.window,
});

console.log('--------------');
console.log(window.document.body.innerHTML);
console.log('--------------');

process.on('exit', () => {
  window.close();
});
