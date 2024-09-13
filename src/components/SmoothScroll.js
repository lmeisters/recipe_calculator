"use client";

import { useScroll, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const SmoothScroll = ({ children }) => {
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.7,
        stiffness: 200,
        damping: 15,
    });

    const transform = useTransform(smoothProgress, [0, 1], [0, -100]);

    return <motion.div style={{ y: transform }}>{children}</motion.div>;
};

export default SmoothScroll;
