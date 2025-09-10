<script setup>
	const props = defineProps(['code', 'height'])

	const url =
	`https://limber.glimdown.com/edit?t=${encodeURIComponent(props.code.replaceAll('//--', ''))}&format=gjs&editor=60v&forceEditor=true`;

	const height = props.height;
	const html = `
	<div class="iframe-chrome" style="height: ${height};">
	<div class="iframe-chrome-tab">
		REPL | limber.glimdown.com
	</div>
	<iframe src=${url}></iframe>
	</div>`;

</script>


<template>
	<span v-html="html"></span>
</template>
