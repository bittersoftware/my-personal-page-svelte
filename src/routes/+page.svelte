<script>
	import Carousel from '$lib/components/Carousel.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Lang from '$lib/Localization/Lang.svelte';

	let images = [
		{
			title: 'Max',
			src: 'images/max.jpeg'
		},
		{
			title: 'Max',
			src: 'images/max.jpeg'
		},
		{
			title: 'Max',
			src: 'images/max.jpeg'
		},
		{
			title: 'Max',
			src: 'images/max.jpeg'
		}
	];
</script>

<Hero />
<section>
	<h3 class="h3 text-center px-8 pt-8 pb-4 sm:text-start sm:pt-10 sm:px-40">
		<Lang p="Projects" w="Projects" />
	</h3>
	<Carousel />
</section>
