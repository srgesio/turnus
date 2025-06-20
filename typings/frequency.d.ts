interface Day {
    id: number;
    name: string;
    totalOfPatients: number;
    status: "active" | "inactive";
}

interface Frequency {
    days: Day[];
    count: number;
}