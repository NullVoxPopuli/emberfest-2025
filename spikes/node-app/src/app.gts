import './renderer.ts';

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { on } from '@ember/modifier';
import { renderComponent } from '@ember/renderer';

class HelloWorld extends Component {
  @tracked count = 0;

  increment = () => (this.count += 1);

  <template>
    <p>You have clicked the button {{this.count}} times.</p>

    <button type="button" {{on "click" this.increment}}>Click</button>
  </template>
}

renderComponent(HelloWorld, {
  into: document.body,
});
