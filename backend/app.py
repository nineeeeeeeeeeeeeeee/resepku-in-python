from flask import Flask, jsonify, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend to access API

# Import recipes data
from data.recipes import recipes_data

@app.route('/api/recipes', methods=['GET'])
def get_all_recipes():
    """Get all recipes"""
    return jsonify(recipes_data)

@app.route('/api/recipes/<int:recipe_id>', methods=['GET'])
def get_recipe_by_id(recipe_id):
    """Get a single recipe by ID"""
    recipe = next((r for r in recipes_data if r['id'] == recipe_id), None)
    if recipe:
        return jsonify(recipe)
    return jsonify({'error': 'Recipe not found'}), 404

@app.route('/api/search', methods=['GET'])
def search_recipes():
    """Search recipes by query"""
    query = request.args.get('q', '').lower()
    
    if not query:
        return jsonify(recipes_data)
    
    # Search in title, description, ingredients, and instructions
    filtered_recipes = []
    for recipe in recipes_data:
        # Search in title
        if query in recipe['title'].lower():
            filtered_recipes.append(recipe)
            continue
        
        # Search in description
        if query in recipe['description'].lower():
            filtered_recipes.append(recipe)
            continue
        
        # Search in ingredients
        for ingredient in recipe['ingredients']:
            if query in ingredient['item'].lower():
                filtered_recipes.append(recipe)
                break
        
        # Search in instructions
        if recipe not in filtered_recipes:
            for instruction in recipe['instructions']:
                if query in instruction['text'].lower():
                    filtered_recipes.append(recipe)
                    break
    
    return jsonify(filtered_recipes)

@app.route('/api/categories/<string:category>', methods=['GET'])
def get_recipes_by_category(category):
    """Get recipes by category"""
    filtered_recipes = [r for r in recipes_data if r['category'].lower() == category.lower()]
    return jsonify(filtered_recipes)

@app.route('/api/categories', methods=['GET'])
def get_categories():
    """Get all unique categories"""
    categories = list(set(r['category'] for r in recipes_data))
    category_list = []
    
    for cat in categories:
        count = len([r for r in recipes_data if r['category'] == cat])
        category_list.append({
            'name': cat,
            'slug': cat.lower().replace(' ', '-'),
            'count': count
        })
    
    return jsonify(category_list)

@app.route('/api/trending', methods=['GET'])
def get_trending():
    """Get trending search keywords"""
    trending = [
        'Rendang', 'Soto Ayam', 'Nasi Goreng', 'Gado-gado',
        'Es Teh Manis', 'Sate Ayam', 'Rawon', 'Pisang Goreng'
    ]
    return jsonify(trending)

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({'status': 'ok', 'message': 'Resepku API is running'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
