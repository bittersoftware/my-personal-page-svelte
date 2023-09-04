<script lang="ts">
	import { projects } from '$lib/data/carrouselProject';
	import ProjectCard from './ProjectCard.svelte';

	let index = 0;
	let stopAutoSlide = false;

	function nextSlideClick() {
		stopAutoSlide = true;
		nextSlide();
	}

	function previousSlideClick() {
		index = index === 0 ? projects.length - 1 : index - 1;
		stopAutoSlide = true;
	}

	function nextSlide() {
		index = index === projects.length - 1 ? 0 : index + 1;
	}

	let clear: string | number | NodeJS.Timeout | undefined;

	$: {
		if (stopAutoSlide) {
			clearInterval(clear);
		} else {
			clearInterval(clear);
			clear = setInterval(nextSlide, 6000);
		}
	}
</script>

<div class="hidden sm:pb-4 sm:block sm:overflow-hidden sm:relative">
	<!-- Magic numbers to avoid horizontal displacement when nav to next project cards -->
	<div
		class="flex transition-transform ease-out duration-300"
		style="transform: translateX(-{index * (100 + index * 0.15)}%)"
	>
		{#each projects as project}
			<div class="flex-shrink-0 w-screen">
				<ProjectCard {project} />
			</div>
		{/each}
	</div>
	<div class="absolute inset-0 flex items-center justify-between sm:px-2 xl:px-24">
		<button
			on:click={previousSlideClick}
			class="p-1 rounded-full shadows w-12 h-12 btn-icon bg-surface-300-600-token"
		>
			<a href="#slide1" class="flex btn btn-circle">❮</a>
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
			{#each projects as project, i}
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
	{#each projects as project}
		<div class="ml-2">
			<ProjectCard {project} />
		</div>
	{/each}
</div>
