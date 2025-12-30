// Search Page Script
const showLoading = () => {
  document.getElementById("loading").style.display = "block"
}

const hideLoading = () => {
  document.getElementById("loading").style.display = "none"
}

const API = {
  searchRecipes: async (query) => {
    // Mock implementation for demonstration purposes
    return [
      {
        id: 1,
        title: "Recipe 1",
        description: "Description 1",
        cookTime: "30 mins",
        servings: 4,
        image: "image1.jpg",
        author: { name: "Author 1", avatar: "avatar1.jpg", location: "Location 1" },
      },
      {
        id: 2,
        title: "Recipe 2",
        description: "Description 2",
        cookTime: "45 mins",
        servings: 6,
        image: "image2.jpg",
        author: { name: "Author 2", avatar: "avatar2.jpg", location: "Location 2" },
      },
    ]
  },
  getRecipesByCategory: async (category) => {
    // Mock implementation for demonstration purposes
    return [
      {
        id: 3,
        title: "Category Recipe 1",
        description: "Category Description 1",
        cookTime: "20 mins",
        servings: 2,
        image: "categoryImage1.jpg",
        author: { name: "Category Author 1", avatar: "categoryAvatar1.jpg", location: "Category Location 1" },
      },
    ]
  },
}

document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search)
  const query = urlParams.get("q")
  const category = urlParams.get("category")

  // Initialize search form
  const searchForm = document.getElementById("searchForm")
  const searchInput = document.getElementById("searchInput")

  if (query) {
    searchInput.value = query
  }

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const newQuery = searchInput.value.trim()
    if (newQuery) {
      window.location.href = `search.html?q=${encodeURIComponent(newQuery)}`
    }
  })

  // Load search results
  if (category) {
    loadCategoryResults(category)
  } else if (query) {
    loadSearchResults(query)
  }
})

async function loadSearchResults(query) {
  showLoading()
  const titleElement = document.getElementById("searchTitle")
  const resultsContainer = document.getElementById("searchResults")
  const noResultsElement = document.getElementById("noResults")

  titleElement.textContent = `Hasil pencarian untuk "${query}"`

  const recipes = await API.searchRecipes(query)

  if (recipes.length === 0) {
    resultsContainer.innerHTML = ""
    noResultsElement.style.display = "block"
  } else {
    resultsContainer.innerHTML = recipes.map((recipe) => createRecipeCard(recipe)).join("")
    noResultsElement.style.display = "none"
  }

  hideLoading()
}

async function loadCategoryResults(category) {
  showLoading()
  const titleElement = document.getElementById("searchTitle")
  const resultsContainer = document.getElementById("searchResults")
  const noResultsElement = document.getElementById("noResults")

  titleElement.textContent = `Resep ${category}`

  const recipes = await API.getRecipesByCategory(category)

  if (recipes.length === 0) {
    resultsContainer.innerHTML = ""
    noResultsElement.style.display = "block"
  } else {
    resultsContainer.innerHTML = recipes.map((recipe) => createRecipeCard(recipe)).join("")
    noResultsElement.style.display = "none"
  }

  hideLoading()
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
