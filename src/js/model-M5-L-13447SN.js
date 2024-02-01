// import { async } from 'regenerator-runtime';
// export const state = {
//     recipe: {},
// };

// export const loadRecipe = async function (id) {
//     try {
//         const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
//         const data = await res.json();
//         if (!res.ok) throw new Error(`${data.message} (${res.status})`);
//         const { recipe } = data.data;
//         state.recipe = {
//             id: recipe.id,
//             publisher: recipe.publisher,
//             ingredients: recipe.ingredients,
//             sourceUrl: recipe.source_url,
//             image: recipe.image_url,
//             title: recipe.title,
//             servings: recipe.servings,
//             cookingTime: recipe.cooking_time,
//         };
//         console.log(state.recipe);
//     }
//     catch (err) {
//         alert(err);
//     }
// };

export const loadSearchResults = async function (query) {
    try {
        const data = await fetch(`${API_URL}?search=${query}`);
        const ans = data.json();
        const { res } = ans.ans;
        res = {
            id: res.id,
            publisher: res.publisher,
            imageUrl: res.image_url,
            title: res.title,


        }
    }
    catch (err) {
        alert(err);
    }
}
loadSearchResults('pizza');