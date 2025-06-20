import FrequencyCount from "../../Frequency/FrequencyCount"
import FrequencyDay from "../../Frequency/FrequencyDay"

interface PatientSummaryProps {
    roomId?: string;
    patientName?: string;
    frequency?: Frequency;
}

export default function PatientSummary({ roomId = "L10", patientName = "Maria da Silva", frequency }: PatientSummaryProps) {
    return (
        <div className="flex hover:bg-surface-bg-neutral-4/50 hover:scale-105 transition justify-between gap-4 items-center bg-surface-bg-neutral-3 text-xs py-4 px-6 rounded-3xl">
            <span>
                {roomId}
            </span>
            <span className="w-full">
                {patientName}
            </span>
            <FrequencyCount count={frequency?.count} />

            <FrequencyDay days={frequency?.days} />
        </div>
    )
}