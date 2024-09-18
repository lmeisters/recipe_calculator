"use client";

import { useState, useEffect } from "react";
import { CreateRecipeForm } from "@/components/CreateRecipeForm";
import { Search, User, Plus, ShoppingCart, Clock } from "lucide-react";
import axios from "axios";
import Link from "next/link";

interface Recipe {
    name: string;
    photo?: string;
    time: string;
}

interface CreateRecipeFormProps {
    onClose: () => void;
    onRecipeCreated: (newRecipe: Recipe) => void;
}

export const RecipeCalculator = () => {
    const [showForm, setShowForm] = useState(false);

    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const apiUrl =
                process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
            const response = await axios.get(`${apiUrl}/api/recipes`);
            setRecipes(response.data);
        } catch (error) {
            console.error("Error fetching recipes:", error);
            // Fallback to mock data when API is not available
            setRecipes([
                { name: "Mock Recipe 1", time: "30 min" },
                { name: "Mock Recipe 2", time: "45 min" },
                { name: "Mock Recipe 3", time: "30 min" },
                { name: "Mock Recipe 4", time: "45 min" },
                { name: "Mock Recipe 1", time: "30 min" },
                { name: "Mock Recipe 2", time: "45 min" },
                { name: "Mock Recipe 3", time: "30 min" },
                { name: "Mock Recipe 4", time: "45 min" },
                // Add more mock recipes as needed
            ]);
        }
    };

    const handleRecipeCreated = (newRecipe: Recipe) => {
        setRecipes((prev) => [...prev, newRecipe]);
    };

    return (
        <div className="max-w-md md:max-w-4xl mx-auto min-h-screen flex flex-col">
            <header className="bg-white py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    FridgeFolio
                </Link>
                <div className="flex items-center gap-4">
                    <User className="w-8 h-8 border border-black rounded-xl p-1.5" />
                    <button
                        className="bg-black text-white px-4 py-2 rounded-lg flex items-center"
                        onClick={() => setShowForm(true)}
                    >
                        <Plus className="w-4 h-4 mr-2" /> New recipe
                    </button>
                </div>
            </header>

            <main className="flex-grow overflow-y-auto pt-6">
                <div className="md:flex-grow">
                    <h2 className="text-3xl font-bold md:text-5xl">
                        Hi Linards!
                    </h2>
                    <p className="text-xl mb-4">Welcome Back</p>

                    <div className="relative mb-4">
                        <input
                            type="text"
                            placeholder="Search for recipes or ingredient"
                            className="w-full p-4 pl-10 border rounded-lg"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>

                    <div className="flex gap-4 mb-4 overflow-x-auto pb-2 scrollbar-hide justify-center font-semibold">
                        {[
                            "Breakfast",
                            "Lunch",
                            "Dinner",
                            "Snack",
                            "Desert",
                        ].map((meal) => (
                            <div
                                key={meal}
                                className="flex-shrink-0 text-center"
                            >
                                <div className="w-16 h-16 rounded-lg mb-1 border border-gray-300"></div>
                                <span className="text-sm">{meal}</span>
                            </div>
                        ))}
                    </div>

                    <div className="pb-4 sm:overflow-x-hidden">
                        <div className="flex gap-4 md:justify-start">
                            {recipes.map((recipe, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-4 rounded-lg w-48 md:w-64 lg:w-96 lg:h-96 flex-shrink-0 flex flex-col justify-between border border-gray-300 shadow-md"
                                >
                                    <div>
                                        <img
                                            src={
                                                recipe.photo ||
                                                "https://via.placeholder.com/150"
                                            }
                                            alt={recipe.name}
                                            className="w-full h-32 md:h-40 lg:h-56 object-cover rounded-lg mb-2"
                                        />

                                        <h3 className="font-semibold text-sm md:text-base lg:text-xl mt-4">
                                            {recipe.name}
                                        </h3>
                                    </div>
                                    <div className="flex items-center text-sm md:text-base text-gray-500">
                                        <Clock className="w-4 h-4 mr-1 md:w-5 md:h-5" />
                                        <span>{recipe.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="md:w-auto md:flex-shrink-0">
                    <div className="bg-white p-4 rounded-lg mt-4 md:mt-0 border border-gray-300 shadow-md">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <ShoppingCart className="w-5 h-5" />
                                <span className="font-semibold">
                                    Shopping list
                                </span>
                            </div>
                            <button className="text-sm text-gray-500 border border-gray-500 rounded-lg p-1 bg-black">
                                <Plus className="w-4 h-4 text-white" />
                            </button>
                        </div>
                        <ul className="space-y-2">
                            {[
                                "90g Sour Cream",
                                "10g Honey",
                                "200ml Milk",
                                "250g Chicken",
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-2"
                                >
                                    <input
                                        type="checkbox"
                                        className="rounded"
                                    />
                                    <span className="flex-grow">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
            {showForm && (
                <CreateRecipeForm
                    onClose={() => setShowForm(false)}
                    onRecipeCreated={handleRecipeCreated}
                />
            )}
        </div>
    );
};
