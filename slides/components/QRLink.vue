<script setup>
	import QRCode from 'slidev-addon-qrcode/components/QRCode.vue';

	const props = defineProps(['href', 'label', 'inline', 'size'])

	const inline = Boolean('inline' in props);


	let size = props.size ?? 300;
	let qrClasses = "top-right-link-image-overlay";

	if (inline) {
		qrClasses += ' inline';
	}
</script>


<template>
	<a :href="props.href">
		<div :class="qrClasses">
			<QRCode
				class="qr-code"
				type="svg"
				:width="size"
				:height="size"
				:data="props.href"
			/>
			<span class="text-black">{{ props.label ?? props.href }}</span>
		</div>
	</a>
</template>
