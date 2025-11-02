<script setup lang="ts">
    import { RouterView, useRoute, useRouter } from "vue-router";
    import NavBar from "@/components/NavBar.vue";
    import PageHeader from "@/components/PageHeader.vue";
    import PageFooter from "./components/PageFooter.vue";
    import { useScrollPos } from "./stores/scroll";
    import { onMounted, watch, watchEffect } from "vue";

    const route = useRoute();
    const router = useRouter();

    const scrollPos = useScrollPos();

    window.addEventListener("scroll", () =>
        scrollPos.setTop(document.documentElement.scrollTop ?? 0)
    );

    // handle redirects
    watchEffect(() => {
        // get query param
        const query = route.query;
        const redirect = query.redirect;
        if (!redirect) return;

        // push to router
        router.push(redirect.toString());
    });
</script>

<template>
    <NavBar />
    <PageHeader />

    <main class="container">
        <RouterView />
    </main>

    <PageFooter />
</template>
