import FrequencyCount from "../../Frequency/FrequencyCount"
import FrequencyDay from "../../Frequency/FrequencyDay"

export default function PatientSummary() {
    return (
        <div className="flex justify-between gap-4 items-center bg-surface-bg-neutral-3 text-xs py-4 px-6 rounded-3xl">
            <span>
                L10
            </span>
            <span className="w-full">
                Maria da Silva
            </span>
            <FrequencyCount />

            <FrequencyDay />
        </div>
    )
}