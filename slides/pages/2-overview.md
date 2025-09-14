---
transition: slide-left
---

# We are familiar with creating whole applications 

<div class="large-code content-top-left" v-click hide>

```bash 
ember new my-app-name
```
</div>

<div class="large-code content-top-left" v-click hide>

```bash 
npx ember-cli@latest new my-app-name
```

</div>

<div class="large-code content-top-left" v-click hide>

```bash 
pnpm dlx ember-cli@latest \
  new my-app-name
```

</div>
<div class="large-code content-top-left" v-click hide>

```bash 
pnpm dlx ember-cli@latest \
  new my-app-name \
	--blueprint @ember/app-blueprint
```

</div>
<div class="large-code content-top-left" v-click hide>

```bash 
pnpm dlx ember-cli@latest \
  new my-app-name \
	--blueprint @ember/app-blueprint \
	--typescript
```

</div>

<div class="large-code content-top-left" v-click hide>

```bash 
pnpm dlx ember-cli@latest \
  new my-app-name \
	--blueprint @ember/app-blueprint \
	--typescript \
	--no-welcome
```

</div>

<div class="large-code content-top-left" v-click hide>

```bash 
pnpm dlx ember-cli@latest \
  new my-app-name \
	--blueprint @ember/app-blueprint \
	--typescript \
	--no-welcome \
  --pnpm
```

</div>

<div class="large-code content-top-left" v-click>

```bash 
pnpm dlx ember-cli@latest \
  new my-app-name \
	--blueprint @ember/app-blueprint \
	--typescript \
	--no-welcome \
  --pnpm \
  --ci-provider=none
```

</div>

<!-- 
		This is what we're all familiar with.
[click] Some may refer to this as "ember new", but over time, [click] 
you perhaps, [click] like me, [click] have [click] developed [click] some [click] preferences.
-->



---
transition: slide-left
---

# We've seen that ember can host other frameworks


<div class="row">
	<img style="width: 50%" src="/images/nick-discord.webp" v-click.hide="1">
	<img style="width: 50%" src="/images/arne-bertrand-discord.webp" v-click="1">
</div>

<!--

Yesterday we saw how we can make other frameworks work in Ember.

[click] later today we'll see see how the `ember()` vite plugin enables integration in the oppsite
direction.


-->


---
transition: slide-left
layout: center
---

# What more can we do?


<h2 v-click>
so much more.
</h2>

<!--

So, what more can we do?

[click] _so much more_.


-->



---
transition: slide-left
---

# Two things you need to know

<div style="font-size: 2.5dvh">
<div v-click.show="1">

- how to boot an application
  - (or how to render a component)

</div>
<div v-click.show="2"> 

- <span v-click.show="2">how to patch ember</span>
  - <span v-click.show="3">(roughly, how does rendering work?)</span>

</div>
<div v-click.show="4">

- how to debug ✨ properly ✨
  - (become unstoppable)

</div>
</div>

<!-- 
There are two things you need to know. (and not necisarily in this order)

[click] how to boot an application

  this is just gonna be a super quick overview, since (I think) we're going in depth on this later today

[click] how to patch ember 
perhaps ember doesn't do what you want it to do, and you're very motivated to change its behavior --
for experimentation or proof of concept purposes, of course.

[click] we're also going to need to quickly touch on how rendering works in Ember today, a thousand
mile high deep dive into where are today.

[click] very quickly, how to debug when you don't know where to start 

These are kind of somewhat unrelated topics, but it'll all become important momentarily.

-->

