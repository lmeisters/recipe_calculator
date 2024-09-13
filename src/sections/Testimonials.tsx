"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
    {
        text: "FridgeFolio has made my weekly meal planning so much easier. I can find recipes based on what's in my fridge, and the portion adjuster is a game-changer!",
        imageSrc: avatar1.src,
        name: "Emily Parker",
        username: "@emilyinthekitchen",
    },
    {
        text: "As someone who follows a strict gluten-free diet, FridgeFolio's filtering system has been a lifesaver. I can trust that the recipes fit my needs.",
        imageSrc: avatar2.src,
        name: "Dylan Cooper",
        username: "@glutenfreeguy",
    },
    {
        text: "I love how easy it is to save and organize my favorite recipes. The collections feature keeps everything in one place, and I can even share my best finds with friends.",
        imageSrc: avatar3.src,
        name: "Liam Turner",
        username: "@liamsmealprep",
    },
    {
        text: "FridgeFolio's smart ingredient substitution is brilliant! No more last-minute grocery runs when I'm missing an item. It always suggests great alternatives.",
        imageSrc: avatar4.src,
        name: "Michael Brooks",
        username: "@mbrookschef",
    },
    {
        text: "As a fitness enthusiast, tracking my macronutrients is a priority. FridgeFolio Pro's nutrient breakdown feature helps me stay on top of my goals while enjoying delicious meals.",
        imageSrc: avatar5.src,
        name: "Ava Johnson",
        username: "@fitwithava",
    },
    {
        text: "The meal planning and shopping list generator have completely streamlined my grocery shopping. I've saved time and money by sticking to my plan every week.",
        imageSrc: avatar6.src,
        name: "Sophia Martinez",
        username: "@sophiacooks",
    },
    {
        text: "I cook for my family every day, and FridgeFolio makes it so easy to scale recipes to match our needs. Plus, my kids love helping pick out meals with the app!",
        imageSrc: avatar7.src,
        name: "Ethan Sanders",
        username: "@veganvibesethan",
    },
    {
        text: "As a vegan, finding new and exciting recipes can be a challenge, but FridgeFolio's search filters have introduced me to so many delicious options.",
        imageSrc: avatar8.src,
        name: "Chloe Evans",
        username: "@familymealsbychloe",
    },
    {
        text: "The offline access feature is a must for me. I love being able to cook from saved recipes even when I'm in areas without service, like when I'm camping!",
        imageSrc: avatar9.src,
        name: "Joe Hill",
        username: "@joeoutdoors",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
    className?: string;
    testimonials: typeof testimonials;
    duration?: number;
}) => (
    <div className={props.className}>
        <motion.div
            animate={{
                translateY: "-50%",
            }}
            transition={{
                duration: props.duration || 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
            }}
            className="flex flex-col gap-6 pb-6"
        >
            {[...new Array(2)].map((_, columnIndex) => (
                <React.Fragment key={`column-${columnIndex}`}>
                    {props.testimonials.map(
                        (
                            { text, imageSrc, name, username },
                            testimonialIndex
                        ) => (
                            <div
                                className="card"
                                key={`testimonial-${columnIndex}-${testimonialIndex}`}
                            >
                                <div>{text}</div>
                                <div className="flex items-center gap-2 mt-5">
                                    <Image
                                        src={imageSrc}
                                        alt={name}
                                        width={40}
                                        height={40}
                                        className="h-10 w-10 rounded-full"
                                    />
                                    <div className="flex flex-col">
                                        <div className="font-medium tracking-tight leading-5">
                                            {name}
                                        </div>
                                        <div className="leading-5 tracking-tight">
                                            {username}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </React.Fragment>
            ))}
        </motion.div>
    </div>
);

export const Testimonials = () => {
    return (
        <section className="py-20 flex justify-center" id="testimonials">
            <div className="container">
                <div className="section-heading">
                    <div className="flex justify-center">
                        <div className="tag">Testimonials</div>
                    </div>
                    <h2 className="section-title mt-5">What our users say</h2>
                    <p className="section-description mt-5">
                        From intuitive design to powerful features, our app has
                        become an essential tool for users around the world.
                    </p>
                </div>
                <div className="flex justify-center gap-6 mt-10 max-h-[738px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
                    <TestimonialsColumn
                        testimonials={firstColumn}
                        duration={18}
                    />
                    <TestimonialsColumn
                        testimonials={secondColumn}
                        className=" hidden md:block"
                        duration={20}
                    />
                    <TestimonialsColumn
                        testimonials={thirdColumn}
                        className=" hidden lg:block"
                        duration={18}
                    />
                </div>
            </div>
        </section>
    );
};
