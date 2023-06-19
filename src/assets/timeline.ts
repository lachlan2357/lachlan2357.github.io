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
    }
].reverse();

export default timeline;
