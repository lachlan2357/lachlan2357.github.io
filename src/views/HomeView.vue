<script setup lang="ts">
    import projectsInverse from "@/assets/projects";
    import ProjectCard from "@/components/ProjectCard.vue";

    const projects = projectsInverse.reverse();

    const contactButtons = [
        {
            title: "Instagram",
            icon: "fa-brands fa-instagram",
            url: "https://www.instagram.com/lachlan_2357"
        },
        {
            title: "Email",
            icon: "fa-regular fa-envelope",
            url: "mailto:lachlan.rehder@outlook.com"
        }
    ];
</script>

<template>
    <!-- welcome -->
    <section id="welcome" class="card container small">
        <header class="block">
            <h2>Welcome</h2>
        </header>
        <main>
            <p>
                I get bored sometimes. So here is where I'm going to put it all. It's a bit empty at
                the moment because this is a big work in progress.
            </p>
        </main>
    </section>

    <!-- past projects -->
    <section>
        <header class="container small">
            <h2>Past Projects</h2>
        </header>
        <main>
            <p class="container small">
                Over the years I've been on this planet, I've worked on multiple projects for
                various school classes, competitions and personal growth. Here area a snippet of
                them:
            </p>
            <section id="projects" class="container horizontal scroll">
                <ProjectCard
                    v-for="project in projects.reverse()"
                    :key="project.title"
                    :project="project"
                />
            </section>
        </main>
    </section>

    <!-- contact -->
    <section class="container card small">
        <header class="block">
            <h2>Get in Contact</h2>
        </header>
        <main>
            <p>
                You can find me all over the place, but where I'm most likely to see your message
                are:
            </p>
            <div id="contact-buttons">
                <a
                    v-for="contact in contactButtons"
                    :key="contact.title"
                    :href="contact.url"
                    class="gradient-underline-small"
                >
                    <FontAwesomeIcon :icon="contact.icon" />
                    <span>{{ contact.title }}</span>
                </a>
            </div>
        </main>
    </section>
</template>

<style scoped lang="scss">
    @use "@/assets/mixins";

    // .small {
    //     @include mixins.container-small();
    // }

    #contact-buttons {
        @include mixins.flexbox();
        justify-content: space-evenly;

        a {
            @include mixins.flexbox($gap: 0.5em);
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 1.5em;
            text-decoration: none;
        }
    }
</style>
