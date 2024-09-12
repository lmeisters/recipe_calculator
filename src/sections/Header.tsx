// "use client";
import { GrMenu } from "react-icons/gr";

export const Header = () => {
    return (
        <header className="sticky top-0 backdrop-blur-sm z-20">
            <div className="flex justify-center items-center py-3">
                <div className="container">
                    <div className="flex items-center justify-evenly">
                        <span className="font-bold">FridgeFolio</span>
                        <GrMenu className="h-5 w-5 md:hidden" />
                        <nav className="hidden md:flex gap-6 items-center">
                            {[
                                "Features",
                                "How It Works",
                                "Pricing",
                                "Testimonials",
                            ].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="relative text-black hover:text-gray-800 transition-colors duration-300 ease-in-out group"
                                >
                                    <span className="relative z-10">
                                        {item}
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
                                </a>
                            ))}
                        </nav>
                        <button className="btn btn-primary hidden md:block">
                            Try demo
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
