$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryName = urlParams.get('category');

    $('#category-name, #category-title').text(categoryName);

    fetchMealsByCategory(categoryName, function(err, meals) {
        if (err) {
            alert(err);
            return;
        }

        let mealHTML = '';
        meals.forEach(meal => {
            mealHTML += `
                <div class="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer" onclick="goToMealDetail('${meal.idMeal}')">
                    <div class="relative h-60 group">
                        <img class="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105" 
                             src="${meal.strMealThumb}" alt="${meal.strMeal}">
                        
                        <div class="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:opacity-0"></div>
                        
                        <div class="absolute inset-0 flex flex-col items-center justify-center space-y-2 text-center transition-opacity duration-300 group-hover:opacity-0">
                            <h3 class="text-3xl font-bold text-white">${meal.strMeal}</h3>
                            <p class="text-white">View Recipes</p>
                        </div>
                    </div>
                </div>`;
        });

        $('#meals').html(mealHTML);
    });
});

function goToMealDetail(mealId) {
    window.location.href = `mealDetail.html?meal=${mealId}`;
}
