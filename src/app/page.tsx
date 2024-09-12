import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Features } from "@/sections/Features";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Pricing } from "@/sections/Pricing";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Features />
            <ProductShowcase />
            <Pricing />
            <CallToAction />
            <Footer />
        </>
    );
}
