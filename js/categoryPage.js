$(document).ready(function() {
    fetchCategories(function(err, categories) {
        if (err) {
            alert(err);
            return;
        }
        
        let categoryHTML = '';
        categories.forEach(category => {
            categoryHTML += `
                <div class="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer" onclick="goToCategoryDetail('${category.strCategory}')">
                    <div class="relative h-60 group">
                        <img class="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105" 
                             src="${category.strCategoryThumb}" alt="${category.strCategory}">
                        
                        <div class="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:opacity-0"></div>
                        
                        <div class="absolute inset-0 flex flex-col items-center justify-center space-y-2 transition-opacity duration-300 group-hover:opacity-0">
                            <h3 class="text-3xl font-bold text-white">${category.strCategory}</h3>
                            <p class="text-white">View All Recipes</p>
                        </div>
                    </div>
                </div>`;
        });

        $('#categories').html(categoryHTML);
    });
});

function goToCategoryDetail(categoryName) {
    window.location.href = `categoryDetail.html?category=${categoryName}`;
}

function goToCategoryDetail(categoryName) {
    window.location.href = `categoryDetail.html?category=${categoryName}`;
}

function goToMealDetail(mealId, categoryName) {
    window.location.href = `mealDetail.html?meal=${mealId}&category=${categoryName}`;
}
