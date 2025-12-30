// Recipe Detail Page Script
document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search)
  const recipeId = Number.parseInt(urlParams.get("id"))

  if (!recipeId) {
    window.location.href = "index.html"
    return
  }

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

  // Load recipe detail
  loadRecipeDetail(recipeId)
})

async function loadRecipeDetail(id) {
  const showLoading = () => {
    // Implementation for showLoading
  }
  const hideLoading = () => {
    // Implementation for hideLoading
  }
  const API = {
    getRecipeById: async (id) => {
      // Implementation for getRecipeById
    },
  }

  showLoading()
  const recipe = await API.getRecipeById(id)

  if (!recipe) {
    alert("Resep tidak ditemukan")
    window.location.href = "index.html"
    return
  }

  const detailContainer = document.getElementById("recipeDetail")
  detailContainer.innerHTML = createRecipeDetail(recipe)

  // Add print functionality
  document.getElementById("printButton").addEventListener("click", () => {
    window.print()
  })

  hideLoading()
}

function createRecipeDetail(recipe) {
  return `
        <div class="recipe-header">
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-detail-image" onerror="this.src='/placeholder.svg?height=400&width=900'">
            <div class="recipe-actions">
                <button id="printButton" class="action-button primary">
                    🖨️ Print Resep
                </button>
            </div>
        </div>
        
        <div class="recipe-info">
            <h1 class="recipe-detail-title">${recipe.title}</h1>
            <p class="recipe-detail-description">${recipe.description}</p>
            
            <div class="recipe-stats">
                <div class="stat-item">
                    <span>⏱️</span>
                    <span>${recipe.cookTime}</span>
                </div>
                <div class="stat-item">
                    <span>👥</span>
                    <span>${recipe.servings} porsi</span>
                </div>
                <div class="stat-item">
                    <span>💾</span>
                    <span>${recipe.saves} saves</span>
                </div>
                <div class="stat-item">
                    <span>📸</span>
                    <span>${recipe.cooksnaps} cooksnaps</span>
                </div>
            </div>
            
            <div class="recipe-author-detail">
                <img src="${recipe.author.avatar}" alt="${recipe.author.name}" class="author-avatar-detail" onerror="this.src='/placeholder.svg?height=48&width=48'">
                <div class="author-detail-info">
                    <h3>${recipe.author.name}</h3>
                    <div class="author-detail-meta">@${recipe.author.username} • ${recipe.author.location}</div>
                </div>
            </div>
            
            <div class="recipe-section">
                <h2>Bahan-bahan</h2>
                ${recipe.ingredients
                  .map(
                    (group) => `
                    <div class="ingredients-group">
                        <h3>${group.category}</h3>
                        <ul class="ingredients-list">
                            ${group.items.map((item) => `<li>${item.item}</li>`).join("")}
                        </ul>
                    </div>
                `,
                  )
                  .join("")}
            </div>
            
            <div class="recipe-section">
                <h2>Cara Membuat</h2>
                <ol class="instructions-list">
                    ${recipe.instructions
                      .map(
                        (instruction) => `
                        <li class="instruction-item">
                            <div class="instruction-text">${instruction.text}</div>
                        </li>
                    `,
                      )
                      .join("")}
                </ol>
            </div>
        </div>
    `
}
