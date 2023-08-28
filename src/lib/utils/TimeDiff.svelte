<script lang="ts">
	import lang from '$lib/Localization/Lang';
	import { getTimeDifference } from './timeDifference';

	export let start_time: Date;
	export let end_time: Date | undefined;
</script>

{getTimeDifference(start_time, end_time, $lang)}
