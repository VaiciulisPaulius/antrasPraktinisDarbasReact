import React, { useEffect, useState } from 'react';
import { useDummyApi } from "/src/contexts/DummyApiContext.jsx";
import {useNavigate, useParams} from "react-router";
import RecipeCard from "../components/RecipeCard.jsx";
import {useProfile} from "../contexts/ProfileContext.jsx";

function RecipeList({ showOnlyFavourites }) {
    const { request } = useDummyApi();
    const { getAllRecipeFavourites } = useProfile()
    const [recipes, setRecipes] = useState([]);

    const { page: pageParam } = useParams();
    const page = Number(pageParam) || 1;

    const [limit, setLimit] = useState(5);

    const [total, setTotal] = useState(0);

    const navigate = useNavigate();

    const calculateSkip = () => {
        if(page < 0) return;
        const skip = (limit * page) - limit;
        return skip
    }

    const goToPage = targetPage => {
        if(showOnlyFavourites == false) navigate("/recipes/" + targetPage);
        else navigate("/favourites/" + targetPage);
    }

    useEffect(() => {
        async function fetchRecipes() {
            try {
                let res;
                console.log(showOnlyFavourites)
                if(showOnlyFavourites == false) res = await request("GET", `/recipes?limit=${limit}&skip=${calculateSkip()}`);
                else {
                    res = await getAllRecipeFavourites()
                    console.log(res)
                }

                const recipesArray = res?.recipes
                if (recipesArray && Array.isArray(recipesArray)) {
                    setRecipes(recipesArray);
                }
                else if(res && Array.isArray(res)) {
                    setRecipes(res);
                }
                if(res.total) setTotal(res.total);
            } catch (error) {
                console.error('Failed to fetch recipes:', error);
            }
        }

        fetchRecipes();
    }, [page]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            {recipes.length > 0 ? (
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl flex flex-col gap-4">
                    <h2 className="text-2xl font-bold mb-6 text-center">Recipe List</h2>
                    {recipes.map((recipe) => (
                        <RecipeCard recipe={recipe} key={recipe.id}/>
                    ))}
                    <div className="flex justify-center items-center gap-2 mt-4">
                        <button onClick={() => goToPage(parseInt(page)-1)} disabled={page === 1}
                                className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50">
                            Prev
                        </button>
                        <span className="text-lg font-medium">Page {page} of {Math.ceil(total / limit)}</span>
                        <button onClick={() => goToPage(parseInt(page)+1)} disabled={page === Math.ceil(total / limit)}
                                className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50">
                            Next
                        </button>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default RecipeList;