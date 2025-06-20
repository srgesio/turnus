"use client";
import { usePatients } from "@/app/providers/PatientsProvider";
import PatientSummary from "../PatientSummary";

export default function PatientsList() {
    const { patients, loading } = usePatients();
    if (loading) {
        return <div className="text-center text-lg">Carregando pacientes...</div>;
    }

    return (
        <div className="flex flex-col gap-4 w-full max-w-7xl bg-surface-bg-neutral-2 text-surface-fg-neutral-2 p-4 rounded-4xl">
            <h2 className="text-2xl font-normal">Todos os pacientes</h2>
            <div className="flex flex-col gap-4">
                {patients.map(({ roomId, name, frequency }) => (
                    <PatientSummary key={name} roomId={`L${roomId}`} patientName={name} frequency={frequency} />
                ))}
            </div>
        </div>
    );
}