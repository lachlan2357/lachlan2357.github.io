import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProjectView from "@/views/ProjectView.vue";
import type { Component, HeaderInfo } from "@/types";
import projects from "@/assets/projects";
import TimelineView from "@/views/TimelineView.vue";
import ContactView from "@/views/ContactView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const routeNames = ["home", "project", "timeline", "contact", "notFound"] as const;
type RouteName = (typeof routeNames)[number];

export const navEntries: Array<RouteName> = ["home", "timeline", "contact"];
export const routes: Record<RouteName, { path: string; name: RouteName; component: Component }> = {
    home: { path: "/", name: "home", component: HomeView },
    project: { path: "/past-projects/:project", name: "project", component: ProjectView },
    timeline: { path: "/timeline", name: "timeline", component: TimelineView },
    contact: { path: "/contact", name: "contact", component: ContactView },
    notFound: { path: "/:pathMatch(.*)*", name: "notFound", component: NotFoundView }
};

export const headerInfo: Record<RouteName, HeaderInfo> = {
    home: { titleFn: () => "My Little Corner of the Internet" },
    project: {
        titleFn: (context: string) =>
            projects.find((project) => project.id === context)?.title ?? "Unknown Project"
    },
    timeline: { titleFn: () => "Timeline" },
    contact: { titleFn: () => "Contact" },
    notFound: { titleFn: () => "404 Not Found" }
};

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: Object.values(routes),
    scrollBehavior(to, _from, savedPosition) {
        if (to.name !== "home") return { top: 0 };
        else return { top: savedPosition?.top ?? 0 };
    }
});

export default router;
