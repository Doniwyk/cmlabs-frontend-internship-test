$(document).ready(function() {
    fetchRandomRecipes(3, function(err, meals) {
        if (err) {
            alert(err);
            return;
        }

        $('#left-recipe-img').attr('src', meals[0].strMealThumb);
        $('#left-recipe-title').text(meals[0].strMeal);
        $('.featured-recipe-left').attr('onclick', `goToMealDetail('${meals[0].idMeal}')`);

        $('#center-recipe-img').attr('src', meals[1].strMealThumb);
        $('#center-recipe-title').text(meals[1].strMeal);
        $('.featured-recipe-center').attr('onclick', `goToMealDetail('${meals[1].idMeal}')`);

        $('#right-recipe-img').attr('src', meals[2].strMealThumb);
        $('#right-recipe-title').text(meals[2].strMeal);
        $('.featured-recipe-right').attr('onclick', `goToMealDetail('${meals[2].idMeal}')`);
    });
});

function fetchRandomRecipes(count, callback) {
    // Fetch a random selection of categories first
    fetchCategories(function(err, categories) {
        if (err) {
            callback(err, null);
            return;
        }
        
        let allMeals = [];
        let categoryCount = categories.length;

        // Fetch meals from each category and combine them into one array
        categories.forEach(category => {
            fetchMealsByCategory(category.strCategory, function(err, meals) {
                if (err) {
                    callback(err, null);
                    return;
                }

                allMeals = allMeals.concat(meals);
                
                // When all categories are processed, randomly pick count meals
                if (--categoryCount === 0) {
                    let randomMeals = allMeals.sort(() => 0.5 - Math.random()).slice(0, count);
                    callback(null, randomMeals);
                }
            });
        });
    });
}

function goToMealDetail(mealId) {
    window.location.href = `mealDetail.html?meal=${mealId}`;
}