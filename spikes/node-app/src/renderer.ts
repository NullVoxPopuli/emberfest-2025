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

process.on('exit', () => {
  window.close();
});

import { addText, removeText } from './terminal.ts';

class TextNode extends window.Text {
  text: string;
  constructor(text: string) {
    super(text);
    this.text = text.replaceAll(/\s\s/g, '').trim();

    addText(this.text);
  }
  remove() {
    super.remove();

    removeText(this.text);
  }
}

window.document.createTextNode = (text) => {
  return new TextNode(text);
};
