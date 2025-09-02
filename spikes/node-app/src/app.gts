import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { renderComponent } from '@ember/renderer';

import { DraggableButton } from './terminal.ts';

class HelloWorld extends Component {
  @tracked count = 0;

  increment = () => (this.count += 1);

  <template>
    You have clicked {{this.count}} times.

    {{DraggableButton "Click" this.increment}}
  </template>
}

renderComponent(HelloWorld, {
  into: document.body,
});
