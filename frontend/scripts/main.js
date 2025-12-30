// Main Page Script
document.addEventListener("DOMContentLoaded", async () => {
  // Initialize search form
  const searchForm = document.getElementById("searchForm")
  const searchInput = document.getElementById("searchInput")

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const query = searchInput.value.trim()
    if (query) {
      window.location.href = `search.html?q=${encodeURIComponent(query)}`
    }
  })

  // Load trending keywords
  loadTrending()

  // Load categories
  loadCategories()

  // Load all recipes
  loadRecipes()
})

async function loadTrending() {
  const trendingContainer = document.getElementById("trendingTags")
  const trending = await window.API.getTrending()

  trendingContainer.innerHTML = trending
    .map(
      (keyword) => `
        <a href="search.html?q=${encodeURIComponent(keyword)}" class="trending-tag">
            ${keyword}
        </a>
    `,
    )
    .join("")
}

async function loadCategories() {
  const categoryContainer = document.getElementById("categoryGrid")
  const categories = await window.API.getCategories()

  categoryContainer.innerHTML = categories
    .map(
      (category) => `
        <a href="search.html?category=${encodeURIComponent(category.name)}" class="category-card">
            <div class="category-name">${category.name}</div>
            <div class="category-count">${category.count} resep</div>
        </a>
    `,
    )
    .join("")
}

async function loadRecipes() {
  window.showLoading()
  const recipeContainer = document.getElementById("recipeGrid")
  const recipes = await window.API.getAllRecipes()

  recipeContainer.innerHTML = recipes.map((recipe) => createRecipeCard(recipe)).join("")
  window.hideLoading()
}

function createRecipeCard(recipe) {
  return `
        <a href="recipe.html?id=${recipe.id}" class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image" onerror="this.src='/placeholder.svg?height=200&width=280'">
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-meta">
                    <span class="recipe-meta-item">⏱️ ${recipe.cookTime}</span>
                    <span class="recipe-meta-item">👥 ${recipe.servings} porsi</span>
                </div>
                <div class="recipe-author">
                    <img src="${recipe.author.avatar}" alt="${recipe.author.name}" class="author-avatar" onerror="this.src='/placeholder.svg?height=32&width=32'">
                    <div class="author-info">
                        <div class="author-name">${recipe.author.name}</div>
                        <div class="author-location">${recipe.author.location}</div>
                    </div>
                </div>
            </div>
        </a>
    `
}

// Declare API and loading functions
window.API = {
  getTrending: async () => {
    // Mock implementation
    return ["keyword1", "keyword2", "keyword3"]
  },
  getCategories: async () => {
    // Mock implementation
    return [
      { name: "Category1", count: 10 },
      { name: "Category2", count: 5 },
    ]
  },
  getAllRecipes: async () => {
    // Mock implementation
    return [
      {
        id: 1,
        image: "image1.jpg",
        title: "Recipe1",
        description: "Description1",
        cookTime: "30 mins",
        servings: 4,
        author: { name: "Author1", avatar: "avatar1.jpg", location: "Location1" },
      },
      {
        id: 2,
        image: "image2.jpg",
        title: "Recipe2",
        description: "Description2",
        cookTime: "45 mins",
        servings: 6,
        author: { name: "Author2", avatar: "avatar2.jpg", location: "Location2" },
      },
    ]
  },
}

window.showLoading = () => {
  // Mock implementation
  console.log("Loading...")
}

window.hideLoading = () => {
  // Mock implementation
  console.log("Loading finished.")
}
