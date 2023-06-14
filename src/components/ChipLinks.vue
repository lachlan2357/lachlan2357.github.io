<script setup lang="ts">
    import type { DisplayLink } from "@/types";
    import { colour } from "@/types/supplements";

    defineProps<{ links: Array<DisplayLink> }>();
</script>

<template>
    <div class="horizontal">
        <a
            v-for="link in links"
            :key="link.name"
            :href="link.url"
            class="chip coloured"
            :style="colour(link.name)"
        >
            {{ link.name }}
            <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
        </a>
    </div>
</template>
