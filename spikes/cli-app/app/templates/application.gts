import { tracked } from '@glimmer/tracking';
import { subtle } from '@ember/renderer';

import { pageTitle } from 'ember-page-title';

class Demo {
  @tracked count = 0;
  increment = () => this.count++;
}

const demo = new Demo();

subtle.sync(() => {
  console.log(demo.count);
});

<template>
  {{pageTitle "CliApp"}}

  <h2 id="title">Welcome to Ember</h2>

  {{demo.count}}
  <button onclick={{demo.increment}}>++</button>
  {{outlet}}
</template>
