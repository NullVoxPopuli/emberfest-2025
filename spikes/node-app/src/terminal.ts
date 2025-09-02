/* eslint-disable no-console */
import {
  Button as TerminalButton,
  ConsoleManager,
  PageBuilder,
} from 'console-gui-tools';
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

const p = new PageBuilder(5);
const GUI = new ConsoleManager({
  title: 'Ember in Node',
  enableMouse: true,
  logLocation: 1,
  layoutOptions: {
    boxed: true,
    type: 'single',
    fitHeight: true,
  },
});

GUI.setPage(p, 0);

GUI.on('exit', () => {
  console.clear();
  process.exit();
});

let texts: TextNode[] = [];

function trim(node: TextNode): string {
  return node.textContent.replaceAll(/\s\s/g, '').trim();
}

function updatePage() {
  p.clear();

  const text = texts.map(trim).join(' ');

  p.addRow({
    text,
    color: 'white',
    bold: true,
    hidden: false,
  });
  GUI.setPage(p);
  GUI.refresh();
}

export function addText(text: TextNode) {
  texts.push(text);

  updatePage();
}

let id = 0;

export function DraggableButton(text: string, callback: () => void) {
  const button = new TerminalButton({
    text,
    id: `button_${id++}`,
    x: 20,
    y: 10,
    draggable: true,
    style: {
      color: 'magentaBright',
      bold: true,
      borderColor: 'cyan',
    },
  });

  button.on('click', () => {
    callback();
  });
  GUI.refresh();

  return undefined;
}

let timer: number | undefined;

function scheduleUpdate() {
  clearTimeout(timer);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  timer = setTimeout(() => {
    // const text = texts.map(trim).join(' ');

    // console.log(`up(${texts.length}): ${text}`);
    updatePage();
  }, 50);
}

class TextNode extends window.Text {
  constructor(text: string) {
    super(text);

    addText(this);
  }

  // data, textContent, nodeValue
  get textContent() {
    return super.textContent;
  }
  set textContent(value) {
    // console.log(`Updating ${this.textContent} to ${value}`);
    super.textContent = value;

    scheduleUpdate();
  }

  remove() {
    super.remove();

    texts = texts.filter((x) => x === this);
  }
}

window.document.createTextNode = (text) => {
  return new TextNode(text);
};
