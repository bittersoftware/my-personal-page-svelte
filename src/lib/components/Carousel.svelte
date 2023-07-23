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

<div class="hidden sm:pb-4 sm:block sm:overflow-hidden sm:relative">
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
	<div class="absolute inset-0 flex items-center justify-between px-12">
		<button
			on:click={previousSlideClick}
			class="p-1 rounded-full shadows w-12 h-12 btn-icon bg-surface-300-600-token"
		>
			<a href="#slide2" class="flex btn btn-circle">❮</a>
		</button>
		<button
			on:click={nextSlideClick}
			class="p-1 rounded-full shadows w-12 h-12 btn-icon bg-surface-300-600-token"
		>
			<a href="#slide2" class="flex btn btn-circle">❯</a>
		</button>
	</div>

	<div class="absolute bottom-4 right-0 left-0">
		<div class="flex items-center justify-center gap-2">
			{#each slides as slide, i}
				<div
					class="transition-all w-3 h-3 bg-surface-400-500-token rounded-full {index === i
						? 'p-2'
						: 'opacity-50'}"
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
