import type { Project } from "@/types";

import AMSIChooseMaths from "@/components/projects/AMSIChooseMaths.vue";
import F1InSchools from "@/components/projects/F1InSchools.vue";
import AusRPlace from "@/components/projects/AusRPlace.vue";
import MergeOSM from "@/components/projects/MergeOSM.vue";
import GameCollections from "@/components/projects/GameCollections.vue";

const projects: Array<Project> = [
    {
        id: "amsi-choose-maths",
        title: "AMSI ChooseMaths",
        description:
            "Throughout 2017, 2018 and 2019, myself and a group of friends competed in the AMSI ChooseMATHS Competition. While not doing very well early on, our final video submission in 2019 was selected as one of the Top 10 nationally.",
        month: 10,
        year: 2019,
        icon: "fa-solid fa-film",
        gradOne: "#171c47",
        gradTwo: "#8b2370",
        component: AMSIChooseMaths,
        roles: ["Co-writer", "Co-image-producer", "Video Editor"],
        links: [
            {
                name: "Winner Shortlist (Archived)",
                url: "https://web.archive.org/web/20200227011959/https://choosemathsawards.org.au/2019/10/03/announcing-the-winners-of-the-2019-choosemaths-awards/"
            }
        ]
    },
    {
        id: "f1-in-schools",
        title: "F1 in Schools",
        description:
            "Myself and three friends competed in the 2020 F1 in Schools competition as Vitesse Racing, reaching third place at the State Competition. I was the graphic designer for our team, creating a team brand and website.",
        month: 10,
        year: 2020,
        icon: "fa-solid fa-car",
        gradOne: "#f22e0c",
        gradTwo: "#db0101",
        component: F1InSchools,
        roles: ["Graphic Designer"],
        links: [{ name: "F1 in Schools Australia", url: "https://rea.org.au/f1-in-schools/" }]
    },
    {
        id: "this-website",
        title: "This very Website",
        description:
            "As a Quarantine Project spanning 2021, I set out to design and code a personal website, employing my skills in HTML, CSS and Javascript. This code behind the website was constructed with code written purely by me, with the source available via my Github Page.",
        month: 6,
        year: 2021,
        icon: "fa-solid fa-code",
        gradOne: "#6078e6",
        gradTwo: "#69b6fa",
        roles: ["Creator"],
        links: [
            { name: "GitHub Page", url: "https://github.com/lachlan2357/lachlan2357.github.io" }
        ]
    },
    {
        id: "aus-r-place-displays",
        title: "Aus r/place Displays",
        description:
            "After the conclusion of Reddit's 2022 r/place event, I recreated Australia's pieces of art from our archived screenshots and turned them into displays.",
        icon: "fa-brands fa-reddit-alien",
        month: 4,
        year: 2022,
        gradOne: "#ff6e00",
        gradTwo: "#ff4500",
        component: AusRPlace,
        roles: ["Archiver", "Contributor"],
        links: [
            { name: "GitHub Page", url: "https://github.com/lachlan2357/r-place-2022-aus" },
            { name: "r/place on Reddit", url: "https://www.reddit.com/r/place/" }
        ]
    },
    {
        id: "python-colour-splash",
        title: "Colour Splash",
        description:
            "During my university studies, I began working on small project which required the use of colouring Python terminal outputs. As I felt existing solutions didn't offer the flexibility I was looking for, I developed my own.",
        icon: "fa-solid fa-brush",
        month: 8,
        year: 2022,
        gradOne: "#e01db6",
        gradTwo: "#e01d5a",
        roles: ["Creator", "Maintainer"],
        links: [
            { name: "PyPI Page", url: "https://pypi.org/project/colour-splash/" },
            { name: "GitHub Page", url: "https://github.com/lachlan2357/python-colour-splash" }
        ]
    },
    {
        id: "merge",
        title: "Merge",
        description:
            "It was difficult to find a tool to help with visualising road information for data on OpenStreetMap due to the tiles used conveying all the data about a specific road. In response, I created Merge, a work-in-process but functional tool to visualise roads in more detail",
        icon: "fa-solid fa-map-location-dot",
        month: 9,
        year: 2022,
        gradOne: "#0bd674",
        gradTwo: "#0cdce0",
        component: MergeOSM,
        roles: ["Creator", "Maintainer"],
        links: [
            { name: "Web Application", url: "https://lachlan2357.github.io/merge" },
            { name: "GitHub Page", url: "https://github.com/lachlan2357/merge" }
        ]
    },
    {
        id: "game-collections",
        title: "Game Collections",
        description:
            "Whilst looking for a solution to send a list of Steam Games together, I decided to make my own. This would allow anybody to create a list of games and share a link to that collection.",
        icon: "fa-solid fa-gamepad",
        month: 5,
        year: 2023,
        gradOne: "#3dbdc6",
        gradTwo: "#0f9ca5",
        component: GameCollections,
        roles: ["Creator", "Maintainer"],
        links: [
            { name: "Web Application", url: "https://lachlan2357.github.io/game-collections" },
            { name: "GitHub Page", url: "https://github.com/lachlan2357/game-collections" }
        ]
    },
    {
        id: "lazy-image-generator",
        title: "Lazy Image Generator",
        description:
            "To assist in creating lazy-loading images using a smaller resolution version as a placeholder, I created a small NodeJS tool to automatically downscale a directory of images, ensuring they were always up-to-date.",
        month: 6,
        year: 2023,
        icon: "fa-solid fa-clone",
        gradOne: "#6bb852",
        gradTwo: "#3e853f",
        roles: ["Creator", "Maintainer"],
        links: [{ name: "GitHub Page", url: "https://github.com/lachlan2357/lazy-image-generator" }]
    }
].reverse();

export default projects;
