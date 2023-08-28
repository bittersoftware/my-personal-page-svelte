<script lang="ts">
	import lang from '$lib/Localization/Lang';
	import { languages } from '$lib/Localization/Languages';

	export let date: Date | undefined;

	const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
	const formattedDate = (date: Date | undefined, language: string) => {
		let format: string = 'en-US';

		if (language == 'en') {
			format = 'en-US';
		} else if (language == 'es') {
			format = 'es-ES';
		} else if (language == 'br') {
			format = 'pt-BR';
		}

		return date ? date.toLocaleString(format, options) : languages.Resume.Present[language];
	};
</script>

{formattedDate(date, $lang)}
