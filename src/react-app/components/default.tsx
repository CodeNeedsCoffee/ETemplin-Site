import { Link } from "@heroui/link";
import { useEffect, useState } from "react";
import { Navbar } from "./navbar";

export default function DefaultLayout({ children, }: {
    children: React.ReactNode;
}) {
    const [hazyDots, setHazyDots] = useState<Array<{ top: string; left: string; size: number; color: string; opacity: number }>>([]);
    const [darkHazyDots, setDarkHazyDots] = useState<Array<{ top: string; left: string; size: number; color: string; opacity: number }>>([]);
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        const colors = ['#30569f', '#717ed4', '#e175a5'];
        const dots = Array.from({ length: 9 }, () => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: 350 + Math.random() * 200,
            color: colors[Math.floor(Math.random() * colors.length)],
            opacity: 0.35 + Math.random() * 0.5 // light mode
        }));
        setHazyDots(dots);
        const darkDots = dots.map(dot => ({ ...dot, opacity: 0.12 + Math.random() * 0.15 })); // lower opacity for dark
        setDarkHazyDots(darkDots);
        // Detect dark mode
        const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'));
        checkDark();
        const observer = new MutationObserver(checkDark);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);
    return (
        <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
                {/* Hazy Background Elements */}
                <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
                    {(isDark ? darkHazyDots : hazyDots).map((dot, index) => (
                        <div
                            key={index}
                            className="absolute rounded-full blur-3xl"
                            style={{
                                top: dot.top,
                                left: dot.left,
                                width: `${dot.size}px`,
                                height: `${dot.size}px`,
                                backgroundColor: dot.color,
                                opacity: dot.opacity,
                            }}
                        />
                    ))}
                </div>
                {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
                <Link
                    isExternal
                    className="flex items-center gap-1 text-current"
                    href="https://codeneedscoffee.com"
                    title="codeneedscoffee.com homepage"
                >
                    <span className="text-default-600">Powered by</span>
                    <p className="text-secondary">Coffee</p>
                </Link>
            </footer>
        </div>
    );
}
