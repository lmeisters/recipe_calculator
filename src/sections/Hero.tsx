"use client";
import Image from "next/image";
import PlaceHolder from "@/assets/placeholder-website.webp";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section className="pt-12 pb-20 md:pt-5 md:pb-10 flex items-center justify-center min-h-screen">
            <div className="container">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col text-center md:pt-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="tag relative ps-6 inline-block mx-auto"
                        >
                            <span className="absolute left-2 top-2.5 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[#31ae4c] animate-custom-pulse"></span>
                            Public beta out now
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold mt-6"
                        >
                            Save Recipes, Plan Meals, and Stay Organized
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-xl text-gray-400 mt-8 px-4"
                        >
                            Discover the ultimate recipe-saving app that lets
                            you effortlessly save recipes, adjust portion sizes,
                            plan meals, and track nutrition. Whether you're a
                            home cook or a pro chef, FridgeFolio helps you
                            create delicious meals with ease
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex gap-1 items-center justify-center mt-[40px]"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-primary"
                            >
                                Try demo
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-text"
                            >
                                Learn more
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-12 flex justify-center px-4"
                >
                    <Image
                        src={PlaceHolder}
                        alt="FridgeFolio Website"
                        width={900}
                        height={600}
                        className="w-auto h-auto border-4 rounded-lg"
                    />
                </motion.div>
            </div>
        </section>
    );
};
