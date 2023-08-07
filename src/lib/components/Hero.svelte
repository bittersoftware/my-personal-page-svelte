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
		</div>
		<!-- Hero - CTA -->
		<div class="flex justify-center pt-0 sm:justify-start">
			<a
				href="/resume"
				type="button"
				class="btn variant-filled-surface h6 font-bold py-2 px-4 rounded
				 inline-flex items-center"
			>
				<span>
					<svg
						class="stroke-white w-8 h-8"
						xml:space="preserve"
						width="64"
						height="64"
						fill="#fff"
						stroke="#fff"
						viewBox="0 0 60 60"
						><path
							d="M38.914 0H6.5v60h47V14.586L38.914 0zM34.5 31a1 1 0 0 1-1 1h-10a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1zm-18.238-7.521.32-.741a3.147 3.147 0 0 1 1.382-1.541l2.204-1.087c-.969-.622-1.667-1.558-2.083-2.793a2.316 2.316 0 0 1-1.115-1.984v-.667c0-.668.289-1.293.778-1.73a7.661 7.661 0 0 1 .471-1.719c.102-.247.188-.432.257-.582.046-.1.104-.224.112-.259.003-.032-.002-.153-.086-.573a11.18 11.18 0 0 1-.138-.884 1.137 1.137 0 0 1 .279-.885c.448-.5 1.321-.477 1.739.056.076.097.231.255.534.459.512.346 1.208.502 1.937.438.147-.012.297-.018.451-.018 3.896 0 5.183 2.053 5.54 3.951.5.438.794 1.068.794 1.745v.667c0 .826-.431 1.567-1.115 1.984-.418 1.24-1.12 2.178-2.095 2.801L28.55 21.2a3.146 3.146 0 0 1 1.447 1.531l.344.752-.674.479A10.92 10.92 0 0 1 23.302 26c-2.298 0-4.505-.709-6.384-2.052l-.656-.469zM19.5 31c0 .26-.11.52-.29.71-.19.18-.44.29-.71.29s-.53-.11-.71-.3a1.01 1.01 0 0 1-.29-.7c0-.261.11-.521.29-.71.36-.36 1.05-.37 1.42 0 .18.189.29.449.29.71zm-2 5a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1zm5.186 11.766c-.031.918-1.045 1.262-1.707.707l-2.806-2.351c-.99-.83.433-2.237 1.414-1.415l1.241 1.04c.268-2.261 1.005-4.441 3.196-5.582 1.142-.594 2.154 1.132 1.009 1.727-2.17 1.131-2.274 3.707-2.347 5.874zm14.951-1.507c-.246-.337-3.424 1.211-4.333.883-.713-.257-1.248-.585-1.697-1.067-2.122 1.151-4.536 1.774-6.407-.259-.871-.947.539-2.365 1.414-1.414 1.489 1.619 3.34.369 4.756-.5.458-.281 1.106-.109 1.368.359 1.034 1.843 3.535-.242 4.992-.132.773.059 1.209.542 1.632 1.121.764 1.043-.973 2.039-1.725 1.009zm3.573-9.549c-.19.18-.45.29-.71.29-.26 0-.52-.11-.71-.29a.99.99 0 0 1-.29-.71c0-.271.11-.521.29-.71.38-.37 1.04-.37 1.42 0 .18.189.29.449.29.71 0 .27-.1.52-.29.71zm5-.01c-.19.19-.45.3-.71.3-.26 0-.52-.11-.71-.29a.99.99 0 0 1-.29-.71c0-.271.11-.521.29-.71.38-.37 1.04-.37 1.42 0 .18.189.29.449.29.71 0 .26-.1.51-.29.7zM45.5 32h-7a1 1 0 1 1 0-2h7a1 1 0 1 1 0 2zm-8-16V2l14 14h-14z"
						/></svg
					>
				</span>
				<span><Lang p="Hero" w="CTA" /></span>
			</a>
		</div>
	</div>
</section>
