interface FrequencyDayProps {
    days?: Day[];
}

export default function FrequencyDay({ days = [{ id: 1, name: "Segunda", status: "active", totalOfPatients: 20 }] }: FrequencyDayProps = {}) {

    return (
        <div className="flex items-center gap-2">
            {days.map((day) => (
                <button key={day.id} className="flex items-center gap-1 bg-surface-bg-neutral-4 text-surface-fg-neutral-4 py-1 pr-1 pl-2 rounded-4xl">
                    {day.name}
                    <span className="flex justify-center bg-surface-bg-neutral-5 text-surface-fg-neutral-5 text-[0.625rem] leading-4 rounded-lg px-1 min-w-4 items-center">
                        {day.totalOfPatients}
                    </span>
                </button>
            ))}
        </div>
    )
}