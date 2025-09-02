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

const { navigator, crypto, ...toApply } = window;

Object.assign(globalThis, toApply, {
  window: window,
});

console.log('--------------');
console.log(window.document.body.innerHTML);
console.log('--------------');

process.on('exit', () => {
  window.close();
});
