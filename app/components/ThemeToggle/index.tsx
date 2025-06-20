"use client"

import { useTheme } from "next-themes"

export default function ThemeToggle() {

    const { setTheme, theme } = useTheme()

    console.log("==> ThemeToggle rendered", theme);

    return (
        <div className="flex gap-4">
            <button onClick={() => setTheme("light")} className="bg-surface-bg-neutral-1 text-surface-fg-neutral-1 px-4 py-2 rounded-md hover:bg-surface-bg-neutral-2 cursor-pointer">
                Light
            </button>
            <button onClick={() => setTheme("dark")} className="bg-surface-bg-neutral-1 text-surface-fg-neutral-1 px-4 py-2 rounded-md hover:bg-surface-bg-neutral-2 cursor-pointer">
                Dark
            </button>
        </div>
    )
}