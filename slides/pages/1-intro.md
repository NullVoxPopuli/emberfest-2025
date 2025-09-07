---
theme: default
title: e(mber)verywhere
info: |
  Use ember anywhere you want.

  What you need to achieve the activation energy to become unstoppable.
# https://sli.dev/features/drawing
class: custom-title
drawings:
  persist: false
transition: slide-left
# open graph
seoMeta:
  # By default, Slidev will use ./og-image.png if it exists,
  # or generate one from the first slide if not found.
  ogImage: auto
  # ogImage: https://cover.sli.dev
transition: slide-up
---

<style>
.custom-title {
	background: black;
	background-image: unset !important;

	h1 {
		display: flex;
		font-size: 6rem;
		justify-content: center;

		span {
			margin-top: 1rem;
			margin-left: -1.4rem;
		}
	}

	.centered-right {
		margin: 0 auto;
		text-align: right;
		width: fit-content;
		position: relative;
	}

	.caveat {
		font-size: 0.5rem;
		color: #ddd;
		position: absolute;
		transform: rotate(-31deg);
		width: 200px;
		margin-left: -5rem;
		margin-top: 3rem;
	}

}
</style>

<div class="centered-right">
	<h1 class="pacifico">
	  <img src="/images/ember-e-circle-icon-4c.svg" />
	  <span>verywhere</span>
	</h1>
	<em class="subtitle">there are no limits</em>
	<span class="caveat">except time, energy, focus, hours in a day, etc</span>
</div>


<!--

Use ember wherever you feel like
	Things you need to know
		How does an app boot?
		How do you manage the owner?
		Do you need to manage the owner?


||||||||||||||||||||||

Previous ideas I had for what to talk on


what's going on?
- with my profile Picture?
  - probably 4k+ iterations (no-joke)
- the code size of my employer
- with TC39 / Signals
  - ember's plan in all this
  - Inspo from warpdrive 
- Reactivity / RFCs / resources
  - List RFCs, overview, implementation, etc
  - Ecosystem Libraries
- UI Kits / Design Systems
  - Ember-primitives

where do I see the framework going?

How to debug
- Live debugging
- Examples
- Console.log? No. logpoints!


-->

---
transition: slide-up 
level: 2
title: Who am I?
---


<img class="framed" src="/images/og-primal-kerrigan.jpg" />

<a class="qr-link top-right" href="https://nullvoxpopuli.com">
	<QRCode
		class="qr-code"let
		type="svg"
		data="https://nullvoxpopuli.com"
	/>
	<span>https://nullvoxpopuli.com</span>
</a>

<h1>NullVoxPopuli</h1>

<!--

This is how you can find me online.
I'm Null Vox Populi everywhere.

The website at the QR code has a list of links, blukesy, mastadon, twitter, github, etc.

If you can't find me somewhere, let me know,
And then you'll have found me.
-->

---
transition: slide-up 
level: 2
title: Who employs me 
---


<a href="https://auditboard.com/solutions/itrc">
	<img class="framed" src="/images/auditboard-not-home-page.png" />
	<div class="top-right-link-image-overlay">
		<QRCode
			class="qr-code"
			type="svg"
			data="https://auditboard.com/solutions/itrc"
		/>
		<span class="text-black">https://auditboard.com/solutions/itrc</span>
	</div>
</a>

<!--

I am employed by auditboard.

You can find out more at the link here.

There is some hiring going on, though I don't know exactly in which countries specifically -- this
changes fairly frequently. 

When I was writing this slide, I saw openings outside the US for the UK and Canada.

-->


---
transition: slide-up 
level: 2
title: What's interesting about Auditboard's code? (last year)
---

<img src="/images/auditboard-2024.png" />

<!--

Last year I shared this slide about the break down of the 3 main repos.

What languages or file types are used in each, 
and the package breakdown in the frontend repo.

-->

---
transition: slide-up 
level: 2
title: What's interesting about Auditboard's code? (currently)
---

# 1 year later: stats![^measured-how]

[^measured-how]: Using tokei `13.0.0-alpha.9`. Deltas are calculated via `(new / old) - 1` to mean
	`(new / old)` to mean "current is % of prior" and `-1` to mean "current is this much remaining
from the total with the prior subtracted away"


shared-tooling
|       | Last Year | This Year | Δ     |
| ----- | --------- | --------- | ----- |
| JS    | 2.1k      | 3.3k      | +57%  |
| TS    | 3.4k      | 10.5k     | +208% |
| ..... |           |           |       |
|       | 5.5k      | 13.8k     | +150% | 

<br />

<!--

One year later, things have changed _significantly_.

This little footnote here at the bottom is just how I calculated the numbers. it's not important
right now, but if folks like to know that kind of thing, the information is there.

This will be true for the other comparisons as well.


But yea, while this is the smallest of the 3 repos, 
it's grown by 150 percent over the last year.

There is no ember in here though.

-->

