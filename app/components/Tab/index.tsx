import TabView from "./TabView"

const TAB_ITEMS = [
    {
        id: 'allPatients',
        label: 'Todos os pacientes',
        defaultValue: true
    },
    {
        id: 'patientsByDay',
        label: 'Pacientes por dia',
        defaultValue: false
    }
]

export default function Tab() {
    return (
        <TabView tabItems={TAB_ITEMS} />
    )
}