<script setup lang="ts">
    import timeline from "@/assets/timeline";
    import ChipCollection from "@/components/ChipCollection.vue";
    import { numToMonth } from "@/types/supplements";
</script>

<template>
    <p>I've done a bunch of things. Here are the hits.</p>

    <h2>Timeline</h2>
    <section id="timeline" class="react-container">
        <!-- line -->
        <svg width="20" height="100%" id="top">
            <rect width="5" height="100%" x="7.5" rx="2.5" />
        </svg>

        <!-- articles -->
        <article
            v-for="(event, i) in timeline"
            :key="event.title"
            class="card"
            :style="{ gridRow: i + 2 }"
        >
            <span class="date">{{ numToMonth(event.month) }} {{ event.year }}</span>
            <h2>{{ event.title }}</h2>
            <p>{{ event.description }}</p>
            <h3 v-if="event.links.length">Links</h3>
            <ChipCollection :items="event.links" />
        </article>

        <!-- graphics -->
        <div v-for="(_event, i) in timeline" :key="i" class="dot" :style="{ gridRow: i + 2 }">
            <svg width="20" height="100%">
                <circle r="7.5" cx="10" cy="25px" />
            </svg>
        </div>
    </section>
</template>

<style scoped lang="scss">
    @use "@/assets/mixins.scss";

    .date {
        font-family: "Montserrat";
        font-size: 1.25rem;
        opacity: 0.5;
    }

    .card {
        padding: 1em;
    }

    #timeline {
        display: grid;
        grid-template-columns: auto;
        row-gap: 0;
        grid-row-gap: 1em;

        article {
            @include mixins.flexbox(column, 0.5em);
        }

        article:nth-of-type(odd) {
            grid-column: 1;
        }

        article:nth-of-type(even) {
            grid-column: 3;
        }
    }

    svg#top {
        grid-column: 2;
        grid-row-start: 1;
        grid-row-end: 10;
        fill: var(--bright);
    }

    .dot {
        grid-column: 2;

        svg {
            fill: var(--bright);

            circle {
                fill: var(--dark);
                stroke: var(--bright);
                stroke-width: 5px;
            }
        }

        &:first-of-type svg rect {
            border-radius: 2.5px 2.5px 0 0;
        }

        &:last-of-type svg rect {
            border-radius: 0 0 2.5px 2.5px;
        }
    }

    @container (max-width: 800px) {
        #timeline {
            article {
                grid-column: 3 !important;
            }
        }
    }
</style>
