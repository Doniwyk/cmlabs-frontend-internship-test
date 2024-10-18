const apiBaseURL = 'https://www.themealdb.com/api/json/v1/1';

// Fetch list of categories
function fetchCategories(callback) {
    $.ajax({
        url: `${apiBaseURL}/categories.php`,
        method: 'GET',
        success: function(data) {
            callback(null, data.categories);
        },
        error: function() {
            callback('Failed to load categories', null);
        }
    });
}

// Fetch meals based on category
function fetchMealsByCategory(category, callback) {
    $.ajax({
        url: `${apiBaseURL}/filter.php?c=${category}`,
        method: 'GET',
        success: function(data) {
            callback(null, data.meals);
        },
        error: function() {
            callback('Failed to load meals', null);
        }
    });
}

// Fetch meal details by meal ID
function fetchMealDetails(mealId, callback) {
    $.ajax({
        url: `${apiBaseURL}/lookup.php?i=${mealId}`,
        method: 'GET',
        success: function(data) {
            callback(null, data.meals[0]);
        },
        error: function() {
            callback('Failed to load meal details', null);
        }
    });
}
