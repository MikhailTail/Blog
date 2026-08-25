
import {VPBTheme} from "../../../src/theme/index.js";
import {watchEffect} from "vue";
import {inBrowser, useData} from "vitepress";

export default {
    extends: VPBTheme,
    enhanceApp({app}) {
    },
    setup() {
        const { lang } = useData();
        watchEffect(() => {
            if (inBrowser) {
                document.cookie = `nf_lang=${encodeURIComponent(lang.value)}; max-age=31536000; path=/; SameSite=Lax`;
            }
        });
    }
};
