<script setup lang="ts">
    import { computed } from "vue";
    import { useRoute } from "vue-router";
    import { headerInfo } from "@/router";
    import { keyCheck } from "@/types/supplements";

    const route = useRoute();

    const routeName = computed(() => route.name?.toString() ?? "");
    const isLandingPage = computed(() => routeName.value === "home");
    const routeData = computed(() => {
        if (keyCheck(headerInfo, routeName.value)) {
            const { titleFn, hideHeader } = headerInfo[routeName.value];
            return {
                header: (() => {
                    switch (routeName.value) {
                        case "project":
                            return titleFn(route.params.project.toString() ?? "");
                        default:
                            return titleFn("");
                    }
                })(),
                hide: hideHeader ?? false
            };
        } else {
            return {
                header: "404 Not Found",
                hide: false
            };
        }
    });

    const socialIcons = [
        { icon: "fa-brands fa-instagram", url: "https://www.instagram.com/lachlan_2357" },
        { icon: "fa-brands fa-github", url: "https://github.com/lachlan2357" },
        { icon: "fa-regular fa-envelope", url: "mailto:lachlan.rehder@outlook.com" }
    ];
</script>

<template>
    <template v-if="isLandingPage">
        <header class="large">
            <div id="background-image" />
            <img src="/images/pfp.png" alt="" id="pfp" />
            <h1>My Little Corner of the Internet</h1>
            <div id="icon-container">
                <a v-for="icon in socialIcons" :key="icon.url" :href="icon.url">
                    <FontAwesomeIcon :icon="icon.icon" size="lg" />
                </a>
            </div>
            <FontAwesomeIcon icon="fa-solid fa-chevron-down" size="2x" fade />
        </header>
    </template>
    <template v-else-if="!routeData.hide">
        <header class="small">
            <div id="background-image" />
            <h1>{{ routeData.header }}</h1>
            <div id="icon-container">
                <a v-for="icon in socialIcons" :key="icon.url" :href="icon.url">
                    <FontAwesomeIcon :icon="icon.icon" size="lg" />
                </a>
            </div>
        </header>
    </template>
</template>

<style scoped lang="scss">
    @use "@/assets/mixins";

    header {
        &.large {
            @include mixins.flexbox(column);
            justify-content: center;
            align-items: center;
            height: max(100svh, 720px);

            h1 {
                font-size: 4rem;
                width: 8ch;
                text-align: center;
            }
        }

        &.small {
            justify-content: center;
            align-items: flex-start;
            padding-inline: 5rem;
            padding-block: 7.5rem 5rem;

            h1 {
                font-size: 3rem;
            }

            > #background-image {
                background-size: 100%;
            }
        }

        @include mixins.flexbox(column);
        overflow: hidden;
        position: relative;
        border-radius: 0 0 var(--radius) var(--radius);
        background-color: var(--dark);
        width: 100%;

        :not(#background-image) {
            z-index: 1;
        }
    }

    #icon-container {
        @include mixins.flexbox();

        a {
            text-decoration: none;
            color: var(--bright);
            text-shadow: var(--shadow);
        }
    }

    @media (max-width: 720px) {
        header.small {
            align-items: center;
            text-align: center;
        }
    }
</style>
