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
                            <a href="#">Features</a>
                            <a href="#">How It Works</a>
                            <a href="#">Pricing</a>
                            <a href="#">Testimonials</a>
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
