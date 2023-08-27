import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

const linkedinLanguageStore: Writable<string> = writable("en_US");

const linkedinLang = {
    subscribe: linkedinLanguageStore.subscribe,
    set: (language: string) => {
        if (language == "us") {
            linkedinLanguageStore.set("en_US");
        }
        else if (language == "es") {
            linkedinLanguageStore.set("es_ES");
        }
        else if (language == "br") {
            linkedinLanguageStore.set("pt_BR");
        }
    },
};


export default linkedinLang;
