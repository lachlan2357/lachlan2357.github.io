<script setup lang="ts">
    import type { Project } from "@/types";
    import { useRouter } from "vue-router";

    defineProps<{ project: Project }>();
    const router = useRouter();

    const goTo = (id: string) => router.push(`/past-projects/${id}`);
</script>

<template>
    <article class="card actionable" @click="goTo(project.id)">
        <header
            class="block"
            :style="{
                '--_gradientTop': project.gradOne,
                '--_gradientBottom': project.gradTwo
            }"
        >
            <FontAwesomeIcon :icon="project.icon" size="5x" />
        </header>
        <main>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
        </main>
    </article>
</template>

<style scoped lang="scss">
    article {
        width: 40ch;

        &:hover {
            cursor: pointer;
        }
    }

    header.block {
        background-image: linear-gradient(
            to bottom right,
            var(--_gradientTop),
            var(--_gradientBottom)
        );
    }
</style>
