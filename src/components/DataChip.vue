<script setup lang="ts">
    import type { ChipData } from "@/types";
    import { colour } from "@/types/supplements";

    defineProps<{ data: ChipData }>();
</script>

<template>
    <a v-if="data.url" class="chip coloured" :href="data.url" :style="colour(data.name)">
        {{ data.name }}
        <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
    </a>
    <span v-else class="chip coloured" :style="colour(data.name)">
        {{ data.name }}
    </span>
</template>
