import type { TimelineEvent } from "@/types";

const timeline: Array<TimelineEvent> = [
    {
        title: "Commenced Senior High School",
        description:
            "At the beginning of Year 11, I began studying my senior subjects of English, Mathematical Methods, Physics, Digital Solutions, Design and Art.",
        month: 2,
        year: 2020,
        links: []
    },
    {
        title: "Began a Stationery Recycling school program",
        description:
            "Through the high schools extra-curricular classes, myself and friends setup a program to collect unused stationery. We in November, we partnered with StationeryAid, where from there, we donated our collection to assist them in creating stationery packs for disadvantaged students. We were the first school to partner with them, with many more joining in the years to come.",
        month: 8,
        year: 2020,
        links: [{ name: "StationeryAid Website", url: "https://stationeryaid.org" }]
    },
    {
        title: "Competed in F1 in School state competition.",
        description:
            "Competed in the Australian F1 in School competition in a team of four, ultimately placing 3rd in Queensland.",
        month: 10,
        year: 2020,
        links: [{ name: "F1 in Schools Australia", url: "https://rea.org.au/f1-in-schools/" }]
    },
    {
        title: "Graduated High School",
        description: "After my final two years of study, I graduated Year 12 with a QCE and ATAR.",
        month: 11,
        year: 2021,
        links: []
    },
    {
        title: "Began University Studies at QUT",
        description:
            "Straight after graduating, I was accepted into QUT to study a double degree of Bachelor of Design (Interaction Design)/Bachelor of Information Technology (Computer Science).",
        month: 3,
        year: 2022,
        links: [
            {
                name: "Course",
                url: "https://www.qut.edu.au/courses/bachelor-of-design-interaction-design-bachelor-of-information-technology"
            }
        ]
    },
    {
        title: "Released Colour Splash Beta",
        description:
            "Released a beta version of a module for Python to allow easy coloured terminal outputs.",
        month: 8,
        year: 2022,
        links: [
            { name: "PyPI Page", url: "https://pypi.org/project/colour-splash" },
            { name: "GitHub Repo", url: "https://github.com/lachlan2357/python-colour-splash" }
        ]
    },
    {
        title: "Released Merge",
        description:
            "After working on it over the course of the year, I released Merge, a Quality Assurance tool to assist with mapping on OpenStreetMap.",
        month: 9,
        year: 2022,
        links: [
            { name: "Web Application", url: "https://lachlan2357.github.io/merge" },
            { name: "GitHub Repo", url: "https://github.com/lachlan2357/merge" }
        ]
    },
    {
        title: "Released Game Collections",
        description:
            "Whilst looking for a solution to send a list of Steam Games together, I decided to make my own. This would allow anybody to create a list of games and share a link to that collection.",
        month: 5,
        year: 2023,
        links: [
            { name: "Web Application", url: "https://lachlan2357.github.io/game-collections" },
            { name: "GitHub Page", url: "https://github.com/lachlan2357/game-collections" }
        ]
    }
].reverse();

export default timeline;
