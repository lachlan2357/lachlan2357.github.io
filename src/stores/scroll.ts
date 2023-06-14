import { defineStore } from "pinia";
import { ref } from "vue";

export const useScrollPos = defineStore("navbar", () => {
    const isTop = ref(true);
    const setTop = (scrollY: number) => (isTop.value = scrollY == 0);

    setTop(document.documentElement.scrollTop);

    return { isTop, setTop };
});
