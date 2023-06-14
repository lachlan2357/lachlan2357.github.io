<script setup lang="ts">
    import EmptyProject from "@/components/EmptyProject.vue";
    import { useRoute } from "vue-router";
    import projects from "@/assets/projects";
    import ChipCollection from "@/components/ChipCollection.vue";

    const route = useRoute();

    const projectName = route.params.project;
    const project = projects.find((project) => project.id == projectName);
</script>

<template>
    <EmptyProject v-if="!project" />
    <template v-else>
        <section class="card" id="project-card">
            <h2>About</h2>
            <p>{{ project.description }}</p>
            <project.component />
        </section>
        <div id="halves">
            <section class="card">
                <h2>Roles</h2>
                <ChipCollection :items="project.roles" justify="center" />
            </section>
            <section class="card">
                <h2>Links</h2>
                <ChipCollection :items="project.links" justify="center" />
            </section>
        </div>
    </template>
</template>

<style lang="scss">
    @use "@/assets/mixins";

    #halves {
        @include mixins.flexbox();
        width: 100%;

        > * {
            @include mixins.flexbox(column);
            text-align: center;
            align-items: center;
            flex-basis: 0;
            flex-grow: 1;
        }
    }

    #project-card {
        @include mixins.flexbox(column);

        .card {
            @include mixins.flexbox(column);
            text-align: center;
            align-items: center;
        }

        iframe,
        img {
            max-width: 100%;
            border-radius: var(--radius);
            box-shadow: var(--shadow);
        }
    }

    .horizontal.center {
        justify-content: center;
    }
</style>
