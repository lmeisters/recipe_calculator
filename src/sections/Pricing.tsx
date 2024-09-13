"use client";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import CheckIcon from "@/assets/check.svg";

const pricingTiers = [
    {
        title: "Free",
        monthlyPrice: 0,
        buttonText: "Get started for free",
        inverse: false,
        features: [
            "Save a limited number of recipes",
            "Basic ingredient input, recipe saving, and portion scaling",
            "Basic search and filtering (limited to predefined filters)",
        ],
    },
    {
        title: "Pro Chef",
        monthlyPrice: 2,
        buttonText: "Sign up now",
        inverse: true,
        features: [
            "Unlimited recipe saving, editing, and importing from URLs",
            "Calorie and macronutrient breakdown",
            "Smart ingredient substitution",
            "Advanced meal planning and shopping list generation",
            "Access to AI recipe generator and AI image creation",
            "Custom nutrition and portion suggestions based on dietary goals",
            "Personalized recipe recommendations",
            "Offline access to saved recipes and print-friendly recipe views",
            "Enhanced search and filtering (by ingredients, time, and difficulty)",
        ],
    },
];

export const Pricing = () => {
    return (
        <section className="py-20" id="pricing">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center">
                <div className="section-heading mb-16">
                    <div className="flex justify-center">
                        <div className="tag">Pricing</div>
                    </div>
                    <h2 className="section-title my-5">
                        Unlock the Full Potential of Your Kitchen
                    </h2>
                    <p className="section-description mt-5">
                        Get started with the free version for basic features, or
                        upgrade to FridgeFolio Pro Chef Pro for unlimited recipe
                        access, advanced features, and AI-powered tools. Upgrade
                        and transform your cooking today!
                    </p>
                </div>

                <div className="flex lg:flex-row flex-col gap-6 items-center lg:items-start lg:justify-center">
                    {pricingTiers.map(
                        (
                            {
                                title,
                                monthlyPrice,
                                buttonText,
                                inverse,
                                features,
                            },
                            index
                        ) => (
                            <div
                                key={title} // Add this line
                                className={twMerge(
                                    "card",
                                    inverse === true &&
                                        "border-black bg-black text-white"
                                )}
                            >
                                <div className="flex justify-between">
                                    <h3
                                        className={twMerge(
                                            "text-lg font-bold text-black/50",
                                            inverse === true && "text-white/60"
                                        )}
                                    >
                                        {title}
                                    </h3>
                                </div>
                                <div className="flex items-baseline gap-1 mt-[30px]">
                                    <span className="text-4xl font-bold tracking-tighter leading-none">
                                        ${monthlyPrice}
                                    </span>
                                    {typeof monthlyPrice === "number" && (
                                        <span
                                            className={twMerge(
                                                "tracking-tight font-bold text-black/50",
                                                inverse === true &&
                                                    "text-white/60"
                                            )}
                                        >
                                            /month
                                        </span>
                                    )}
                                </div>
                                <button
                                    className={twMerge(
                                        "btn btn-primary w-full mt-[30px]",
                                        inverse === true &&
                                            "bg-white text-black"
                                    )}
                                >
                                    {buttonText}
                                </button>
                                <ul className="flex flex-col gap-5 mt-8">
                                    {features.map((feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            className="text-sm flex items-center gap-4"
                                        >
                                            <CheckIcon className="h-6 w-6" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};
