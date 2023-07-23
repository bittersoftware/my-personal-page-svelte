<script>
	import ProjectCard from './ProjectCard.svelte';

	const slides = [
		{
			url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80'
		},
		{
			url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
		},
		{
			url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80'
		},

		{
			url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80'
		},
		{
			url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80'
		}
	];

	let index = 0;
	let stopAutoSlide = false;

	function nextSlideClick() {
		stopAutoSlide = true;
		nextSlide();
	}

	function previousSlideClick() {
		index = index === 0 ? slides.length - 1 : index - 1;
		stopAutoSlide = true;
	}

	function nextSlide() {
		index = index === slides.length - 1 ? 0 : index + 1;
	}

	/**
	 * @type {string | number | NodeJS.Timeout | undefined}
	 */
	let clear;

	$: {
		if (stopAutoSlide) {
			clearInterval(clear);
		} else {
			clearInterval(clear);
			clear = setInterval(nextSlide, 3000);
		}
	}
</script>

<div class="hidden sm:block sm:overflow-hidden sm:relative">
	<div
		class="flex transition-transform ease-out duration-300"
		style="transform: translateX(-{index * 100}%)"
	>
		{#each slides as slide}
			<div class="flex-shrink-0 w-screen">
				<ProjectCard />
			</div>
		{/each}
	</div>
	<div class="absolute inset-0 flex items-center justify-between p-4">
		<button on:click={previousSlideClick} class="p-1 rounded-full shadows w-12 h-12 bg-white">
			<svg fill="none" viewBox="0 0 24 24"
				><path
					fill="#0F0F0F"
					d="M16.18 3.269a1 1 0 0 0-1.415 0L8.121 9.913a3 3 0 0 0-.001 4.242l6.57 6.575a1 1 0 1 0 1.415-1.414l-6.573-6.572a1 1 0 0 1 0-1.414l6.648-6.647a1 1 0 0 0 0-1.414Z"
				/></svg
			>
		</button>
		<button on:click={nextSlideClick} class="p-1 rounded-full shadows w-12 h-12 bg-white">
			<svg fill="none" viewBox="0 0 24 24"
				><path
					fill="#0F0F0F"
					d="M16.18 3.269a1 1 0 0 0-1.415 0L8.121 9.913a3 3 0 0 0-.001 4.242l6.57 6.575a1 1 0 1 0 1.415-1.414l-6.573-6.572a1 1 0 0 1 0-1.414l6.648-6.647a1 1 0 0 0 0-1.414Z"
				/></svg
			>
		</button>
	</div>

	<div class="absolute bottom-4 right-0 left-0">
		<div class="flex items-center justify-center gap-2">
			{#each slides as slide, i}
				<div
					class="transition-all w-3 h-3 bg-white rounded-full {index === i
						? 'p-2'
						: 'bg-opacity-50'}"
				/>
			{/each}
		</div>
	</div>
</div>

<div class="sm:hidden">
	{#each slides as slide}
		<div class="ml-2">
			<ProjectCard />
		</div>
	{/each}
</div>
