<script lang="ts">
	import ResumeJobDescription from '$lib/components/ResumeJobDescription.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import type { JobDescription } from '$lib/utils/types';

	const jobDescriptions: JobDescription[] = [
		{
			companyName: 'Warner Bros Discovery',
			imageLogo: 'wbd.jpeg',
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
					endTime: new Date(2022, 9, 30),
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
			imageLogo: 'hmv.jpeg',
			startTime: new Date(2012, 5, 1),
			endTime: new Date(2012, 11, 30),
			position: [
				{
					positionTitle: 'Embedded Systems Test Analyst',
					startTime: new Date(2012, 5, 1),
					endTime: new Date(2012, 11, 30),
					location: 'Londrina - Brazil',
					description: 'This is what I used to do: <strong> Automation </strong>',
					projects:
						'Ford: Truck tracker, Ford: Vehicle tracker, Fiat: mirror module, Volkswagen: electric window, Continental: BCU documentation ',
					stack: 'Python, Github'
				}
			]
		},
		{
			companyName: 'Guenka',
			imageLogo: 'guenka.png',
			startTime: new Date(2011, 2, 1),
			endTime: new Date(2011, 11, 31),
			position: [
				{
					positionTitle: 'Test Intern',
					startTime: new Date(2011, 2, 1),
					endTime: new Date(2011, 11, 31),
					location: 'Londria - Brazil',
					description: 'This is what I used to do: <strong> Automation </strong>',
					projects: 'Continental: Vehicle Trackers, Continental: Body Control Unit (BCU)',
					stack: 'Python, Github'
				}
			]
		},
		{
			companyName: 'Eleprojet Engenharia',
			imageLogo: 'eleprojet.jpeg',
			startTime: new Date(2010, 8, 1),
			endTime: new Date(2011, 1, 28),
			position: [
				{
					positionTitle: 'Quality Intern',
					startTime: new Date(2010, 8, 1),
					endTime: new Date(2011, 1, 28),
					location: 'Londria - Brazil',
					description: 'This is what I used to do: <strong> Automation </strong>',
					projects: 'Continental: Vehicle Trackers, Continental: Body Control Unit (BCU)',
					stack: 'Python, Github'
				}
			]
		}
	];
</script>

