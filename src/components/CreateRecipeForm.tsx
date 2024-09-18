"use client";

import React, { useState, ChangeEvent } from "react";
import { X, ChevronLeft, Plus, Minus, Camera, AlertCircle } from "lucide-react";
import axios from "axios";
import { ingredientDatabase } from "../data/ingredientDatabase";

interface Recipe {
    name: string;
    photo: File | null;
    description: string;
    servingSize: number;
    diet: string;
    time: string;
    mealType: string;
    ingredients: string;
}

interface IngredientItem {
    type: "ingredient" | "section";
    ingredient?: string;
    amount?: string;
    unit?: string;
    description?: string;
    category?: string;
    section?: string | null;
    name?: string;
}

type EditableIngredientFields = Exclude<keyof IngredientItem, "type">;

export const CreateRecipeForm = ({
    onClose,
    onRecipeCreated,
}: {
    onClose: () => void;
    onRecipeCreated: (recipe: Recipe) => void;
}) => {
    const [step, setStep] = useState(1);
    const [recipe, setRecipe] = useState<Recipe>({
        name: "",
        photo: null,
        description: "",
        servingSize: 1,
        diet: "",
        time: "",
        mealType: "",
        ingredients: "",
    });
    const [parsedIngredients, setParsedIngredients] = useState<
        IngredientItem[]
    >([]);
    const [parsingErrors, setParsingErrors] = useState<string[]>([]);
    const [isEditing, setIsEditing] = useState(false);

    const updateRecipe = (field: keyof Recipe, value: any) => {
        setRecipe((prev) => ({ ...prev, [field]: value }));
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            updateRecipe("photo", e.target.files[0]);
        }
    };

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            Object.entries(recipe).forEach(([key, value]) => {
                if (value !== null) {
                    formData.append(key, value);
                }
            });

            const response = await axios.post<Recipe>(
                "http://localhost:5000/api/recipes",
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );

            console.log("Recipe created:", response.data);
            onRecipeCreated(response.data);
            onClose();
        } catch (error) {
            console.error("Error creating recipe:", error);
        }
    };

    const renderStepIndicator = () => (
        <div className="flex justify-center space-x-2 mb-4">
            {[1, 2, 3, 4].map((i) => (
                <div
                    key={i}
                    className={`w-12 h-1 rounded ${
                        i <= step ? "bg-black" : "bg-gray-300"
                    }`}
                />
            ))}
        </div>
    );

    const renderStep1 = () => (
        <>
            <div className="mb-4 my-10">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Recipe Name
                </label>
                <input
                    type="text"
                    placeholder="E.g. Creamy Cajun Chicken"
                    className="w-full p-2 border rounded"
                    value={recipe.name}
                    onChange={(e) => updateRecipe("name", e.target.value)}
                />
                <div className="text-right text-xs text-gray-500">0/50</div>
            </div>
            <div className="mb-4">
                <label
                    htmlFor="photo-upload"
                    className="w-full p-4 border-2 border-dashed rounded-lg text-center cursor-pointer h-64 flex flex-col items-center justify-center"
                >
                    <Camera className="mx-auto mb-2" />
                    Add a Photo
                </label>
                <input
                    id="photo-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                />
            </div>
        </>
    );

    const renderStep2 = () => (
        <>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                </label>
                <textarea
                    placeholder="Cooking instructions"
                    className="w-full p-2 border rounded h-32"
                    value={recipe.description}
                    onChange={(e) =>
                        updateRecipe("description", e.target.value)
                    }
                />
                <div className="text-right text-xs text-gray-500">0/500</div>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Serving size
                </label>
                <div className="flex items-center justify-center">
                    <button
                        className="p-2 border rounded-l"
                        onClick={() =>
                            updateRecipe(
                                "servingSize",
                                Math.max(1, recipe.servingSize - 1)
                            )
                        }
                    >
                        <Minus size={16} />
                    </button>
                    <input
                        type="number"
                        className="w-16 p-1 border rounded-md text-center mx-2"
                        value={recipe.servingSize}
                        onChange={(e) =>
                            updateRecipe(
                                "servingSize",
                                Math.max(1, parseInt(e.target.value) || 1)
                            )
                        }
                        min="1"
                    />
                    <button
                        className="p-2 border rounded-r"
                        onClick={() =>
                            updateRecipe(
                                "servingSize",
                                Math.min(99, recipe.servingSize + 1)
                            )
                        }
                    >
                        <Plus size={16} />
                    </button>
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Diet:
                </label>
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={recipe.diet}
                    onChange={(e) => updateRecipe("diet", e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Time:
                </label>
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={recipe.time}
                    onChange={(e) => updateRecipe("time", e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Meal Type:
                </label>
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={recipe.mealType}
                    onChange={(e) => updateRecipe("mealType", e.target.value)}
                />
            </div>
        </>
    );

    const renderStep3 = () => (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Ingredients
            </label>
            <textarea
                placeholder="Add ingredients E.g. Chicken 250g"
                className="w-full p-2 border rounded h-64"
                value={recipe.ingredients}
                onChange={(e) => {
                    updateRecipe("ingredients", e.target.value);
                    parseIngredients(e.target.value);
                }}
            />
            {renderParsedIngredients()}
            {renderParsingErrors()}
        </div>
    );

    const renderStep4 = () => (
        <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Recipe Preview</h2>
            <p>Your recipe is ready to be uploaded!</p>
        </div>
    );

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return renderStep1();
            case 2:
                return renderStep2();
            case 3:
                return renderStep3();
            case 4:
                return renderStep4();
            default:
                return null;
        }
    };

    const sanitizeInput = (input: string) => {
        return input.replace(/[^a-zA-Z0-9\s.,;:!?()]/g, "");
    };

    const parseIngredients = (input: string) => {
        const sanitizedInput = sanitizeInput(input);
        const lines = sanitizedInput.split("\n");
        const parsed: IngredientItem[] = [];
        const errors: string[] = [];
        let currentSection: string | null = null;

        lines.forEach((line, index) => {
            line = line.trim();
            if (line === "") return;

            if (
                line.toLowerCase().startsWith("for the") ||
                line.toLowerCase().startsWith("for") ||
                line.toLowerCase().startsWith("to serve")
            ) {
                currentSection = line;
                parsed.push({ type: "section", name: currentSection });
                return;
            }

            // Handle "juice of" or "juiced" ingredients
            const juiceMatch = line.match(/^(?:juice of|juiced)\s+(.+)$/i);
            if (juiceMatch) {
                const { recognizedIngredient, category } = recognizeIngredient(
                    juiceMatch[1]
                );
                parsed.push({
                    type: "ingredient",
                    ingredient: recognizedIngredient,
                    amount: "juice of",
                    unit: "",
                    description: "",
                    category,
                    section: currentSection,
                });
                return;
            }

            // Handle "1 ingredient, juiced" case
            const juicedMatch = line.match(/^(\d+)\s+(.+),\s*juiced$/i);
            if (juicedMatch) {
                const [_, amount, ingredientRaw] = juicedMatch;
                const { recognizedIngredient, category } =
                    recognizeIngredient(ingredientRaw);
                parsed.push({
                    type: "ingredient",
                    ingredient: recognizedIngredient,
                    amount,
                    unit: "",
                    description: "juiced",
                    category,
                    section: currentSection,
                });
                return;
            }

            // Handle one-word ingredients
            if (!line.includes(" ")) {
                const { recognizedIngredient, category } =
                    recognizeIngredient(line);
                parsed.push({
                    type: "ingredient",
                    ingredient: recognizedIngredient,
                    amount: "",
                    unit: "",
                    description: "",
                    category,
                    section: currentSection,
                });
                return;
            }

            // Match pattern: [amount] [unit] ingredient, description
            const match = line.match(
                /^((?:\d+(?:\/\d+)?|\d*\.?\d+)?\s*(?:\w+)?)?\s*(.+?)(?:,\s*(.+))?$/i
            );

            if (match) {
                let [_, amountAndUnit, ingredientRaw, description = ""] = match;

                let amount = "";
                let unit = "";

                if (amountAndUnit) {
                    const amountUnitMatch = amountAndUnit.match(
                        /^(\d+(?:\/\d+)?|\d*\.?\d+)?\s*(\w+)?$/
                    );
                    if (amountUnitMatch) {
                        amount = amountUnitMatch[1] || "";
                        unit = amountUnitMatch[2] || "";
                    }
                }

                const { recognizedIngredient, category } = recognizeIngredient(
                    ingredientRaw.trim()
                );

                parsed.push({
                    type: "ingredient",
                    ingredient: recognizedIngredient,
                    amount,
                    unit,
                    description: description.trim(),
                    category,
                    section: currentSection,
                });
            } else {
                errors.push(`Line ${index + 1}: Unable to parse "${line}"`);
            }
        });

        setParsedIngredients(parsed);
        setParsingErrors(errors);
    };

    const recognizeIngredient = (input: string) => {
        const lowerInput = input.toLowerCase();
        for (const [key, data] of Object.entries(ingredientDatabase)) {
            if (
                lowerInput.includes(key) ||
                data.variations.some((v) => lowerInput.includes(v)) ||
                data.misspellings.some((m) => lowerInput.includes(m)) ||
                data.alternatives.some((a) => lowerInput.includes(a))
            ) {
                return { recognizedIngredient: input, category: data.category };
            }
        }
        return { recognizedIngredient: input, category: "Other" };
    };

    const handleEditToggle = () => {
        if (isEditing) {
            const updatedIngredients = parsedIngredients
                .map((item) => {
                    if (item.type === "section") return item.name;
                    return `${item.amount} ${item.unit} ${item.ingredient}${
                        item.description ? ", " + item.description : ""
                    }`;
                })
                .join("\n");
            setRecipe((prev) => ({ ...prev, ingredients: updatedIngredients }));
            parseIngredients(updatedIngredients);
        }
        setIsEditing(!isEditing);
    };

    const handleIngredientChange = (
        index: number,
        field: EditableIngredientFields,
        value: string
    ) => {
        const newParsedIngredients = [...parsedIngredients];
        if (field === "ingredient") {
            value = value.replace(/:$/, ""); // Remove colon at the end if present
        }
        (newParsedIngredients[index] as any)[field] = sanitizeInput(value);
        setParsedIngredients(newParsedIngredients);
    };

    const renderIngredientItem = (item: IngredientItem, index: number) => {
        if (item.type === "section") {
            return (
                <li key={index} className="font-bold mt-4 mb-2">
                    {item.name}
                </li>
            );
        }

        const capitalizedIngredient = item.ingredient
            ? item.ingredient.charAt(0).toUpperCase() +
              item.ingredient.slice(1) +
              ":"
            : "";

        if (isEditing) {
            return (
                <li key={index} className="mb-2 flex items-center space-x-2">
                    <input
                        value={capitalizedIngredient}
                        onChange={(e) =>
                            handleIngredientChange(
                                index,
                                "ingredient",
                                e.target.value
                            )
                        }
                        className="flex-grow border rounded-xl px-2 py-1"
                    />
                    <input
                        value={item.amount}
                        onChange={(e) =>
                            handleIngredientChange(
                                index,
                                "amount",
                                e.target.value
                            )
                        }
                        className="w-20 border rounded px-2 py-1"
                    />
                    <input
                        value={item.unit}
                        onChange={(e) =>
                            handleIngredientChange(
                                index,
                                "unit",
                                e.target.value
                            )
                        }
                        className="w-20 border rounded px-2 py-1"
                    />
                    <input
                        value={item.description}
                        onChange={(e) =>
                            handleIngredientChange(
                                index,
                                "description",
                                e.target.value
                            )
                        }
                        className="flex-grow border rounded px-2 py-1"
                    />
                </li>
            );
        }

        return (
            <li key={index} className="mb-2">
                <span className="font-semibold">{capitalizedIngredient}</span>
                {item.amount && <span className="ml-2">{item.amount}</span>}
                {item.unit && <span className="ml-1">{item.unit}</span>}
                {item.description && (
                    <span className="ml-2 text-gray-600">
                        ({item.description})
                    </span>
                )}
                <span className="ml-2 bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                    {item.category}
                </span>
            </li>
        );
    };

    const renderParsedIngredients = () => (
        <div className="mt-4 border rounded-lg">
            <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-lg font-semibold">Ingredient Preview</h3>
                <button
                    onClick={handleEditToggle}
                    className="px-4 py-2 bg-black text-white rounded-lg"
                >
                    {isEditing ? "Save" : "Edit"}
                </button>
            </div>
            <div className="p-4">
                <ul>
                    {parsedIngredients.map((item, index) =>
                        renderIngredientItem(item, index)
                    )}
                </ul>
            </div>
        </div>
    );

    const renderParsingErrors = () => {
        if (parsingErrors.length === 0) return null;
        return (
            <div className="mt-4 border border-red-500 rounded-lg p-4 bg-red-100">
                <AlertCircle className="h-4 w-4" />
                <h4 className="font-semibold text-red-700">Parsing Errors</h4>
                <div>
                    <ul>
                        {parsingErrors.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    };

    return (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto flex items-center justify-center">
            <div className="max-w-md w-full pb-4 flex flex-col h-screen">
                <div className="flex justify-between items-center mb-4 rounded-b-lg p-8 bg-green-300">
                    <button
                        onClick={() =>
                            step > 1 ? setStep(step - 1) : onClose()
                        }
                    >
                        <ChevronLeft />
                    </button>
                    <h1 className="text-lg font-bold">
                        Create Recipe {step}/4
                    </h1>
                    <button onClick={onClose}>
                        <X />
                    </button>
                </div>
                {renderStepIndicator()}
                <div className="flex-grow overflow-y-auto">
                    {renderStepContent()}
                </div>
                <button
                    className="w-full bg-black text-white py-2 rounded-full mt-4"
                    onClick={() =>
                        step < 4 ? setStep(step + 1) : handleSubmit()
                    }
                >
                    {step < 4 ? "Next" : "Upload"}
                </button>
            </div>
        </div>
    );
};
