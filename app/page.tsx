import PatientSummary from "./components/Patient/PatientSummary";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center px-4">
      <div className="flex justify-start w-full max-w-7xl py-4">
        <h1 className="text-6xl text-surface-fg-neutral-1 font-normal font-primary">Pacientes</h1>
      </div>
      <div className="flex flex-col gap-4 w-full max-w-7xl bg-surface-bg-neutral-2 text-surface-fg-neutral-2 p-4 rounded-4xl">
        <h2 className="text-2xl font-normal">
          Todos os pacientes
        </h2>

        <PatientSummary />
        <PatientSummary />
        <PatientSummary />
        <PatientSummary />
      </div>
    </div>
  );
}
