import { async } from 'regenerator-runtime';

export const state = {
    recipe: {},
};

export const loadRecipe = async function (id) {
    try {
        let res = await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/{id}");
        let data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        const { recipe } = data.data;
        recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recip.publisher,
            ingredients: recipe.ingredients,
            sourceUrl: recipe.source_url
        }
        console.log(state.recipe);
    }
    catch (err) {
        alert(err);
    }

};