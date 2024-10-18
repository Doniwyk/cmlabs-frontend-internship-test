$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const mealId = urlParams.get('meal');

    fetchMealDetails(mealId, function(err, meal) {
        if (err) {
            alert(err);
            return;
        }

        $('#meal-name, #meal-title').text(meal.strMeal);

        const categoryLink = $('#category-link');
        categoryLink.attr('data-category', meal.strCategory);
        categoryLink.text(meal.strCategory);
        categoryLink.attr('href', `categoryDetail.html?category=${meal.strCategory}`);
        
        const foodOrigin = meal.strArea ? `${meal.strArea} food` : 'Unknown food origin';
        $('#meal-origin').text(foodOrigin);
        $('#meal-image').attr('src', meal.strMealThumb);

        // Display instructions
        const instructionsSteps = meal.strInstructions.split(/\r\n/);
        let instructionsHTML = '';
        instructionsSteps.forEach(step => {
            if (step.trim()) {
                instructionsHTML += `
                    <span class="block mb-2 text-gray-700">${step}</span>
                    <hr class="border-t border-gray-300 mb-5">
                `;
            }
        });
        $('#meal-instructions').html(instructionsHTML);

        // Display ingredients
        let ingredientsHTML = '<div class="grid grid-cols-1 md:grid-cols-2 gap-2">';
        for (let i = 1; i <= 20; i++) {
            let ingredient = meal[`strIngredient${i}`];
            let measure = meal[`strMeasure${i}`];
            if (ingredient) {
                ingredientsHTML += `
                    <span class="bg-slate-50 border border-slate-50 rounded-lg p-4 shadow hover:shadow-lg transition-shadow">
                        <span class="font-semibold">${measure}</span> ${ingredient}
                    </span>
                `;
            }
        }
        ingredientsHTML += '</div>';
        $('#meal-ingredients').html(ingredientsHTML);

        // Embed YouTube video
        if (meal.strYoutube) {
            let videoId = meal.strYoutube.split('v=')[1];
            $('#meal-video').html(`
                <h3 class="text-xl font-bold mb-3">Watch Video:</h3>
                <div class="relative w-full" style="padding-top: 56.25%;">
                    <iframe class="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                </div>
            `);
        }
    });
});
