"use client";

import { useState, useEffect } from "react";
import { CreateRecipeForm } from "@/components/CreateRecipeForm";
import {
    Search,
    User,
    Plus,
    Calculator,
    ShoppingCart,
    Clock,
} from "lucide-react";
import axios from "axios";

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
            const response = await axios.get(
                "http://localhost:5000/api/recipes"
            );
            setRecipes(response.data);
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };

    const handleRecipeCreated = (newRecipe: Recipe) => {
        setRecipes((prev) => [...prev, newRecipe]);
    };

    return (
        <div className="max-w-md md:max-w-4xl mx-auto bg-gray-100 min-h-screen flex flex-col">
            <header className="bg-white p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">FridgeFolio</h1>
                <User className="w-6 h-6 border border-black rounded-full p-1" />
            </header>

            <main className="flex-grow p-4 overflow-y-auto flex flex-col md:gap-8">
                <div className="md:flex-grow">
                    <h2 className="text-3xl font-bold">Hi Linards!</h2>
                    <p className="text-xl mb-4">Welcome Back</p>

                    <div className="flex gap-2 mb-4">
                        <button
                            className="bg-black text-white px-4 py-2 rounded-full flex items-center"
                            onClick={() => setShowForm(true)}
                        >
                            <Plus className="w-4 h-4 mr-2" /> New recipe
                        </button>
                        <button className="border border-black px-4 py-2 rounded-full flex items-center">
                            <Calculator className="w-4 h-4 mr-2" /> Calculate
                        </button>
                    </div>

                    <div className="relative mb-4">
                        <input
                            type="text"
                            placeholder="Search for recipes or ingredient"
                            className="w-full p-4 pl-10 border rounded-lg"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>

                    <div className="flex gap-4 mb-4 overflow-x-auto pb-2 scrollbar-hide justify-center">
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
                                <div className="w-16 h-16 bg-gray-300 rounded-lg mb-1 "></div>
                                <span className="text-sm">{meal}</span>
                            </div>
                        ))}
                    </div>

                    <div className="pb-4 sm:overflow-x-hidden">
                        <div className="flex gap-4 md:flex-wrap md:justify-start">
                            {recipes.map((recipe, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-4 rounded-lg shadow w-48 flex-shrink-0"
                                >
                                    {recipe.photo && (
                                        <img
                                            src={`http://localhost:5000${recipe.photo}`}
                                            alt={recipe.name}
                                            className="w-full h-32 object-cover rounded-lg mb-2"
                                        />
                                    )}
                                    <h3 className="font-semibold">
                                        {recipe.name}
                                    </h3>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <Clock className="w-4 h-4 mr-1" />
                                        <span>{recipe.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="md:w-80 md:flex-shrink-0">
                    <div className="bg-white p-4 rounded-lg shadow-inner mt-4 md:mt-0">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <ShoppingCart className="w-5 h-5" />
                                <span className="font-semibold">
                                    Shopping list
                                </span>
                            </div>
                            <button className="text-sm text-gray-500">
                                Edit
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
