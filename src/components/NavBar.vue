<script setup lang="ts">
    import { navEntries, routes } from "@/router";
    import { useScrollPos } from "@/stores/scroll";
    import { RouterLink } from "vue-router";

    const navRoutes = navEntries.map((entry) => routes[entry]);
    const scrollPos = useScrollPos();
</script>

<template>
    <nav :data-top="scrollPos.isTop">
        <ul>
            <li v-for="route in navRoutes" :key="route.path">
                <RouterLink :to="route.path">{{ route.name }}</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
    @use "@/assets/mixins";

    nav {
        position: fixed;
        top: 1rem;
        left: 50%;
        translate: -50%;
        border-radius: var(--radius);
        box-shadow: var(--shadow);
        overflow: hidden;
        z-index: 10;
        transition: box-shadow 0.1s;

        &[data-top="true"] {
            box-shadow: 0 0 10px transparent;

            a:not(:hover) {
                background-color: transparent;
            }
        }
    }

    ul {
        @include mixins.flexbox($gap: 0);
        justify-content: center;
        list-style-type: none;
    }

    a {
        display: block;
        text-decoration: none;
        color: var(--bright);
        padding: 1em 2em;
        background-color: var(--med);
        text-transform: capitalize;
        text-align: center;

        transition: 0.1s;

        &:hover {
            background-color: var(--accent-three);
        }
    }

    @media (max-width: 720px) {
        nav {
            top: 0;
            left: 0;
            width: 100%;
            translate: 0;
            border-radius: unset;
            box-shadow: unset;
            top: 0;

            li {
                flex-basis: 0;
                flex-grow: 1;
            }

            a {
                padding: 2em;
            }
        }
    }
</style>
