<script lang="ts">
	import lang from './Lang';
	import { languages } from './Languages';

	export let p: string;
	export let w: string;
</script>

{languages[p][w][$lang]}
