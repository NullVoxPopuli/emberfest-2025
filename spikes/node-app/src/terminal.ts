/* eslint-disable no-console */
import Helper from '@ember/component/helper';

import {
  Button as TerminalButton,
  ConsoleManager,
  PageBuilder,
} from 'console-gui-tools';

const p = new PageBuilder(5);

const GUI = new ConsoleManager({ title: 'Ember in Node' });

GUI.setPage(p, 0);

GUI.on('exit', () => {
  console.clear();
  process.exit();
});

let texts: string[] = [];

function updatePage() {
  p.clear();

  for (const text of texts) {
    p.addRow({ text });
  }

  // console.log(JSON.stringify(texts));
  GUI.refresh();
}

export function addText(text: string) {
  if (texts.includes(text)) {
    removeText(text);
  }

  texts.push(text);

  updatePage();
}

export function removeText(text: string) {
  texts = texts.filter((t) => t === text);

  updatePage();
}

let id = 0;

export class Text extends Helper {
  // #id = `text_${id++}`;
  compute([text]: [string, () => void]) {
    p.addRow({ text });
    GUI.refresh();

    return '';
  }
}

export class Button extends Helper {
  #id = `button_${id++}`;
  compute([text, callback]: [string, () => void]) {
    const button = new TerminalButton({
      text,
      id: this.#id,
      x: 0,
      y: 0,
      draggable: true,
      style: {
        color: 'magentaBright',
        bold: true,
        borderColor: 'cyan',
      },
    });

    button.on('click', callback);
    GUI.refresh();

    return '';
  }
}
