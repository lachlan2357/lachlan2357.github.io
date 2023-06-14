<script setup lang="ts">
    import { RouterView } from "vue-router";
    import NavBar from "@/components/NavBar.vue";
    import PageHeader from "@/components/PageHeader.vue";
    import PageFooter from "./components/PageFooter.vue";
    import { useScrollPos } from "./stores/scroll";

    const scrollPos = useScrollPos();

    window.addEventListener("scroll", () =>
        scrollPos.setTop(document.documentElement.scrollTop ?? 0)
    );
</script>

<template>
    <NavBar />
    <PageHeader />

    <main class="container">
        <RouterView />
    </main>

    <PageFooter />
</template>
