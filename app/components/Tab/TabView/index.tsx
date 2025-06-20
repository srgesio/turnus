import {
    Tabs,
    TabsList

} from "@/components/ui/tabs";
import TabItem from "../TabItem";
import TabContent from "../TabContent";

export default function TabView({
    tabItems }: {
        tabItems?: { id: string; label: string, defaultValue: boolean }[];
    }) {

    const defaultTabId = tabItems?.find(item => item.defaultValue)?.id || tabItems?.[0]?.id;
    return (
        <Tabs defaultValue={defaultTabId} className="w-full max-w-7xl bg-transparent">
            <TabsList className="flex justify-start bg-transparent rounded-none p-0 h-auto border-b-2 border-action-default-bg-secondary w-full">
                <div className="flex gap-1 items-center outline-none outline-0">
                    {tabItems?.map((item) => (
                        <TabItem
                            key={item.id}
                            value={item.id}
                            className="rounded-2xl px-4 py-2 mb-1 bg-transparent border-action-default-border-neutral border text-sm font-normal text-action-default-fg-neutral data-[state=active]:m-0 data-[state=active]:rounded-b-none data-[state=active]:px-4 data-[state=active]:pb-3 data-[state=active]:border-none data-[state=active]:bg-action-default-bg-secondary data-[state=active]:text-action-default-fg-secondary"
                        >
                            {item.label}
                        </TabItem>
                    ))}
                </div>
            </TabsList>

            {
                tabItems?.map((item) => (
                    <TabContent
                        key={item.id}
                        id={item.id}
                    />
                ))
            }
        </Tabs>
    )
}