import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Features } from "@/sections/Features";
import { ProductShowcase } from "@/sections/ProductShowcase";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Features />
            <ProductShowcase />
        </>
    );
}
