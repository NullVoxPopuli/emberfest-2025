<script setup>
const props = defineProps(['bottom', 'right', 'left', 'top'])


const stylesObject = {};
const dirs = ['bottom', 'right', 'left', 'top']
for (let dir of dirs) {
	if (props[dir] !== undefined) {
		stylesObject[dir] = props[dir] + 'rem';
	}
}
</script>


<template>
	<span
		style="
			position: absolute;
			font-size: 7rem;
			font-weight: bold;
			color: #bb0055;
			"
		:style="stylesObject">⬋</span>

</template>
