# recipespage 
this project was based on a challenge from dev challenges 


Chefs Academy Secrets is a web application that allows users to search for recipes and view detailed information about them. 
The app leverages the Spoonacular API to fetch recipe data and displays it in a user-friendly interface. 
Users can search for recipes by name or browse by categories such as beef, chicken, vegan, lamb, and miscellaneous.

Features:

Recipe Search: Search for recipes based on a query input by the user.
Category Browsing: Browse recipes by clicking on categories.
Recipe Details: View detailed information about a recipe including ingredients, steps, and an image.
Responsive Design: The application is designed to be responsive and adapts to various screen sizes.

Technologies:

HTML: Structure and layout.
CSS: Styling and responsive design.
JavaScript: Fetching data from the Spoonacular API and dynamic content updates.
GSAP: Animation library used for smooth transitions and effects.
API:

Spoonacular API: Used to fetch recipes and detailed information. API key: f0a1921c1b89417caa88e74a0417765b
Key JavaScript Functions:

fetchRecipes(query): Fetches a list of recipes based on the search query and displays them.
fetchRecipeDetails(recipeId): Retrieves detailed information about a specific recipe.
fetchRecipesByCategory(category): Fetches recipes based on selected category.
displayRecipes(recipes): Displays a list of recipes as cards.
showRecipeDetails(recipe): Displays detailed information about a selected recipe.
displayError(), displayNoResults(): Handles errors and no results scenarios.
Setup:

Clone the repository: git clone <repository-url>
Open index.html in your browser to view the application.
Usage:

Enter a recipe name in the search bar and click "Search" to find recipes.
Click on a category to view recipes within that category.
Click on a recipe card to view detailed information.
Contributing:
Contributions are welcome. Please open an issue or submit a pull request for improvements
