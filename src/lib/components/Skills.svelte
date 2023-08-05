<script>
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
			icon: Beaker,
			title: 'Test Management',
			list: ['Jira', 'TestRail', 'Grafana', 'Confluence', 'TestLink', 'Bugzilla']
		},
		{
			icon: WrenchScrewdriver,
			title: 'Test Tools',
			list: ['stb-tester', 'Selenium', 'adb', 'RedRat', 'Witbe', 'Wireshark']
		},
		{
			icon: BookOpen,
			title: 'Test Libraries',
			list: ['Pytest', 'Pytest-BDD', 'Unittest', 'Gherkin', 'OpenCV', 'Tesseract (OCR)']
		},
		{
			icon: CodeBracketSquare,
			title: 'Coding',
			list: ['Python', 'Javascript', 'bash', 'C#', 'Assembly']
		},
		{
			icon: Tv,
			title: 'Video Delivery',
			list: ['IPTV', 'Multicast (UDP, FCC)', 'VoD (HLS, DASH, SS)', 'DTG', 'ISDB-T']
		},
		{
			icon: CheckBadge,
			title: 'Quality Assurance',
			list: [
				'Manage Test Plans',
				'Requirement Analysis',
				'Test Automation',
				'Performance Test',
				'Stress Test'
			]
		}
	];
</script>

<div class="py-8 sm:px-12 sm:py-4">
	<h2 class="h2 text-center pb-6 sm:px-4 sm:text-start">Skills</h2>
	<div class="flex justify-center">
		<div class="grid grid-cols-2 gap-x-12 sm:gap-x-36 sm:grid-cols-3">
			{#each tooling as tool}
				<div class="my-4">
					<Icon src={tool.icon} class="h-8 w-8 text-surface-500" />
					<h3 class="h6">{tool.title}</h3>
					{#each tool.list as item}
						<p class="h6">{item}</p>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>
