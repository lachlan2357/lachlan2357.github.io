<script setup lang="ts">
    import type { ChipData, DisplayLink } from "@/types";
    import DataChip from "./DataChip.vue";

    const props = defineProps<{ items: Array<string | DisplayLink>; justify?: string }>();
    const map: Array<ChipData> = props.items.map((item) => {
        if (typeof item == "string") return { name: item };
        else return { name: item.name, url: item.url };
    });
</script>

<template>
    <div class="horizontal" :style="{ justifyContent: justify ?? 'left' }">
        <DataChip v-for="item in map" :key="item.name" :data="item" />
    </div>
</template>
