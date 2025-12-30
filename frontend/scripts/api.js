// API Base URL Declaration
const API_BASE_URL = "https://api.example.com"

// API Functions
const API = {
  async getAllRecipes() {
    try {
      const response = await fetch(`${API_BASE_URL}/recipes`)
      if (!response.ok) throw new Error("Failed to fetch recipes")
      return await response.json()
    } catch (error) {
      console.error("Error fetching recipes:", error)
      return []
    }
  },

  async getRecipeById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/recipes/${id}`)
      if (!response.ok) throw new Error("Recipe not found")
      return await response.json()
    } catch (error) {
      console.error("Error fetching recipe:", error)
      return null
    }
  },

  async searchRecipes(query) {
    try {
      const response = await fetch(`${API_BASE_URL}/search?q=${encodeURIComponent(query)}`)
      if (!response.ok) throw new Error("Search failed")
      return await response.json()
    } catch (error) {
      console.error("Error searching recipes:", error)
      return []
    }
  },

  async getRecipesByCategory(category) {
    try {
      const response = await fetch(`${API_BASE_URL}/categories/${encodeURIComponent(category)}`)
      if (!response.ok) throw new Error("Failed to fetch category recipes")
      return await response.json()
    } catch (error) {
      console.error("Error fetching category recipes:", error)
      return []
    }
  },

  async getCategories() {
    try {
      const response = await fetch(`${API_BASE_URL}/categories`)
      if (!response.ok) throw new Error("Failed to fetch categories")
      return await response.json()
    } catch (error) {
      console.error("Error fetching categories:", error)
      return []
    }
  },

  async getTrending() {
    try {
      const response = await fetch(`${API_BASE_URL}/trending`)
      if (!response.ok) throw new Error("Failed to fetch trending")
      return await response.json()
    } catch (error) {
      console.error("Error fetching trending:", error)
      return []
    }
  },
}

// Utility Functions
function showLoading() {
  document.getElementById("loading").classList.add("active")
}

function hideLoading() {
  document.getElementById("loading").classList.remove("active")
}
