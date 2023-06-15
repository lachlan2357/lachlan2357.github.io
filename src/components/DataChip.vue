<script setup lang="ts">
    import type { ChipData } from "@/types";
    import { colour } from "@/types/supplements";
    import { RouterLink } from "vue-router";

    const props = defineProps<{ data: ChipData }>();

    const c = "chip coloured";
    const s = colour(props.data.name);
</script>

<template>
    <a v-if="data.external" :class="c" :href="data.url" :style="s">
        {{ data.name }}
        <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
    </a>
    <RouterLink v-else-if="data.url" :to="data.url" :class="c" :style="s">
        {{ data.name }}
        <FontAwesomeIcon icon="fa-solid fa-link" />
    </RouterLink>
    <span v-else :class="c" :style="s">
        {{ data.name }}
    </span>
</template>
