import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

const languageStore: Writable<string> = writable("us");

const lang = {
    subscribe: languageStore.subscribe,
    set: (language: string) => {
        languageStore.set(language);
    },
};

export default lang;
