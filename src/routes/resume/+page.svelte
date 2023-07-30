<script lang="ts">
	import ResumeJobDescription from '$lib/components/ResumeJobDescription.svelte';
	import type { JobDescription } from '$lib/utils/types';

	const jobDescriptions: JobDescription[] = [
		{
			companyName: 'Warner Bros Discovery',
			imageLogo: 'wbd.jpeg',
			workType: 'Full Time',
			startTime: new Date(2021, 7, 2),
			endTime: undefined,
			position: [
				{
					positionTitle: 'Automation Lead',
					startTime: new Date(2022, 9, 1),
					endTime: undefined,
					location: 'Madrid - Spain',
					description: 'This is what I used to do: <strong> Automation </strong>',
					skills: 'Team lead',
					stack: 'Python, Github'
				},
				{
					positionTitle: 'SDET',
					startTime: new Date(2021, 7, 2),
					endTime: new Date(2022, 1, 30),
					location: 'Madrid - Spain',
					description: 'Second description: <strong> SDET </strong>',
					skills: 'Team work',
					stack: 'Python, Github'
				}
			]
		},
		{
			companyName: 'everis',
			imageLogo: 'everis.png',
			workType: 'Full Time',
			startTime: new Date(2018, 6, 1),
			endTime: new Date(2021, 7, 2),
			position: [
				{
					positionTitle: 'Test Specialist',
					startTime: new Date(2020, 2, 1),
					endTime: new Date(2021, 7, 2),
					location: 'Madrid - Spain',
					description: 'This is what I used to do: <strong> Automation </strong>',
					skills: 'SDET',
					stack: 'Python, Github'
				},
				{
					positionTitle: 'System Specialist',
					startTime: new Date(2018, 6, 1),
					endTime: new Date(2020, 7, 1),
					location: 'Curitiba - Brasil',
					description: 'This is what I used to do: <strong> Automation </strong>',
					skills: 'SDET',
					stack: 'Python, Github'
				}
			]
		}
	];
</script>

<div class="py-4 sm:px-12 sm:py-12">
	<ul>
		{#each jobDescriptions as job}
			<li>
				<ResumeJobDescription jobDescription={job} />
			</li>
			<hr class="py-2" />
		{/each}
	</ul>
</div>
