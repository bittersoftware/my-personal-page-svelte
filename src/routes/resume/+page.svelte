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
					projects: 'Max',
					stack: 'Python, Github'
				},
				{
					positionTitle: 'SDET',
					startTime: new Date(2021, 7, 2),
					endTime: new Date(2022, 1, 28),
					location: 'Madrid - Spain',
					description: 'Second description: <strong> SDET </strong>',
					projects: 'HBO Max',
					stack: 'Python, Github'
				}
			]
		},
		{
			companyName: 'everis',
			imageLogo: 'everis.png',
			workType: 'Full Time',
			startTime: new Date(2018, 6, 1),
			endTime: new Date(2021, 7, 31),
			position: [
				{
					positionTitle: 'Test Specialist',
					startTime: new Date(2020, 2, 1),
					endTime: new Date(2021, 7, 31),
					location: 'Madrid - Spain',
					description: 'This is what I used to do: <strong> Automation </strong>',
					projects: 'Rakuten - Telefonica Living Apps',
					stack: 'Python, Github'
				},
				{
					positionTitle: 'System Specialist',
					startTime: new Date(2018, 6, 1),
					endTime: new Date(2020, 7, 30),
					location: 'Curitiba - Brasil',
					description: 'This is what I used to do: <strong> Automation </strong>',
					projects: 'Vivo Play IPTV  (Global Video Platform for Latam)',
					stack: 'Python, Github'
				}
			]
		},
		{
			companyName: 'Sagemcom',
			imageLogo: 'sagemcom.png',
			workType: 'Full Time',
			startTime: new Date(2014, 9, 1),
			endTime: new Date(2018, 5, 30),
			position: [
				{
					positionTitle: 'Test Specialist',
					startTime: new Date(2014, 9, 1),
					endTime: new Date(2018, 5, 30),
					location: 'Madrid - Spain',
					description: 'This is what I used to do: <strong> Automation </strong>',
					projects: 'Net (Brazil)',
					stack: 'Python, Github'
				}
			]
		},
		{
			companyName: 'Guenka',
			imageLogo: 'guenka.png',
			workType: 'Full Time',
			startTime: new Date(2013, 2, 1),
			endTime: new Date(2014, 9, 31),
			position: [
				{
					positionTitle: 'Embedded Systems Test Analyst',
					startTime: new Date(2013, 2, 1),
					endTime: new Date(2014, 9, 31),
					location: 'Londria - Brazil',
					description: 'This is what I used to do: <strong> Automation </strong>',
					projects:
						'Ford: Truck tracker, Ford: Vehicle tracker, Fiat: mirror module, Volkswagen: electric window, Continental: BCU documentation ',
					stack: 'Python, Github'
				}
			]
		},
		{
			companyName: 'HMV Ingenieros',
			imageLogo: 'guenka.png',
			workType: 'Full Time',
			startTime: new Date(2012, 5, 1),
			endTime: new Date(2012, 11, 30),
			position: [
				{
					positionTitle: 'Embedded Systems Test Analyst',
					startTime: new Date(2013, 2, 1),
					endTime: new Date(2014, 9, 1),
					location: 'Londria - Brazil',
					description: 'This is what I used to do: <strong> Automation </strong>',
					projects:
						'Ford: Truck tracker, Ford: Vehicle tracker, Fiat: mirror module, Volkswagen: electric window, Continental: BCU documentation ',
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
