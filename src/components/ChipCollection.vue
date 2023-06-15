<script setup lang="ts">
    import type { ChipData, DisplayLink } from "@/types";
    import DataChip from "./DataChip.vue";

    const props = defineProps<{ items: Array<string | DisplayLink>; justify?: string }>();

    const isExternalUrl = (url: string) => url[0] !== "/";

    const map: Array<ChipData> = props.items.map((item) => {
        const isString = typeof item === "string";
        const data: ChipData = {
            name: isString ? item : item.name,
            external: false,
            url: undefined
        };

        if (!isString) {
            data.url = item.url;
            data.external = isExternalUrl(data.url);
        }

        return data;
    });
</script>

<template>
    <div class="horizontal" :style="{ justifyContent: justify ?? 'left' }">
        <DataChip v-for="item in map" :key="item.name" :data="item" />
    </div>
</template>
