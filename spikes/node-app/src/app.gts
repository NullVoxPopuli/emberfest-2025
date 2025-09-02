import './renderer.ts';

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { renderComponent } from '@ember/renderer';

// import { Button, Text } from './terminal.ts';

class HelloWorld extends Component {
  @tracked count = 0;

  increment = () => (this.count += 1);

  get message() {
    return `You have clicked the button ${this.count} times.`;
  }

  <template>
    You have clicked the button
    {{this.count}}
    times.

    {{! Button "Click" this.increment }}
  </template>
}

renderComponent(HelloWorld, {
  into: document.body,
});
