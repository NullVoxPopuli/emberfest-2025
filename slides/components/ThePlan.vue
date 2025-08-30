<script setup lang="ts">
	import { useTemplateRef, onMounted, onUnmounted } from 'vue'
	import LinkerLine from 'linkerline';
import { onSlideEnter
, onSlideLeave
, useIsSlideActive
 } from '@slidev/client'

const linesEl = useTemplateRef('linescontainer');

  const leftInputs = {
		starbeam: useTemplateRef('starbeam'),
		gxt: useTemplateRef('gxt'),
		warpdrive: useTemplateRef('warpdrive'),
		signals: useTemplateRef('signals'),
	}
	const rightInputs = {
		svelte: useTemplateRef('svelte'),
		solid: useTemplateRef('solid'),
		vue: useTemplateRef('vue'),
	}
	const ember = useTemplateRef('ember');

	const outputs = {
		web: useTemplateRef('web'),
		cli: useTemplateRef('cli'),
		canvas: useTemplateRef('canvas'),
		ios: useTemplateRef('ios'),
		android: useTemplateRef('android'),
		webGL: useTemplateRef('webgl'),
		// why not?
		unrealEngine: useTemplateRef('unreal'),

	};

	/*
	* https://github.com/AhmedAyachi/LinkerLine
	*/
	let lines = [];

	function createLines() {
		let parent = null; //linesEl.value;
			for (let [key, ref] of Object.entries(leftInputs)) {
				let line = new LinkerLine({ parent, start: ref.value, end: ember.value, show: 'draw' });
				lines.push(line);
			}
			for (let [key, ref] of Object.entries(rightInputs)) {
				let line = new LinkerLine({  parent, start: ref.value, end: ember.value, show: 'draw' });
				lines.push(line);
			}
			for (let [key, ref] of Object.entries(outputs)) {
				let line = new LinkerLine({ parent, start: ember.value, end: ref.value, show: 'draw' });
				lines.push(line);
			}
			globalThis.lines = lines;
			globalThis.LinkerLine = LinkerLine;
	}
	const isActive = useIsSlideActive();
	let isMounted = false;

	onMounted(() => {
		isMounted = true;
		if (isActive.value) {
				if (lines.length === 0) {
						createLines();
				}
		}
	});

	onSlideEnter(() => {
		console.log('enter', { lines, isActive: isActive.value });
		if (isActive.value) {
			if (isMounted) {
				if (lines.length === 0) {
					createLines();
				}

				console.log('positioning');
				setTimeout(() => {
					lines.forEach(x => x.show('draw'));
					LinkerLine.positionAll();
				}, 50)
			}
		}
	});


	onSlideLeave(() => {
		console.log('leave', { lines, isActive: isActive.value });
		if (!isActive.value) {
			setTimeout(() => {
				lines.forEach(x => x.hide('none'));
			}, 150)
		}
	});
</script>

<style scoped>
	.inputs-left, .inputs-right, .the-plan-outputs {
		display: flex;
		gap: 1rem;
		a, div {
			border-bottom: none;
			display: flex;
			flex-direction: column;
			text-align: center;
			align-items: center;
			justify-content: center;
		}
		img {
			max-width: 3rem;
			max-height: 3rem;
		}
	}
	.inputs-left {
		flex-direction: column;
		grid-area: left;
	}
	.inputs-right {
		flex-direction: column;
		grid-area: right;
	}

	.universal-web-dev {
		grid-area: center;
		align-self: center;
		text-align: center;
		justify-content: center;
		display: flex;
		a {
			border-bottom: none;
		}
	}

	.the-plan-outputs {
		grid-area: bottom;
		align-self: center;
		justify-self: end;
	}

	.plans-container {
		position: relative;
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-areas:
			"left noL  noT   noR right"
			"left noL center noR right"
			"left noL  noB   noR right"
			"left bottom  bottom  bottom right"
	}

</style>


<template>
	<div class="plans-container" ref="linescontainer">
		<div class="inputs-left">
			<a href="https://starbeamjs.com/" ref="starbeam">
				<img src="/images/starbeam.png" />
				<span>Starbeam</span>
			</a>

			<a href="https://g-next.netlify.app/" ref="gxt">
				<img src="/images/glimmer-next.png" />
				<span>glimmer-next</span>
			</a>

			<a href="https://warp-drive.io/" ref="warpdrive">
				<img src="/images/NCC-1701-a-gold.svg" />
				<span>warpdrive</span>
			</a>

			<a href="https://github.com/tc39/proposal-signals" ref="signals">
				<img src="/images/tc-39-signals.svg" />
				<span>TC39 Signals</span>
			</a>
		</div>


		<div class="universal-web-dev">
			<a href="https://emberjs.com/" ref="ember">
				<img src="/images/ember-e-circle-icon-4c.svg" />
				<span>Ember</span>
			</a>
		</div>


		<div class="inputs-right">
			<a href="https://svelte.dev/" ref="svelte">
				<img src="/images/svelte-logo.svg" />
				<span>Svelte</span>
			</a>
			<a href="https://www.solidjs.com/" ref="solid">
				<img src="/images/solid-logo.svg" />
				<span>Solid</span>
			</a>
			<a href="https://vuejs.org/" ref="vue">
				<img src="/images/vue-logo.svg" />
				<span>Vue</span>
			</a>
		</div>

		<div class="the-plan-outputs">
			<div ref="web">
				<img src="/images/html5.png" />
				<span>Web</span>
			</div>
			<div ref="cli">
				<img src="/images/ghostty-logo.svg" />
				<span>CLI</span>
			</div>
			<div ref="canvas">
				<img src="/images/html5.png" />
				<span>Canvas</span>
			</div>
			<div ref="webgl">
				<img src="/images/webgl.png" />
				<span>WebGL</span>
			</div>
			<div ref="ios">
				<img src="/images/ios.png" />
				<span>iOS</span>
			</div>
			<div ref="android">
				<img src="/images/android.png" />
				<span>Android</span>
			</div>
			<div ref="unreal">
				<img src="/images/unreal-engine.png" />
				<span>Unreal Engine</span>
			</div>
		</diV>
	</div>
</template>
