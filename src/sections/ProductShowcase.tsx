"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import PlaceHolder from "@/assets/placeholder-website.webp";
import Image from "next/image"; // Add this import

const menuItems = [
    {
        title: "Getting Started",
        description:
            "Open the app from the browser and create an account to start managing your recipes.",
        image: PlaceHolder,
    },
    {
        title: "Save Recipes",
        description:
            "Easily save your favorite recipes from anywhere on the web or input your own.",
        image: PlaceHolder,
    },
    {
        title: "Scale Servings",
        description:
            "Adjust ingredient quantities automatically for any number of servings.",
        image: PlaceHolder,
    },
    {
        title: "Meal Planning",
        description:
            "Plan your meals for the week and generate shopping lists with ease.",
        image: PlaceHolder,
    },
];

export const ProductShowcase = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const cycleTime = 3000; // 3

    const nextItem = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % menuItems.length);
        setProgress(0);
    }, []);

    useEffect(() => {
        let startTime: number;
        let animationFrameId: number;

        const updateProgress = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsedTime = timestamp - startTime;
            const newProgress = Math.min((elapsedTime / cycleTime) * 100, 100);
            setProgress(newProgress);

            if (newProgress < 100) {
                animationFrameId = requestAnimationFrame(updateProgress);
            } else {
                nextItem();
            }
        };

        animationFrameId = requestAnimationFrame(updateProgress);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [activeIndex, cycleTime, nextItem]);

    const handleItemClick = (index: number) => {
        setActiveIndex(index);
        setProgress(0);
    };

    return (
        <section className="bg-slate-100">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center py-20">
                <div className="section-heading mb-16">
                    <div className="flex justify-center">
                        <div className="tag">How it Works</div>
                    </div>
                    <h2 className="section-title my-5">
                        Simple Steps to Manage and Enjoy Your Recipes
                    </h2>
                    <p className="section-description mt-5">
                        Effortlessly save, scale, and plan meals with just a few
                        easy steps
                    </p>
                </div>

                <div className="card md:flex max-w-[1024px] bg-white">
                    <div className="w-1/2 pr-6 flex md:flex-col justify-between">
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className="flex mb-4 cursor-pointer"
                                onClick={() => handleItemClick(index)}
                            >
                                <div className="mr-4 w-0.5 relative">
                                    <motion.div
                                        className="absolute top-0 left-0 w-full bg-black"
                                        initial={{ height: 0 }}
                                        animate={{
                                            height:
                                                index === activeIndex
                                                    ? `${progress}%`
                                                    : "0%",
                                        }}
                                        transition={{
                                            duration: 0.1,
                                            ease: "linear",
                                        }}
                                    />
                                </div>
                                <div className="flex-1">
                                    <h2
                                        className={`text-xl font-semibold mb-2 ${
                                            index === activeIndex
                                                ? "text-black"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        {item.title}
                                    </h2>
                                    <motion.p
                                        className="mt-2"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity:
                                                index === activeIndex ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {item.description}
                                    </motion.p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-1/2 bg-white p-4 rounded-lg shadow relative h-[390px]">
                        {" "}
                        {/* Add fixed height */}
                        {menuItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: index === activeIndex ? 1 : 0,
                                }}
                                transition={{ duration: 0.5 }}
                                className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    layout="fill"
                                    objectFit="contain"
                                    priority={true}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
