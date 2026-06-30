// #HmvAfRQM
//
// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
const recipersDiv = document.getElementById('recipers');
const cartsDiv = document.getElementById('carts');
fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(cartsObject => {
        const {carts} = cartsObject;
        console.log(carts);

        for (let cart of carts) {
            const div = document.createElement('div');
            div.classList.add('cart-container');
            const divWithInfo = document.createElement('div');
            divWithInfo.innerText = `
            total: ${cart.total},
            discountedTotal: ${cart.discountedTotal},
            userId: ${cart.userId},
            totalProducts: ${cart.totalProducts},
            totalQuantity: ${cart.totalQuantity}
            `;

            const ol = document.createElement('ol');
            for (let product of cart.products) {
                const li = document.createElement('li');
                li.innerText = `
                    id: ${product.id},
                    title: ${product.title},
                    price: ${product.price},
                    discountPercentage: ${product.discountPercentage},
                    discountedTotal: ${product.discountedTotal},
                    quantity: ${product.quantity},
                    total: ${product.total},
                `;

                const img = document.createElement('img');
                img.src = product.thumbnail;
                li.appendChild(img)
                ol.appendChild(li);
            }

            div.append(divWithInfo, ol);
            cartsDiv.appendChild(div);
        }
        
    })
// discountedTotal: 11510.81
// id: 1
// total: 13037.88
// totalProducts: 4
// totalQuantity: 12
// userId: 1

// #whXxOBlYS0H
// //
// // – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.

fetch('https://dummyjson.com/recipes')
.then(value => value.json())
.then(recipesObject => {
    const {recipes} = recipesObject;
    console.log(recipes);

    for (let recipe of recipes) {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe-container');
        const recipeInfo = document.createElement('div');
        recipeInfo.innerText = `
            Name: ${recipe.name}
            Calories Per Serving: ${recipe.caloriesPerServing}
            Cook Time Minutes: ${recipe.cookTimeMinutes}
            Cuisine: ${recipe.cuisine} 
            Difficulty: ${recipe.difficulty}
            Id: ${recipe.id}  
            mealType: ${recipe.mealType}
            prepTimeMinutes: ${recipe.prepTimeMinutes}
            rating: ${recipe.rating}
            reviewCount: ${recipe.reviewCount}
            servings: ${recipe.servings}
            tags: ${recipe.tags}
            userId: ${recipe.userId}      
        `;

        const imgRecipe = document.createElement('img');
        imgRecipe.src = recipe.image;
        imgRecipe.classList.add('recipe-img');

        const olReciper = document.createElement('ol');
        for (let ingredient of recipe.ingredients) {
            const liReciper = document.createElement('li');
            liReciper.innerText = ingredient;
            olReciper.appendChild(liReciper);
        }

        const divInstructions = document.createElement('div');
        for (let i of recipe.instructions) {
            const pInstructions = document.createElement('p');
            pInstructions.innerText = i;
            divInstructions.appendChild(pInstructions);
        }


        recipeDiv.append(recipeInfo, imgRecipe, olReciper, divInstructions);
        recipersDiv.appendChild(recipeDiv);
    }
})




// mealType:['Dinner']
// prepTimeMinutes:20
// rating:4.6
// reviewCount:98
// servings:4
// tags:(2) ['Pizza', 'Italian']
// userId:166