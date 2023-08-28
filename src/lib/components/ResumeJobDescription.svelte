<script lang="ts">
	import Lang from '$lib/Localization/Lang.svelte';
	import TimeDiff from '$lib/utils/TimeDiff.svelte';
	import FormatDate from '$lib/utils/formatDate.svelte';
	import type { JobDescription } from '$lib/utils/types';

	export let jobDescription: JobDescription;
	const positions = jobDescription.position.length;
	const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
</script>

<div class="flex">
	<div class="col-1 px-4">
		<div class="grow-0 w-14">
			<img
				class="w-14 h-14"
				src="images/company/{jobDescription.imageLogo}"
				alt="{jobDescription.companyName} logo"
			/>
		</div>
	</div>
	<div class="col-2">
		<div class="mb-4">
			<h4 class="text-xl">{jobDescription.companyName}</h4>
			<p>
				<TimeDiff start_time={jobDescription.startTime} end_time={jobDescription.endTime} />
			</p>
		</div>
		<div class="">
			<ul>
				{#each jobDescription.position as position, index}
					<li>
						<div class="relative">
							{#if index != positions - 1}
								<span class="-left-[45px] absolute w-0.5 bg-surface-500 h-full mt-6" />
							{/if}
							{#if positions > 1}
								<span class="-left-12 top-4 relative block rounded-full h-2 w-2 bg-surface-500" />
							{/if}
							<p class="font-bold text-lg">{position.positionTitle}</p>
							<div class="pb-2">
								<div class="block sm:flex">
									<p class="text-gray-500">
										<FormatDate date={position.startTime} /> -
										<FormatDate date={position.endTime} />
										<!-- {formattedDate(position.startTime)} - {formattedDate(position.endTime)} -->
									</p>
									{#if positions != 1}
										<p class="hidden sm:block sm:px-2">·</p>
										<p class="text-gray-500">
											<TimeDiff start_time={position.startTime} end_time={position.endTime} />
										</p>
									{/if}
								</div>
								<div class="flex">
									<svg
										class="flex-none w-5 h-5 fill-surface-500 stroke-none"
										viewBox="4 -2 24 24"
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
									<p class="text-gray-500">{position.location}</p>
								</div>
							</div>
							<p class="py-2"><Lang p="Resume" w={position.description} /></p>
							<div class="pb-4">
								<p><strong>Projects: </strong>{position.projects}</p>
								<p><strong>Tech Stack: </strong>{position.stack}</p>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
