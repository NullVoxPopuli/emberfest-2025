---
transition: slide-left
---

# We are familiar with creating whole applications 

ember new blah blah

```bash
# or npx
pnpm dlx ember-cli@latest \
	new my-app-name \
	--blueprint @ember/app-blueprint \
	--typescript \
	--no-welcome \
	--pnpm
```



---
transition: slide-left
---

# We've seen that ember can host other frameworks


<!--

Yesterday Nick demonstrated how we can make other frameworks in Ember.


-->


---
transition: slide-left
---

# What more can we do?

so much more.


---
transition: slide-left
---

# Two things you need to know

- how to boot an application
  - (or how to render a component)
- how to patch ember 

---

# Patching Ember

```bash
❯ pnpm patch ember-source
✔ Choose which version to patch · 6.8.0-alpha.6
✔ Apply this patch to all versions? (y/N) · false
Patch: You can now edit the package at:

  <.pnpm>_patches/ember-source@6.8.0-alpha.6

To commit your changes, run:

  pnpm patch-commit '<.pnpm>_patches/ember-source@6.8.0-alpha.6'

```

---

# What's in Ember?

These packages[^access-restricted]:

[^access-restricted]: not all of these are public, and some _should_ be attempted to be used, as they'll be going away eventually. 

<style>
  .wrapped-non-list {
	  ul {
		  display: flex;
		  flex-wrap: wrap;
		  li {
			  list-style: none;
		  }
	  }
  }
</style>

<div class="wrapped-non-list">

- @ember/-internals
- @ember/application
- @ember/array
- @ember/canary-features
- @ember/component
- @ember/debug
- @ember/deprecated-features
- @ember/destroyable
- @ember/engine
- @ember/enumerable
- @ember/helper
- @ember/instrumentation
- @ember/modifier
- @ember/object
- @ember/reactive
- @ember/renderer
- @ember/routing
- @ember/runloop
- @ember/service
- @ember/template
- @ember/template-compilation
- @ember/template-compiler
- @ember/template-factory
- @ember/test
- @ember/utils
- @ember/version
- @glimmer/destroyable
- @glimmer/encoder
- @glimmer/env
- @glimmer/global-context
- @glimmer/manager
- @glimmer/node
- @glimmer/opcode-compiler
- @glimmer/owner
- @glimmer/program
- @glimmer/reference
- @glimmer/runtime
- @glimmer/tracking
- @glimmer/util
- @glimmer/validator
- @glimmer/vm
- @glimmer/wire-format
- @simple-dom/document
- backburner.js
- dag-map
- ember
- ember-testing
- route-recognizer
- router_js
- rsvp

</div>

<!--

Quite a few.

-->

---
title: Effects lol
---

# What can we do with these powers of patching?


<div class="two-columns">

```gjs
import { tracked } from '@glimmer/tracking';
import { subtle } from '@ember/renderer';

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
</template>
```


<div class="iframe-chrome">
	<iframe src="/demos/effects/index.html"></iframe>
</div>		

</div>
