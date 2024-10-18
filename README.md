# MealDB API Web Application

This is a simple web application built with **HTML**, **Tailwind CSS**, **JavaScript**, and **jQuery**. The application fetches and displays data from TheMealDB API. It includes three main pages:

1. **Category Page**: Displays a list of meal categories.
2. **Category Detail Page**: Displays a list of meals under a selected category.
3. **Meal Detail Page**: Displays detailed information about a specific meal, including instructions, ingredients, and an embedded YouTube tutorial.

## Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Live Demo

You can see the project in action at: [Live Demo Link](https://doniwyk.github.io/cmlabs-frontend-internship-test/index.html)

## Features

- Fetches and displays data from TheMealDB API
- Modularized JavaScript for easier maintenance
- Responsive design with Tailwind CSS
- Displays meal categories, meal details, and recipe instructions

## Installation

To run the project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/Doniwyk/cmlabs-frontend-internship-test.git
```

### 2. Navigate Into the Project Directory

> Open `index.html`

## Usage

### 1. Navigate to the Category Page

> Open index.html in your browser to see the list of meal categories.

### 2. Navigate to the Category Detail Page

> Click on any category to navigate to categoryDetail.html, where you will see the list of meals under that category.

### 3. Navigate to the Meal Detail Page

> Click on any meal to navigate to mealDetail.html, where you will see detailed information about that meal, including an image, instructions, ingredients, and an embedded YouTube video if available.

## API Endpoints

This project uses three endpoints from TheMealDB API:

1. List of Categories:\
    URL: [https://www.themealdb.com/api/json/v1/1/categories.php](https://www.themealdb.com/api/json/v1/1/categories.php)

2. Filter by Category:\
    URL: [https://www.themealdb.com/api/json/v1/1/filter.php?c={category-name}](https://www.themealdb.com/api/json/v1/1/filter.php?c={category-name})

3. Meal Detail (optional):\
    URL: [https://www.themealdb.com/api/json/v1/1/lookup.php?i={meal-id}](https://www.themealdb.com/api/json/v1/1/lookup.php?i={meal-id})
