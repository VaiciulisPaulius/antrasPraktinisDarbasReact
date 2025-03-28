import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router";
import { useDummyApi } from "../contexts/DummyApiContext.jsx";
import FavouriteRecipeIcon from "../components/FavouriteRecipeIcon.jsx";

function RecipeDetail() {
    const { id: idParam } = useParams();
    const id = Number(idParam) || 1;

    const { request } = useDummyApi();

    const [recipe, setRecipe] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchRecipe() {
            const res = await request("GET", `/recipes/${id}`);
            if (res) setRecipe(res);
        }

        fetchRecipe();
    }, [id]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            {recipe ? (
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl text-left">
                    <h2 className="text-3xl font-bold mb-6">{recipe.name}</h2>
                    <img src={recipe.image} alt={`Recipe ${recipe.id}`} className="w-full h-auto mb-4" />

                    <div className="flex items-center mb-6">
                        <p className="mr-2 text-gray-700">Cuisine:</p>
                        <span className="text-blue-500 font-semibold">{recipe.cuisine}</span>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-xl font-bold mb-1">Ingredients</h3>
                        <ul className="list-disc pl-5 text-gray-700">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index} className="mb-2">{ingredient}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-xl font-bold mb-1">Instructions</h3>
                        <ol className="list-decimal pl-5 text-gray-700">
                            {recipe.instructions.map((instruction, index) => (
                                <li key={index} className="mb-2">{instruction}</li>
                            ))}
                        </ol>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                        <p className="text-gray-700 font-bold">Servings: {recipe.servings}</p>
                        <p className="text-gray-700 font-bold">Prep Time: {recipe.prepTimeMinutes} min</p>
                        <p className="text-gray-700 font-bold">Cook Time: {recipe.cookTimeMinutes} min</p>
                        <FavouriteRecipeIcon recipeId={recipe.id}/>
                    </div>

                    <button
                        type={"button"}
                        onClick={() => navigate("/recipes/1")}
                        className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 mb-3"
                    >
                        Back to Recipes List
                    </button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default RecipeDetail;