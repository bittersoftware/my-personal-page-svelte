<script lang="ts">
	import GitHubCard from '$lib/components/GitHubCard.svelte';
	import SocialNetworks from '$lib/components/SocialNetworks.svelte';
	import { youTubeVideos } from '$lib/data/youTubeVideos';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="pt-6">
	<h2 class="h2 text-center pb-4">Let's Connect</h2>
	<SocialNetworks />
</section>

<section class="pt-12 sm:px-6">
	<h2 class="h2 text-center mb-4">GitHub Projects</h2>
	<div class="block sm:pb-0 sm:grid sm:grid-cols-3">
		{#each data.projects as ghProject}
			<div class="pb-6 sm:pb-0">
				<GitHubCard gitHubProject={ghProject} />
			</div>
		{/each}
	</div>
</section>

<section class="pt-12 pb-8 px-12">
	<h2 class="h2 text-center mb-6">My YouTube Videos</h2>
	<div class="grid columns-1 gap-y-4 sm:flex sm:gap-x-4 justify-center">
		{#each youTubeVideos as ytVideo}
			<iframe
				title="youtube"
				class="aspect-video sm:w-4/12 hover:scale-105 transition duration-200"
				src={ytVideo.url + ytVideo.index}
				frameborder="0"
			></iframe>
		{/each}
	</div>
</section>
