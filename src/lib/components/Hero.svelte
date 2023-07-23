<script type="ts">
	import Lang from '$lib/Localization/Lang.svelte';
	import { onMount } from 'svelte';
	import Typed from 'typed.js';

	onMount(() => {
		const typed = new Typed('.element', {
			strings: ['SDET', 'QA Tester', 'Team Lead'],
			typeSpeed: 120,
			backSpeed: 120,
			loop: true
		});
	});
</script>

<section class="relative">
	<!-- Hero - Image -->
	<div class="flex justify-center w-80 sm:right-10 sm:mt-0 sm:absolute sm:w-5/12">
		<img
			src="images/hero_image.png"
			class="relative w-full -z-10"
			alt="computer with linkedin profile"
			loading="lazy"
			width="320"
			height="280"
		/>
	</div>
	<div class="px-8 pb-4 sm:py-10 sm:px-40">
		<!-- Hero -->
		<!-- Hero - Introduction -->
		<h1 class="h6 pt-4 sm:pb-2 sm:pt-10 sm:h5"><Lang p="Hero" w="Introduction" /></h1>
		<h1 class="h3 pb-5 sm:pb-10 sm:text-3xl">Thiago Bittencourt</h1>
		<div class="flex font-extrabold text-3xl lg:text-7xl">
			<h1 class="h1 pr-3 text-4xl sm:pr-4 sm:text-7xl"><Lang p="Hero" w="Im" /></h1>
			<div class="h1 text-primary-500 text-4xl sm:text-7xl"><span class="element" /></div>
		</div>
		<!-- Hero - Sub-text -->
		<div class="py-5 sm:py-10">
			<p class="h6 text-secondary-700-200-token"><Lang p="Hero" w="FirstSubText" /></p>
			<p class="h6 text-secondary-700-200-token"><Lang p="Hero" w="SecondSubText" /></p>
		</div>
		<!-- Hero - CTA -->
		<div class="flex justify-center pt-0 sm:justify-start">
			<button
				type="button"
				class="btn variant-filled-surface h6 font-bold py-2 px-4 rounded
				 inline-flex items-center"
			>
				<span>
					<svg class="stroke-white w-8 h-8" fill="none" stroke="#fff" viewBox="0 0 24 24"
						><g stroke-width="1.5"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 7v7m0 0 3-3m-3 3-3-3"
							/><path stroke-linecap="round" d="M16 17H8" /><path
								d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
							/></g
						></svg
					>
				</span>
				<span><Lang p="Hero" w="CTA" /></span>
			</button>
		</div>
	</div>
</section>
