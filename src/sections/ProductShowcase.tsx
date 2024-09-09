"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TabKey =
    | "getting-started"
    | "save-recipes"
    | "scale-servings"
    | "meal-planning";

const AppShowcaseCard = () => {
    const [activeTab, setActiveTab] = useState<TabKey>("getting-started");

    const tabContent = {
        "getting-started": {
            title: "Getting Started",
            text: "Download the app and create an account to start managing your recipes.",
        },
        "save-recipes": {
            title: "Save Recipes",
            text: "Easily save your favorite recipes from anywhere on the web or input your own.",
        },
        "scale-servings": {
            title: "Scale Servings",
            text: "Adjust ingredient quantities automatically for any number of servings.",
        },
        "meal-planning": {
            title: "Meal Planning",
            text: "Plan your meals for the week and generate shopping lists with ease.",
        },
    } as const;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
        >
            <div className="p-2">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 pr-0 md:pr-4 mb-4 md:mb-0 flex flex-col justify-center">
                        {Object.entries(tabContent).map(
                            ([key, { title }], index) => (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: 0.1 * index,
                                        duration: 0.5,
                                    }}
                                >
                                    <button
                                        className={`w-full my-2 px-4 py-2 text-left rounded-md transition-colors ${
                                            activeTab === key
                                                ? "bg-black text-white"
                                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                        }`}
                                        onClick={() => setActiveTab(key)}
                                    >
                                        {title}
                                    </button>
                                </motion.div>
                            )
                        )}
                    </div>
                    <div className="w-full md:w-2/3 bg-gray-100 p-4 rounded-lg relative overflow-hidden flex flex-col justify-end min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-xl font-semibold mb-2">
                                    {tabContent[activeTab].title}
                                </h3>
                                {/* <motion.img
                                    // src={tabContent[activeTab].imageUrl}
                                    alt={tabContent[activeTab].title}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                /> */}
                                <p>{tabContent[activeTab].text}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export const ProductShowcase = () => {
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
                <AppShowcaseCard />
            </div>
        </section>
    );
};
