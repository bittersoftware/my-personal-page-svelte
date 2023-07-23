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
<div class="flex justify-center sm:px-32 sm:py-16">
	<Carousel />
</div>
