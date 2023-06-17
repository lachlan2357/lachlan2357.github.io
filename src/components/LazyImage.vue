<script setup lang="ts">
    import { computed, ref, type ImgHTMLAttributes, type StyleValue } from "vue";
    const props = defineProps<{
        src: string;
        alt?: string;
        scroll?: boolean;
        attr?: ImgHTMLAttributes;
    }>();

    const hidden = ref(true);

    const thumbnailUrl = props.src.replace("/images", "/thumbnails");
    const divClass = computed(() => {
        const classes: Array<string> = ["lazy-div"];

        if (props.scroll) classes.push("scroll");
        if (hidden.value) classes.push("blur");

        return classes;
    });

    const divStyle = computed<StyleValue>(() => {
        if (hidden.value) return { backgroundImage: `url(${thumbnailUrl})` };
        else return {};
    });

    const imgStyle = computed<StyleValue>(() => {
        if (hidden.value) return { opacity: 0 };
        else return { opacity: 1 };
    });
</script>

<template>
    <div :class="divClass" :style="divStyle">
        <img
            :src="src"
            :alt="alt ?? String()"
            loading="lazy"
            :style="imgStyle"
            v-bind="attr"
            @load="hidden = false"
        />
    </div>
</template>

<style scoped lang="scss">
    .lazy-div {
        background-size: cover;

        &.blur {
            filter: blur(10px);
            border-radius: var(--radius);
        }
    }

    .scroll {
        height: 500px;
    }
</style>
