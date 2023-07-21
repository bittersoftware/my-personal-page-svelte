<script lang="ts">
	import 'flag-icons/css/flag-icons.min.css';
	import { slide } from 'svelte/transition';

	let activeLanguage: string = 'us';
	let showOptions: boolean = false;

	let languages = [
		{
			flag: 'us',
			language: 'English'
		},
		{
			flag: 'es',
			language: 'Español'
		},
		{
			flag: 'br',
			language: 'Português'
		}
	];

	function selectLanguage(flag: string) {
		activeLanguage = flag;
		showOptions = false;
	}

	function toggleOptions() {
		showOptions = !showOptions;
	}
</script>

<div
	class="flex relative justify-center m-2 rounded-full border-2 border-black variant-filled-surface w-10 h-10"
>
	<button type="button" on:click={toggleOptions}>
		<span class="fi fi-{activeLanguage}" />
	</button>

	{#if showOptions}
		<div
			class="
				absolute -left-50 top-12 z-10 py-2 px-4 mr-2 w-auto rounded-md variant-filled-surface
				right-0 sm:left-auto"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="menu-button"
			tabindex="-1"
		>
			<ul transition:slide class="list">
				<li>
					{#each languages as { flag, language }}
						<button
							type="button"
							on:click={() => selectLanguage(flag)}
							class="flex items-center p-2 my-1 rounded-md w-full hover:bg-skin-button-hover"
						>
							<div class="flex justify-center rounded-full border-2 w-10 h-10">
								<span class="fi fi-{flag}" />
							</div>
							<div class="px-2 text-black">
								<span>{language} </span>
							</div>
						</button>
					{/each}
				</li>
			</ul>
		</div>
	{/if}
</div>
