<script>
	import Carousel from '$lib/components/Carousel.svelte';
	import Hero from '$lib/components/Hero.svelte';

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
	<h3 class="h3 px-8 pb-4 sm:pt-10 sm:px-40">Projects</h3>
	<Carousel />
</section>