<div class="py-4 text-center sm:px-16 sm:text-start">
	<h2 class="h2">About</h2>
	<div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
		<div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
			<div class="text-center my-4 sm:my-0 border-r">
				<h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">+10</h6>
				<p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
					Years as QA
				</p>
			</div>
			<div class="text-center my-4 sm:my-0 sm:border-r">
				<h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">+100M</h6>
				<p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
					Users
				</p>
			</div>
			<div class="text-center my-4 sm:my-0 border-r">
				<h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">+60</h6>
				<p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
					Countries
				</p>
			</div>
			<div class="text-center my-4 sm:my-0">
				<h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">+10</h6>
				<p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
					Video Platforms
				</p>
			</div>
		</div>
	</div>
	<div class="justify-center pt-4 gap-x-4 sm:flex">
		<a
			href="/resume"
			type="button"
			class="btn variant-filled-surface h6 font-bold py-2 px-4 rounded
		 inline-flex items-center"
		>
			<span>
				<svg
					class="stroke-white w-8 h-8"
					xml:space="preserve"
					fill="#fff"
					stroke="#fff"
					viewBox="0 0 60 60"
					><path
						d="M38.914 0H6.5v60h47V14.586L38.914 0zM34.5 31a1 1 0 0 1-1 1h-10a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1zm-18.238-7.521.32-.741a3.147 3.147 0 0 1 1.382-1.541l2.204-1.087c-.969-.622-1.667-1.558-2.083-2.793a2.316 2.316 0 0 1-1.115-1.984v-.667c0-.668.289-1.293.778-1.73a7.661 7.661 0 0 1 .471-1.719c.102-.247.188-.432.257-.582.046-.1.104-.224.112-.259.003-.032-.002-.153-.086-.573a11.18 11.18 0 0 1-.138-.884 1.137 1.137 0 0 1 .279-.885c.448-.5 1.321-.477 1.739.056.076.097.231.255.534.459.512.346 1.208.502 1.937.438.147-.012.297-.018.451-.018 3.896 0 5.183 2.053 5.54 3.951.5.438.794 1.068.794 1.745v.667c0 .826-.431 1.567-1.115 1.984-.418 1.24-1.12 2.178-2.095 2.801L28.55 21.2a3.146 3.146 0 0 1 1.447 1.531l.344.752-.674.479A10.92 10.92 0 0 1 23.302 26c-2.298 0-4.505-.709-6.384-2.052l-.656-.469zM19.5 31c0 .26-.11.52-.29.71-.19.18-.44.29-.71.29s-.53-.11-.71-.3a1.01 1.01 0 0 1-.29-.7c0-.261.11-.521.29-.71.36-.36 1.05-.37 1.42 0 .18.189.29.449.29.71zm-2 5a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1zm5.186 11.766c-.031.918-1.045 1.262-1.707.707l-2.806-2.351c-.99-.83.433-2.237 1.414-1.415l1.241 1.04c.268-2.261 1.005-4.441 3.196-5.582 1.142-.594 2.154 1.132 1.009 1.727-2.17 1.131-2.274 3.707-2.347 5.874zm14.951-1.507c-.246-.337-3.424 1.211-4.333.883-.713-.257-1.248-.585-1.697-1.067-2.122 1.151-4.536 1.774-6.407-.259-.871-.947.539-2.365 1.414-1.414 1.489 1.619 3.34.369 4.756-.5.458-.281 1.106-.109 1.368.359 1.034 1.843 3.535-.242 4.992-.132.773.059 1.209.542 1.632 1.121.764 1.043-.973 2.039-1.725 1.009zm3.573-9.549c-.19.18-.45.29-.71.29-.26 0-.52-.11-.71-.29a.99.99 0 0 1-.29-.71c0-.271.11-.521.29-.71.38-.37 1.04-.37 1.42 0 .18.189.29.449.29.71 0 .27-.1.52-.29.71zm5-.01c-.19.19-.45.3-.71.3-.26 0-.52-.11-.71-.29a.99.99 0 0 1-.29-.71c0-.271.11-.521.29-.71.38-.37 1.04-.37 1.42 0 .18.189.29.449.29.71 0 .26-.1.51-.29.7zM45.5 32h-7a1 1 0 1 1 0-2h7a1 1 0 1 1 0 2zm-8-16V2l14 14h-14z"
					/></svg
				>
			</span>
			<span>Download My CV</span>
		</a>
		<a
			href="https://www.linkedin.com/in/leitethiago/?locale=en_US"
			target="_blank"
			type="button"
			class="btn variant-filled-surface h6 font-bold py-2 px-4 rounded
	 inline-flex items-center my-2 sm:my-0"
		>
			<span>
				<svg class="stroke-white w-8 h-8 inline-flex" viewBox="0 0 72 72"
					><g fill="none" fill-rule="evenodd"
						><path
							d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
							fill="#007EBB"
						/><path
							d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
							fill="#FFF"
						/></g
					></svg
				>
				<span class="inline-flex align-middle pl-2">Thiago Bittencourt</span>
			</span></a
		>
	</div>
	<div class="py-4 mx-4">
		<blockquote class="h6">
			I have been working with <strong>Quality Assurance</strong> and testing since 2011. My journey
			began with automotive embedded systems, and later, I transitioned to Telecommunications and
			video engineering. Throughout my career, I have had the opportunity to be part of projects
			<strong> serving millions of end users</strong>, contributing to the delivery of top-quality
			experiences in pay-TV, on-demand, and streaming services. Originally from Brazil, I am
			currently residing in Madrid, Spain, where I lead an automation team dedicated to delivering
			products of excellence. I am fluent in <strong>Portuguese, Spanish, and English</strong>. If
			you'd like to connect, please feel free to reach out to me on LinkedIn or explore more about
			me below.
		</blockquote>
	</div>
</div>
<Skills />
<div class=" sm:px-12 sm:py-2">
	<h2 class="h2 text-center pb-6 sm:px-4 sm:text-start">Experience</h2>
	<ul>
		{#each jobDescriptions as job}
			<li>
				<ResumeJobDescription jobDescription={job} />
			</li>
			<hr class="py-2" />
		{/each}
	</ul>
</div>
