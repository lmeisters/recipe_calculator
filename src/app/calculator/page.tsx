// "use client";

// import { useState } from "react";
// import Link from "next/link";

// interface Ingredient {
//     amount: number;
//     unit: string;
//     name: string;
// }

// export default function Calculator() {
//     const [recipeText, setRecipeText] = useState<string>("");
//     const [portions, setPortions] = useState<number>(1);
//     const [ingredients, setIngredients] = useState<Ingredient[]>([]);

//     const parseIngredients = (text: string): Ingredient[] => {
//         const lines = text.split("\n");
//         return lines
//             .map((line) => {
//                 const match = line.match(/^([\d.]+)\s*(\w+)\s+(.+)/);
//                 if (match) {
//                     return {
//                         amount: parseFloat(match[1]),
//                         unit: match[2],
//                         name: match[3].trim(),
//                     };
//                 }
//                 return null;
//             })
//             .filter(
//                 (ingredient): ingredient is Ingredient => ingredient !== null
//             );
//     };

//     const handleRecipeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//         setRecipeText(e.target.value);
//         setIngredients(parseIngredients(e.target.value));
//     };

//     const handlePortionsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setPortions(parseFloat(e.target.value) || 1);
//     };

//     return (
//         <main>
//             <nav>
//                 <Link href="/">Back to Home</Link>
//             </nav>
//             <h1>Recipe Calculator</h1>
//             <div>
//                 <label htmlFor="recipe">
//                     Enter your recipe (one ingredient per line):
//                 </label>
//                 <textarea
//                     id="recipe"
//                     rows={10}
//                     value={recipeText}
//                     onChange={handleRecipeChange}
//                     placeholder="1 cup flour&#10;2 tbsp sugar&#10;0.5 tsp salt"
//                 />
//             </div>
//             <div>
//                 <label htmlFor="portions">Desired portions:</label>
//                 <input
//                     type="number"
//                     id="portions"
//                     value={portions}
//                     onChange={handlePortionsChange}
//                     min="1"
//                     step="0.1"
//                 />
//             </div>
//             <div>
//                 <h2>Calculated Ingredients:</h2>
//                 <ul>
//                     {ingredients.map((ingredient, index) => (
//                         <li key={index}>
//                             {(ingredient.amount * portions).toFixed(2)}{" "}
//                             {ingredient.unit} {ingredient.name}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </main>
//     );
// }
