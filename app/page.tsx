
import Tab from "./components/Tab";
import { PatientsProvider } from "./providers/PatientsProvider";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center px-4">
      <div className="flex justify-start w-full max-w-7xl py-4">
        <h1 className="text-6xl text-surface-fg-neutral-1 font-normal font-primary">Pacientes</h1>
      </div>
      <PatientsProvider>
        <Tab />
      </PatientsProvider>
    </div>
  );
}
