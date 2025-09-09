<script setup>
	import QRCode from 'slidev-addon-qrcode/components/QRCode.vue';

	const props = defineProps(['href', 'label'])
</script>


<template>
	<a href="{{ props.href }}">
		<div class="top-right-link-image-overlay">
			<QRCode
				class="qr-code"
				type="svg"
				data="{{ props.href }}"
			/>
			<span class="text-black">{{ props.label ?? props.href }}</span>
		</div>
	</a>
</template>
