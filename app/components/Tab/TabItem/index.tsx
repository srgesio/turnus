import { TabsTrigger } from "@/components/ui/tabs";

export default function TabItem({
    value,
    children,
    className = "",
}: {
    value: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <TabsTrigger className={`
                        rounded-2xl
                        px-4
                        py-2
                        mb-1
                        bg-transparent
                        border-action-default-border-neutral
                        border
                        text-sm
                        font-normal
                        text-action-default-fg-neutral
                        data-[state=active]:m-0
                        data-[state=active]:rounded-b-none
                        data-[state=active]:px-4
                        data-[state=active]:pb-3
                        data-[state=active]:border-none
                        data-[state=active]:bg-action-default-bg-secondary
                        data-[state=active]:text-action-default-fg-secondary
                        ${className}
                        `} value={value}>
            {children}
        </TabsTrigger>
    );
}