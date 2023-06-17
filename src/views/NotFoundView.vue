<script setup lang="ts">
    import ChipCollection from "@/components/ChipCollection.vue";
    import { useRoute } from "vue-router";

    const route = useRoute();
    const path = route.path;

    const links = [
        { name: "Home", url: "/" },
        {
            name: "Report an Issue",
            url: "https://github.com/lachlan2357/lachlan2357.github.io/issues"
        }
    ];
</script>

<template>
    <h2>Slow down, speed racer!</h2>
    <p>You're not supposed to be here! The page {{ path }} doesn't exist.</p>
    <ChipCollection :items="links" />
</template>
