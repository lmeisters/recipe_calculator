import Image from "next/image";
import PlaceHolder from "@/assets/placeholder-website.webp";

// "use client";

export const Hero = () => {
    return (
        <section className="pt-12 pb-20 md:pt-5 md:pb-10 flex items-center justify-center min-h-screen">
            <div className="container">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col text-center md:pt-10">
                        <div className="tag relative ps-6 inline-block mx-auto">
                            <span className="absolute left-2 top-2.5 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[#31ae4c] animate-custom-pulse"></span>
                            Public beta out now
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mt-6">
                            Save Recipes, Plan Meals, and Stay Organized with
                            FridgeFolio
                        </h1>
                        <p className="text-xl text-gray-400 mt-6">
                            Discover the ultimate recipe-saving app that lets
                            you effortlessly save recipes, adjust portion sizes,
                            plan meals, and track nutrition. Whether you're a
                            home cook or a pro chef, FridgeFolio helps you
                            create delicious meals with ease
                        </p>
                        <div className="flex gap-1 items-center justify-center mt-[30px]">
                            <button className="btn btn-primary">
                                Try demo
                            </button>
                            <button className="btn btn-text">Learn more</button>
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex justify-center">
                    <Image
                        src={PlaceHolder}
                        alt="FridgeFolio Website"
                        width={900}
                        height={675}
                        className="w-auto h-auto border-4"
                    />
                </div>
            </div>
        </section>
    );
};
