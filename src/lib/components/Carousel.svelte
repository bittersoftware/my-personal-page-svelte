<script lang="ts">
	import type { Project } from '$lib/utils/types';
	import ProjectCard from './ProjectCard.svelte';
	const projects: Project[] = [
		{
			name: 'Max',
			image: 'images/projects/max.png',
			description: 'Max'
		},
		{
			name: 'HBO Max',
			image: 'images/projects/hbo_max.png',
			description: 'HBOMax'
		},
		{
			name: 'Rakuten Living Apps',
			image: 'images/projects/rakuten.png',
			description: 'Rakuten'
		},

		{
			name: 'Vivo Play TV',
			image: 'images/projects/vivo_play.png',
			description: 'Vivo'
		},
		{
			name: 'Entel',
			image: 'images/projects/entel.png',
			description: 'Entel'
		}
	];

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
	<div
		class="flex transition-transform ease-out duration-300"
		style="transform: translateX(-{index * 100}%)"
	>
		{#each projects as project}
			<div class="flex-shrink-0 w-screen">
				<ProjectCard {project} />
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
