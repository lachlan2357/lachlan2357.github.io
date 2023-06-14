<script setup lang="ts">
    import ChipLinks from "@/components/ChipLinks.vue";
    import type { DisplayLink } from "@/types";

    const links: Array<DisplayLink> = [
        { name: "Instagram", url: "https://www.instagram.com/lachlan_2357" },
        { name: "GitHub", url: "https://github.com/lachlan2357/" },
        { name: "Email", url: "mailto:lachlan.rehder@outlook.com" }
    ];
</script>

<template>
    <section id="contact" class="card container">
        <img src="/images/pfp.png" alt="" id="pfp" />
        <h1>Lachlan Rehder</h1>
        <p>Current Student at QUT</p>
        <ChipLinks :links="links" />
    </section>
</template>

<style scoped lang="scss">
    @use "@/assets/mixins.scss";
    #contact {
        @include mixins.flexbox(column);
        text-align: center;
        justify-content: center;
        align-items: center;
        padding: 5em;
        margin-inline: auto;

        :not(#background-image) {
            z-index: 1;
        }
    }

    h1 {
        text-transform: capitalize;
    }
</style>
