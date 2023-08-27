<script>
	import Lang from '$lib/Localization/Lang.svelte';
	import {
		Beaker,
		BookOpen,
		CheckBadge,
		CodeBracketSquare,
		Icon,
		Tv,
		WrenchScrewdriver
	} from 'svelte-hero-icons';

	const tooling = [
		{
			icon: CheckBadge,
			title: 'QualityAssurance',
			list: 'QualityAssuranceList'
		},
		{
			icon: Beaker,
			title: 'TestManagement',
			list: 'TestManagementList'
		},
		{
			icon: WrenchScrewdriver,
			title: 'TestTools',
			list: 'TestToolsList'
		},
		{
			icon: BookOpen,
			title: 'TestLibs',
			list: 'TestLibsList'
		},
		{
			icon: CodeBracketSquare,
			title: 'Coding',
			list: 'CodingList'
		},
		{
			icon: Tv,
			title: 'VideoDelivery',
			list: 'VideoDeliveryList'
		}
	];
</script>

<div class="px-8 sm:px-16 sm:pb-8">
	<h2 class="h2 text-center pb-6 sm:px-0 sm:text-start"><Lang p="Resume" w="Skills" /></h2>
	<div class="grid grid-cols-2 gap-x-12 sm:flex sm:px-12 sm:gap-x-20 sm:flex-nowrap">
		{#each tooling as tool}
			<div class="my-4">
				<Icon src={tool.icon} class="h-8 w-8 text-surface-500" />
				<h3 class="h6 py-2"><Lang p="Resume" w={tool.title} /></h3>
				<p class="h6"><Lang p="Resume" w={tool.list} /></p>
			</div>
		{/each}
	</div>
</div>
