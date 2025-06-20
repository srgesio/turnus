import { daysData } from "./days";

export const patientsData = [
    {
        id: 1,
        roomId: 101,
        name: "Alice Smith",
        frequency: {
            days: [daysData[1], daysData[3], daysData[5]], // Monday, Wednesday, Friday
            count: 3,
        },
        notes: "Requires regular check-ups.",
    },
    {
        id: 2,
        roomId: 102,
        name: "Bob Johnson",
        frequency: {
            days: [daysData[2], daysData[4]], // Tuesday, Thursday
            count: 2,
        },
        notes: "Allergic to penicillin.",
    },
    {
        id: 3,
        roomId: 103,
        name: "Charlie Brown",
        frequency: {
            days: [daysData[0], daysData[2], daysData[4]], // Sunday, Tuesday, Thursday
            count: 3,
        },
        notes: "Needs special diet.",
    },
    {
        id: 4,
        roomId: 104,
        name: "Diana Prince",
        frequency: {
            days: [daysData[1], daysData[4]], // Monday, Thursday
            count: 2,
        },
        notes: "Prefers evening appointments.",
    },
    {
        id: 5,
        roomId: 105,
        name: "Ethan Hunt",
        frequency: {
            days: [daysData[3], daysData[5]], // Wednesday, Friday
            count: 2,
        },
        notes: "Requires physical therapy.",
    },
    {
        id: 6,
        roomId: 106,
        name: "Fiona Gallagher",
        frequency: {
            days: [daysData[2], daysData[6]], // Tuesday, Saturday
            count: 2,
        },
        notes: "Has a history of asthma.",
    },
    {
        id: 7,
        roomId: 107,
        name: "George Costanza",
        frequency: {
            days: [daysData[1], daysData[3], daysData[5]], // Monday, Wednesday, Friday
            count: 3,
        },
        notes: "Needs regular blood pressure checks.",
    }
];