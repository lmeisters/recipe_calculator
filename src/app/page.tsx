import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Features } from "@/sections/Features";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Pricing } from "@/sections/Pricing";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <SmoothScroll>
                <main className="flex-grow">
                    <Hero />
                    <Features />
                    <ProductShowcase />
                    <Pricing />
                    <CallToAction />
                </main>
            </SmoothScroll>
            <Footer />
        </div>
    );
}
