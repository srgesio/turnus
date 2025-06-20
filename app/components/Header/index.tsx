import Logo from "../Logo";
import ThemeToggle from "../ThemeToggle";

export default function Header() {
    return (
        <header className="bg-transparent flex w-full justify-center p-4">
            <div className="flex items-center justify-between w-full max-w-7xl">
                <Logo />
                <ThemeToggle />
            </div>
        </header>
    )
}