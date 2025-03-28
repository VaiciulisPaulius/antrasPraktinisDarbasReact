import React, {useEffect, useState} from 'react'
import {HeartIcon} from "lucide-react";
import {useProfile} from "../contexts/ProfileContext.jsx";

function FavouriteRecipeIcon({ recipeId }) {
    const [isFavourite, setIsFavourite] = useState(false)
    const { getRecipeFavourite, removeRecipeFavourite, addRecipeFavourite } = useProfile()

    useEffect(() => {
        const getRecipe = async () => {
            const recipe = await getRecipeFavourite(recipeId)
            if(recipe.length != 0) setIsFavourite(true)
        }
        getRecipe()
    }, []);

    const favouriteColor = "#3e9392"
    const greyedColor = "#555555"

    const handleClick = async () => {
        console.log(isFavourite)
        if(isFavourite) {
            await removeRecipeFavourite(recipeId)
            setIsFavourite(false)
        }
        else {
            console.log("A")
            await addRecipeFavourite(recipeId)
            setIsFavourite(true)
        }
    }
    return (
        <div>
            <HeartIcon className={"cursor-pointer"} color={isFavourite ? favouriteColor : greyedColor} size={18} onClick={() => handleClick()}/>
        </div>
    )
}

export default FavouriteRecipeIcon