---
transition: slide-up 
level: 2
title: What's interesting about Auditboard's code? (currently (continued))
---

# 1 year later: stats! (continued)


auditboard-backend

|       | Last Year | This Year | Δ     |
| ----- | --------- | --------- | ----- |
| JS    | 0.53m     | 0.53m     | +0%   |
| TS    | 0.53m     | 0.87m     | +64%  |
| ..... |           |           |       |
|       | 1.06m     | 1.4m      | +32%  | 

<br />

<!--

This repo is significantly bigger, starting last year at about a million lines. 

But only growing by 32% overall to 1.4 million lines.

These lines are of higher value though, due to all being TypeScript.


There is still no ember in here though.

-->

---
transition: slide-up 
level: 2
title: What's interesting about Auditboard's code? (currently (continued))
---

# 1 year later: stats! (continued (continued))

<ArrowBL v-click.show="1" v-click.hide="2" :bottom=0 :right=10 />
<ArrowBL v-click.show="2" :bottom=8 :right=25 />
<ArrowBL v-click.show="2" :bottom=15 :right=8 />
<Line v-click.show="2" :bottom=9 :left=2 :width=40 />

<p style="position: absolute;">auditboard-frontend</p>

|          | Last Year | This Year | Δ       |
| -------- | --------- | --------- | ------- |
| JS       | 1.1m      | 0.82m     | -25%    |
| TS       | 0.31m     | 0.47m     | +52%    |
| GJS      | 1.7k      | 0.52m     | +30,488% |
| GTS      | 64.6k     | 0.30m     | +364%   |
| HBS      | 249k      | 0         | -100%   |
| CSS, etc | 0.52m     | 0.79m     | +52%    |
| ........ |           |           |         |
| Total    | 2m        | 2.9m      | +50%    | 


<br />

<!--

This repo has all the ember!

Some interesting things about numbers in this table:
- [click] the total number of lines only went up by 50%
- however, adding 1 million lines of code in one year is just... bonkers
- [click] fun fact: during this time, this codebase completely migrated all 
  components, route-templates, and rendering tests to gjs and gts.
  We have no more handlebars.
- also! during this time all but one apps in the repo are now running vite


Best of all....
(next slide)


||||||||

current: 63d00157616
last year: c10f268 
see: https://dev.to/nullvoxpopuli/repository-growth-over-time-1o5a

 tokei \
  --types=HTML,CSS,JSON \
  --types=JavaScript,TypeScript,Handlebars \
  --types=Glimmer\ JS,Glimmer\ TS


-->

---
transition: slide-up 
level: 2
title: What's interesting about Auditboard's code? (currently (continued (continued)))
---

# How we wrote 1 million lines in a year

<img src="/images/sewing-machine.avif" />

<!--

Code is still primarily hand-crafted, yet machine-assisted. 
Using every tool available to produce value for customers.

No viben.

|||||


Image credit: https://unsplash.com/photos/a-close-up-of-a-sewing-machine-on-a-table-1urO7XN3zuA


-->



---
transition: slide-up 
level: 2
title: What's interesting about Auditboard's code? (currently (continued (continued)))
---


|          | as of emberfest 2024 | as of emberfest 2025 | Δ     |
| -------- | --------- | --------- | ----- |
| Files       | 14,777 | 22,730    | +54%  |
| insertions  | 104,049| 160,793   | +55%  |
| deletions   | 98,324 | 158,853   | +76%  |
| ........ |           |           |       |
| Net +    | 5,725     | 1,940     |       | 

<!--

For fun, last year, I said that my contributions in total were (unfortunately) still net positive.

Well, this year, that's still the case -- BUT! 
I'm quickly approaching zero,
and I really feel like like next year I might actually be able to achieve my goal of removing more code from the codebase than adding to it.

Anywho, this is a silly metric, but it's fun. 
Producing more value with less code is the dream.


Anywho, enough stats! Let's get to puttin' ember places

||||||

git log --shortstat --author "NullVoxPopuli" \
| egrep "file[s]* changed" \
| sed 's/changed, \([0-9]\+ deletions\)/changed, 0 insertions(+), \1/g' \
| awk '{files+=$1; inserted+=$4; deleted+=$6} END {print "files changed", files, "lines inserted:", inserted, "lines deleted:", deleted}' 


-->

---
theme: default
title: e(mber)verywhere (actually getting in to it)
transition: slide-left
class: custom-title title-again
---

<style>
.title-again {
	display: flex;
	align-items: center;

	h1 {
		span {
			margin-top: 2rem;
		}
	}
}
</style>

<div class="centered-right">
	<h1 class="pacifico">
	  <img src="/images/ember-e-circle-icon-4c.svg" />
	  <span>verywhere</span>
	</h1>
	<em class="subtitle">there are no limits</em>
	<span class="caveat">except time, energy, focus, hours in a day, etc</span>
</div>

<!--
Ok, so what does it mean to use ember everywhere?

What does it mean?

-->
