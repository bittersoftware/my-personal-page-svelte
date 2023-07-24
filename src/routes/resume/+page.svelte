Resume
<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css" />
</svelte:head>

<section>
	<div class="mb-5 flex items-start">
		<img
			src="images/max.png"
			alt="Avatar"
			class="h-14 w-14 shrink-0 rounded-xl border-2 border-gray-50 shadow-sm dark:border-night-700"
		/>
		<div class="ml-3 w-full space-y-5">
			<div class="justify-between sm:flex">
				<div class="space-y-2">
					<div class="font-medium dark:text-night-50">JOB</div>
					<div class="space-y-1 sm:flex sm:space-x-5">
						<div
							class="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-night-400"
						>
							<i class="mi mi-add"><span class="u-sr-only h-4 w-4 shrink-0">Add</span></i>
							<span>COMPANY</span>
						</div>
						<div
							class="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-night-400"
						>
							<i class="mi mi-add"><span class="u-sr-only h-4 w-4 shrink-0">Add</span></i>
							<span>LOCATION</span>
						</div>
					</div>
				</div>
				<div class="flex items-start justify-between space-y-1 sm:block sm:text-right">
					<div
						class="order-last inline-flex items-center rounded-lg bg-primary-500/20 px-2 py-1 text-xs font-medium text-primary-500"
					>
						WORKTYPE
					</div>
					<div
						class="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-night-400"
					>
						<i class="mi mi-add"><span class="u-sr-only h-4 w-4 shrink-0">Add</span></i>
						<span>START - END</span>
					</div>
				</div>
			</div>
			<p class="text-sm text-gray-600 dark:text-night-300">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae tortor
				ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas suscipit.
			</p>
			<div class="border-b border-dashed border-gray-200 dark:border-night-600" />
		</div>
	</div>
</section>
