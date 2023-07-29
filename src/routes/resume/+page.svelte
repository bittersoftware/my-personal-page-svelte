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
		}
		// {
		// 	companyName: 'everis',
		// 	imageLogo: 'everis.png',
		// 	workType: 'Full Time',
		// 	startTime: new Date(2020, 2, 1),
		// 	endTime: new Date(2021, 7, 2),
		// 	position: [
		// 		{
		// 			positionTitle: 'Test Specialist',
		// 			startTime: new Date(2020, 2, 1),
		// 			endTime: new Date(2021, 7, 2),
		// 			location: 'Madrid - Spain',
		// 			description: 'This is what I used to do: <strong> Automation </strong>',
		// 			skills: 'SDET',
		// 			stack: 'Python, Github'
		// 		}
		// 	]
		// }
	];
</script>

<ul>
	{#each jobDescriptions as job}
		<li>
			<ResumeJobDescription jobDescription={job} />
		</li>
	{/each}
</ul>

<!-- <div>
	<div class="flex">
		<div class="col-1 px-4">
			<div class="w-14">
				<img class="h-14" src="images/company/wbd.jpeg" alt="wbd logo" />
			</div>
		</div>
		<div class="col-2 h-14">
			<div class="mb-4">
				<h4 class="text-xl">Warner Bros Discovery</h4>
				<p>Full Time 2y</p>
			</div>
			<div class="">
				<ul>
					<li>
						<div class="relative">
							<span class="-left-[45px] absolute w-0.5 bg-surface-500 h-full mt-6" />
							<span class="-left-12 top-4 relative block rounded-full h-2 w-2 bg-surface-500" />
							<p class=" font-bold text-lg">Automation Lead</p>
							<div class="pb-2">
								<p class="text-gray-500">Oct 22 - Present · 10 months</p>
								<div class="flex">
									<svg
										class="flex-none w-6 h-6 fill-surface-500 stroke-none"
										viewBox="4 0 24 24"
										fill="none"
										><g id="SVGRepo_bgCarrier" stroke-width="0" /><g /><g id="SVGRepo_iconCarrier">
											<path
												d="M12 2C7.58172 2 4 6.00258 4 10.5C4 14.9622 6.55332 19.8124 10.5371 21.6744C11.4657 22.1085 12.5343 22.1085 13.4629 21.6744C17.4467 19.8124 20 14.9622 20 10.5C20 6.00258 16.4183 2 12 2Z"
											/>
											<path
												d="M12 12.5C13.3807 12.5 14.5 11.3807 14.5 10C14.5 8.61929 13.3807 7.5 12 7.5C10.6193 7.5 9.5 8.61929 9.5 10C9.5 11.3807 10.6193 12.5 12 12.5Z"
												fill="#fff"
											/>
										</g></svg
									>
									<p class="text-gray-500">Madrid, Spain</p>
								</div>
							</div>
							<p class="py-2">
								Automação de testes no projeto HBO Max <br />
								- stb-tester: OpenCV, Tesseract, Page Object Model <br />
								- Dispositivos: Sagemcom, Comcast, Nvidia Shield, Roku Stick
							</p>
							<div class="pb-4">
								<p><strong>Skills: </strong>Team lead</p>
								<p><strong>Tech Stack: </strong>Python, Open CV, Github Actions</p>
							</div>
						</div>
					</li>
					<li>
						<span class="-left-12 top-4 relative block rounded-full h-2 w-2 bg-gray-500" />
						<p class="font-bold">Automation Lead</p>
						<p class="text-gray-500">Oct 22 - Present · 10 months</p>
						<p class="text-gray-500">Madrid, Spain</p>
						<p>
							Automação de testes no projeto HBO Max <br />
							- stb-tester: OpenCV, Tesseract, Page Object Model <br />
							- Dispositivos: Sagemcom, Comcast, Nvidia Shield, Roku Stick
						</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div> -->
