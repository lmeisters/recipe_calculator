"use client";
import Link from "next/link";
import { GrMenu } from "react-icons/gr";

export const Header = () => {
    const navItems = [
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Pricing", href: "#pricing" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <header className="sticky top-0 backdrop-blur-sm z-20">
            <div className="flex justify-center items-center py-3">
                <div className="container">
                    <div className="flex items-center justify-evenly">
                        <span className="font-bold">FridgeFolio</span>
                        <GrMenu className="h-5 w-5 md:hidden" />
                        <nav className="hidden md:flex gap-6 items-center">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="relative text-black hover:text-gray-800 transition-colors duration-300 ease-in-out group"
                                >
                                    <span className="relative z-10">
                                        {item.name}
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
                                </a>
                            ))}
                        </nav>
                        <Link
                            href="/calculator"
                            className="btn btn-primary hidden md:block"
                        >
                            Try demo
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};
