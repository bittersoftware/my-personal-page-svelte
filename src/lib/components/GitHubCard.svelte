<script lang="ts">
	import type { GitHubProject } from '$lib/utils/types';
	import { Avatar } from '@skeletonlabs/skeleton';
	export let gitHubProject: GitHubProject;
</script>

<div class="drop-shadow-md px-6 hover:scale-105 transition duration-200">
	<a class="card card-hover overflow-hidden" href={gitHubProject.url} target="_blank">
		<header>
			<img
				src={gitHubProject.image}
				width="400"
				height="175"
				class="bg-black/50 w-full aspect-[21/9]"
				alt="Post"
			/>
		</header>
		<div class="p-4 space-y-4 variant-soft-surface">
			<h3 class="h3" data-toc-ignore>{gitHubProject.name}</h3>
			<article class="min-h-[24]">
				<p>
					{gitHubProject.description}
				</p>
			</article>
		</div>
		<hr class="bg-surface-500 dark:opacity-50" />
		<footer class="p-4 flex justify-start items-center space-x-4 variant-soft-surface">
			<Avatar src={gitHubProject.avatar} width="w-8" />
			<div class="flex-auto flex justify-between items-center">
				<h6 class="font-bold" data-toc-ignore>By <span>{gitHubProject.author}</span></h6>
				<small>On {new Date().toLocaleDateString()}</small>
			</div>
		</footer>
	</a>
</div>
