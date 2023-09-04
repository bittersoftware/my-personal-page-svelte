<script lang="ts">
	import Lang from '$lib/Localization/Lang.svelte';
	import type { Project } from '$lib/utils/types';

	export let project: Project;
</script>

<div class="mb-6 mx-auto pr-2 sm:mb-10 lg:px-12 xl:px-48">
	<!-- Carousel Body -->
	<div
		class="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl"
		style="min-height: 19rem;"
	>
		<div
			class="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
			style="min-height: 19rem;"
		>
			<img
				class="absolute inset-0 w-full h-full p-1 sm:p-0 object-cover object-center"
				src={project.image}
				alt="project logo"
			/>
		</div>
		<div class="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
			<div class="px-4 py-2 sm:p-12 sm:pl-16 sm:py-12">
				<h4 class="h4 pb-4 text-black">{project.name}</h4>
				<p class="pb-4 sm:pb-0 text-gray-500"><Lang p="Projects" w={project.description} /></p>
			</div>
			<svg
				class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
			>
				<polygon points="50,0 100,0 50,100 0,100" />
			</svg>
		</div>
	</div>
</div>
