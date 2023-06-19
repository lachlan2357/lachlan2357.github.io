import type { ComponentOptionsMixin, DefineComponent, ExtractPropTypes } from "vue";

export type Component = DefineComponent<
    {},
    {},
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {},
    string,
    PublicProps,
    Readonly<ExtractPropTypes<{}>>,
    {},
    {}
>;

export interface HeaderInfo {
    titleFn: (context: string) => string;
    hideHeader?: boolean;
}

export interface DisplayLink {
    name: string;
    url: string;
}

export interface ChipData {
    name: string;
    external: boolean;
    url?: string;
}

export interface TimelineEvent {
    title: string;
    description: string;
    month: number;
    year: number;
    links: Array<DisplayLink>;
}

export interface Project extends TimelineEvent {
    id: string;
    icon: string;
    gradOne: string;
    gradTwo: string;
    component?: Component;
    roles: Array<string>;
}
