"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQItem: React.FC<{ question: string; answer: string }> = ({
    question,
    answer,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-medium">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className="w-6 h-6" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p className="mt-2 text-gray-600">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const FAQ = () => {
    const faqData = [
        {
            question: "Can I import recipes from other websites?",
            answer: "Yes, with FridgeFolio Pro, you can easily import recipes from any URL.",
        },
        {
            question: "How does the portion adjuster work?",
            answer: "Simply select the number of servings you need, and the app will automatically adjust ingredient quantities.",
        },
        {
            question: "Can I use the app offline?",
            answer: "Yes, FridgeFolio Pro allows offline access to saved recipes.",
        },
        {
            question: "Can I filter recipes for specific dietary needs?",
            answer: "Yes, you can filter recipes for various dietary preferences like vegetarian, vegan, gluten-free, low-carb, and more.",
        },
        {
            question: "How does FridgeFolio handle ingredient substitutions?",
            answer: "FridgeFolio suggests smart ingredient substitutions for missing or dietary-specific ingredients, ensuring you can always cook with what you have.",
        },
    ];

    return (
        <section className="py-20 flex justify-center" id="faq">
            <div className="container">
                <div className="section-heading mb-16">
                    <div className="flex justify-center">
                        <div className="tag">FAQ</div>
                    </div>
                    <h2 className="section-title my-5">
                        Frequently Asked Questions
                    </h2>
                    {/* <p className="section-description mt-5">
                        
                    </p> */}
                </div>
                <div className="max-w-2xl mx-auto p-4 bg-white text-black">
                    {faqData.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
