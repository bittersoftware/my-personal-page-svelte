<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	// import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	// import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import Navbar from '$lib/components/Navbar.svelte';
	import { AppShell, autoModeWatcher } from '@skeletonlabs/skeleton';
	import { fly } from 'svelte/transition';
	import '../app.postcss';
	export let data;
</script>

<svelte:head
	>{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}</svelte:head
>

<AppShell>
	<svelte:fragment slot="header">
		<Navbar />
	</svelte:fragment>
	{#key data.url}
		<div in:fly={{ x: -200, duration: 200, delay: 200 }} out:fly={{ x: 200, duration: 200 }}>
			<slot />
		</div>
	{/key}
	<!-- (pageFooter) -->
	<!-- <svelte:fragment slot="footer"><span class="hidden sm:block">footer</span></svelte:fragment> -->
</AppShell>
