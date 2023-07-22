<script lang="ts">
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

	function closeDropDown(event: Event) {
		showOptions = false;
	}

	function clickOutside(node: HTMLElement, ignore?: string) {
		const handleClick = (event: Event) => {
			const target = event.target as HTMLElement;
			if (!event.target || (ignore && target.closest(ignore))) {
				return;
			}
			if (node && !node.contains(target) && !event.defaultPrevented) {
				node.dispatchEvent(new CustomEvent('click_outside'));
			}
		};

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}
</script>

<div
	use:clickOutside={'#language-dropdown'}
	on:click_outside={closeDropDown}
	class="sm:flex sm:relative sm:justify-center sm:m-2 sm:rounded-full sm:bg-surface-100-800-token sm:border
            sm:border-surface-300-600-token sm:w-10 sm:h-10"
>
	<button class="hidden sm:block" type="button" on:click={toggleOptions}>
		<img
			src="https://hatscripts.github.io/circle-flags/flags/{activeLanguage}.svg"
			alt="active language"
			width="48"
		/>
	</button>
	<button
		type="button"
		on:click={toggleOptions}
		class="fixed z-90 bottom-8 right-8 w-12 h-12 rounded-full flex justify-center items-center
         bg-surface-100-800-token border-2 border-surface-300-600-tokenl sm:hidden"
	>
		<img
			src="https://hatscripts.github.io/circle-flags/flags/{activeLanguage}.svg"
			alt="active language"
			width="48"
		/>
	</button>

	{#if showOptions}
		<div
			class="
				absolute -left-50 bottom-24 z-10 py-2 px-4 mr-6 w-auto rounded-md bg-surface-200-700-token
				right-0 sm:left-auto sm:bottom-auto sm:top-12 sm:mr-2"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="menu-button"
			tabindex="-1"
		>
			<ul transition:slide class="list">
				{#each languages as { flag, language }}
					<li>
						<button
							type="button"
							on:click={() => selectLanguage(flag)}
							class="flex items-center p-2 my-1 rounded-md w-full hover:variant-glass-primary"
						>
							<div
								class="flex justify-center rounded-full w-10 h-10 border-2 border-surface-300-600-token"
							>
								<img
									src="https://hatscripts.github.io/circle-flags/flags/{flag}.svg"
									alt="flag"
									width="48"
								/>
							</div>
							<div class="px-2 flex-auto">
								<span>{language} </span>
							</div>
						</button>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
