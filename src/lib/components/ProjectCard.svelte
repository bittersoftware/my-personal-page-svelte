<script lang="ts">
	type Project = {
		name: string;
		image: string;
		description: string;
	};

	export let image: string;
</script>

<!-- Display Container (not part of component) START -->
<div class="mb-4 mx-auto pr-2 sm:mb-10 sm:px-24 lg:px-48">
	<!-- Carousel Body -->
	<div
		class="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl"
		style="min-height: 19rem;"
	>
		<div
			class="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
			style="min-height: 19rem;"
		>
			<img
				class="absolute inset-0 w-full h-full object-cover object-center"
				src={image}
				alt="project logo"
			/>
		</div>
		<div class="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
			<div class="px-4 py-2 sm:p-12 sm::pr-24 sm:pl-16 sm:py-12">
				<h4 class="h4 pb-4 text-black">Max</h4>
				<p class="pb-4 sm:pb-0 text-gray-600">
					<span class="text-gray-900">Missguided</span> is a UK-based fashion retailer that has nearly
					doubled in size since last year. They integrated Stripe to deliver seamless checkout across
					mobile and web for customers in 100+ countries, all while automatically combating fraud.
				</p>
			</div>
			<svg
				class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
			>
				<polygon points="50,0 100,0 50,100 0,100" />
			</svg>
		</div>
	</div>
</div>
