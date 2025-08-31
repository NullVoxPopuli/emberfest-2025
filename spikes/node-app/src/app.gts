import './renderer.ts';

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { on } from '@ember/modifier';
import EmberRouter from '@ember/routing/router';

import Application from 'ember-strict-application-resolver';

class Router extends EmberRouter {
  location = 'none';
  rootURL = '/';
}

Router.map(function () {});

class HelloWorld extends Component {
  @tracked count = 0;

  increment = () => (this.count += 1);

  <template>
    <p>You have clicked the button {{this.count}} times.</p>

    <button type="button" {{on "click" this.increment}}>Click</button>
  </template>
}

class App extends Application {
  modules = {
    './router': Router,
    './templates/application': HelloWorld,
  };
}

const element = document.createElement('div');
const parent = document.createElement('div');

parent.append(element);

App.create({
  element,
});
