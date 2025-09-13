<script setup>
const props = defineProps(['bottom', 'right', 'left', 'top', 'width'])


const stylesObject = {};
for (let prop in props) {
	if (props[prop] !== undefined) {
		stylesObject[prop] = props[prop] + 'rem';
	}
}
</script>


<template>
	<span
		style="
			border-bottom: 3px solid #ee0055;
			position: absolute;
			z-index: 10;
			"
		:style="stylesObject"></span>

</template>
