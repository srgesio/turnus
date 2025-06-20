import { TabsContent } from "@/components/ui/tabs";
import PatientSummary from "../../Patient/PatientSummary";

export default function TabContent({ id }: { id: string }) {
    return (
        <TabsContent value={id}>
            {id === 'allPatients' ? (
                <div className="flex flex-col gap-4 w-full max-w-7xl bg-surface-bg-neutral-2 text-surface-fg-neutral-2 p-4 rounded-4xl">
                    <h2 className="text-2xl font-normal">
                        Todos os pacientes
                    </h2>

                    <PatientSummary />
                    <PatientSummary />
                    <PatientSummary />
                    <PatientSummary />
                </div>
            ) : id === 'patientsByDay' ? (
                <div className="flex flex-col gap-4 w-full max-w-7xl bg-surface-bg-neutral-2 text-surface-fg-neutral-2 p-4 rounded-4xl">
                    <h2 className="text-2xl font-normal">
                        Pacientes por dia
                    </h2>

                    <PatientSummary />
                    <PatientSummary />
                    <PatientSummary />
                    <PatientSummary />
                </div>
            ) : (
                <div>
                    <h2 className="text-2xl font-normal">Conteúdo não encontrado</h2>
                </div>
            )
            }
        </TabsContent>
    );
}