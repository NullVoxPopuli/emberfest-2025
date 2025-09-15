
<script setup lang="ts">
	/**
	Sli.dev is inanely buggy around click visibility

	https://github.com/slidevjs/slidev/issues/860
	*/
import {inject, ref, onMounted} from "vue";
import { onSlideEnter, onSlideLeave, useDarkMode, useIsSlideActive, useNav, useSlideContext } from '@slidev/client'
import { parseRangeString } from '@slidev/parser/core'

const props = defineProps<{
  on: string
}>()

const { $clicks, $frontmatter } = useSlideContext();

const show = () => {
	const totalClicks = { ...$frontmatter}.clicks;
	let ranges = parseRangeString(totalClicks, props.on)
	let found = ranges.indexOf($clicks.value);
	// console.log({ $clicks, found, ranges, totalClicks, $frontmatter });

	return found !== -1
}

</script>

<template>
  <div v-if="show()" style="position: absolute; inset: 0; pointer-events: none;">
    <slot/>
  </div>
</template>
