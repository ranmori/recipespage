const API_KEY = 'f0a1921c1b89417caa88e74a0417765b';

// Add an event listener for the search bar
document.getElementById('search-button').addEventListener('click', function() {
  const query = document.getElementById('search-bar').value;
  fetchRecipes(query);
  
});

async function fetchRecipes(query) {
  try {
   const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=10&apiKey=${API_KEY}`);
    const data = await response.json();
    
    if (data.results && data.results.length > 0) {
      const recipes = data.results.map(recipe => ({
        id: recipe.id,
        name: recipe.title,
        image: recipe.image
      }));
      displayRecipes(recipes);
    } else {
      displayNoResults();
    }
  } catch (error) {
    console.error('Error:', error);
    displayError();
  }
}

function displayRecipes(recipes) {
  const container = document.getElementById('recipe-container');
  container.innerHTML = '';

  recipes.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'recipe-card';

    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <h3>${recipe.name}</h3>
    `;

    card.addEventListener('click', () => fetchRecipeDetails(recipe.id));
    container.appendChild(card);
  });

  gsap.from('.recipe-card', {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1
  });
}

function displayError() {
  const results = document.getElementById('results');
  results.innerHTML = `<p>An error occurred. Please try again.</p>`;
}

function displayNoResults() {
  const results = document.getElementById('results');
  results.innerHTML = `<p>No results were found.</p>`;
}

async function fetchRecipeDetails(recipeId) {
  try {
    const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`);
    const recipe = await response.json();
    showRecipeDetails({
      name: recipe.title,
      image: recipe.image,
      ingredients: recipe.extendedIngredients.map(ingredient => ingredient.original),
      description: recipe.summary,
      steps: recipe.analyzedInstructions[0] ? recipe.analyzedInstructions[0].steps.map(step => step.step) : []
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

function showRecipeDetails(recipe) {
  const details = document.getElementById('recipe-details');
  const content = document.getElementById('recipe-content');
  
  content.innerHTML = `
    <h2>${recipe.name}</h2>
    <img src="${recipe.image}" alt="${recipe.name}">
    <p>${recipe.description}</p>
    <h3>Ingredients:</h3>
    <ul>
      ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
    </ul>
    <h3>Steps:</h3>
    <ul>
      ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
    </ul>
  `;
  
  details.classList.add('visible');
}

document.getElementById('close-button').addEventListener('click', () => {
  const details = document.getElementById('recipe-details');
  details.classList.remove('visible');
});

// Add an event listener to handle clicks on category items
document.querySelectorAll('.categories ul li').forEach(item => {
  item.addEventListener('click', function() {
    const category = this.getAttribute('data-category');
    fetchRecipesByCategory(category);
  });
});

async function fetchRecipesByCategory(category) {
  try {
    const query = category === 'miscellaneous' ? 'random' : category;
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=10&apiKey=${API_KEY}`);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const recipes = data.results.map(recipe => ({
        id: recipe.id,
        name: recipe.title,
        image: recipe.image
      }));
      displayRecipes(recipes);
    } else {
      displayNoResults();
    }
  } catch (error) {
    console.error('Error:', error);
    displayError();
  }
}
