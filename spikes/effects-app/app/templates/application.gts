import { tracked } from '@glimmer/tracking';
import { subtle } from '@ember/renderer';

import { Logs } from 'kolay/components';

class Demo {
  @tracked count = 0;
  increment = () => this.count++;
}

const demo = new Demo();

subtle.sync(() => {
  console.log(demo.count);
});

<template>
  {{demo.count}}
  <button onclick={{demo.increment}}>++</button>

  <Logs />
</template>
