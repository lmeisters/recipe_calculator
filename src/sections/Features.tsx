"use client";

import { motion } from "framer-motion";

export const Features = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const features = [
        {
            title: "Recipe Management",
            description:
                "Easily save, organize, and access your favorite recipes",
            className: "",
        },
        {
            title: "Meal Planning",
            description: "Plan your meals for the week with ease",
            className: "",
        },
        {
            title: "Portion Adjustment",
            description:
                "Automatically adjust recipes for any number of servings",
            className: "sm:row-span-2",
        },
        {
            title: "Nutrition Tracking",
            description: "Monitor nutritional information for your meals",
            className: "sm:col-span-1 lg:col-span-2",
        },
        {
            title: "AI generated pictures",
            description: "Visualize your recipes with AI-generated images",
            className: "col-span-1 min-h-[300px]",
        },
        {
            title: "Smart ingredient substitution",
            description: "Find suitable alternatives for missing ingredients",
            className: "col-span-1 min-h-[300px]",
        },
        {
            title: "Offline access to saved recipes",
            description: "Access your recipes anytime, anywhere",
            className: "col-span-1 min-h-[300px]",
        },
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center">
                <div className="section-heading mb-16">
                    <motion.div
                        className="flex justify-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        variants={fadeInUp}
                    >
                        <div className="tag">Key Features</div>
                    </motion.div>
                    <motion.h2
                        className="section-title my-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        variants={fadeInUp}
                    >
                        All-in-One Recipe Management & Meal Planning
                    </motion.h2>
                    <motion.p
                        className="section-description mt-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        variants={fadeInUp}
                    >
                        Streamline your cooking with seamless recipe management,
                        smart meal planning, and personalized suggestions
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-8 max-w-[1120px] mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    variants={fadeInUp}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`bg-gray-100 p-6 rounded-lg flex flex-col justify-end min-h-[250px] ${feature.className}`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.8 + index * 0.1,
                            }}
                            variants={fadeInUp}
                        >
                            <h3 className="text-xl font-semibold mb-2">
                                {feature.title}
                            </h3>
                            <p>{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
