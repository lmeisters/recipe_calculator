"use client";

import { X, ChevronLeft, Plus, Minus, Camera } from "lucide-react";
import { useState } from "react";

export const CreateRecipeForm = ({ onClose }: { onClose: () => void }) => {
    const [step, setStep] = useState(1);
    const [recipe, setRecipe] = useState({
        name: "",
        photo: null,
        description: "",
        servingSize: 1,
        diet: "",
        time: "",
        mealType: "",
        ingredients: "",
    });

    const updateRecipe = (field: keyof typeof recipe, value: any) => {
        setRecipe((prev) => ({ ...prev, [field]: value }));
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
            <div className="mb-4">
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
                <button className="w-full p-4 border-2 border-dashed rounded-lg text-center">
                    <Camera className="mx-auto mb-2" />
                    Add a Photo
                </button>
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
                onChange={(e) => updateRecipe("ingredients", e.target.value)}
            />
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

    return (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto flex items-center justify-center">
            <div className="max-w-md mx-auto w-full p-4">
                <div className="flex justify-between items-center mb-4">
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
                {renderStepContent()}
                <button
                    className="w-full bg-black text-white py-2 rounded-full mt-4"
                    onClick={() => (step < 4 ? setStep(step + 1) : onClose())}
                >
                    {step < 4 ? "Next" : "Upload"}
                </button>
            </div>
        </div>
    );
};
