<script>
	import Lang from '$lib/Localization/Lang.svelte';
	import { tooling } from '$lib/data/skills';
	import { Icon } from 'svelte-hero-icons';
</script>

<div class="px-4 sm:px-16 sm:pb-8">
	<h2 class="h2 text-center pb-2 sm:px-0 sm:text-start"><Lang p="Resume" w="Skills" /></h2>
	<div
		class="border drop-shadow rounded-lg sm:flex sm:px-0 sm:flex-nowrap sm:justify-center dark:border-surface-700 dark:to-surface-700 dark:via-surface-800 dark:from-surface-800 transition-all duration-500 bg-gradient-to-br to-gray-200 via-gray-100 from-gray-50 bg-size-200 hover:bg-right-bottom"
	>
		{#each tooling as tool}
			<div class="group my-4 sm:w-auto px-10 pb-4 sm:pb-0">
				<div class="flex w-full justify-center">
					<Icon src={tool.icon} class="object-center  h-8 w-8 text-surface-500" />
				</div>
				<h3 class="h5 text-center font-medium py-2 group-hover:scale-125 transition duration-200">
					<Lang p="Resume" w={tool.title} />
				</h3>
				<p class="font-light text-center"><Lang p="Resume" w={tool.list} /></p>
			</div>
		{/each}
	</div>
</div>
