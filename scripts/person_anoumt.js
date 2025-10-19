// Parse ingredient and scale quantity
function scaleIngredient(ingredient, scale) {
    // Regular expression to find numbers (including fractions and decimals)
    const numberRegex = /(\d+\.?\d*\/?\d*\.?\d*)/g;
    
    return ingredient.replace(numberRegex, function(match) {
        let value;
        
        // Handle fractions like "1/2"
        if (match.includes('/')) {
            const parts = match.split('/');
            value = parseFloat(parts[0]) / parseFloat(parts[1]);
        } else {
            value = parseFloat(match);
        }
        
        const scaled = value * scale;
        
        // Format the result nicely
        if (scaled % 1 === 0) {
            return scaled.toString();
        }
        
        // Check if it's close to a common fraction
        const fractions = {
            0.25: '¼', 0.33: '⅓', 0.5: '½', 
            0.67: '⅔', 0.75: '¾'
        };
        
        const whole = Math.floor(scaled);
        const decimal = scaled - whole;
        
        for (let [dec, frac] of Object.entries(fractions)) {
            if (Math.abs(decimal - parseFloat(dec)) < 0.05) {
                return whole > 0 ? `${whole} ${frac}` : frac;
            }
        }
        
        // Otherwise round to 1 decimal place
        return scaled.toFixed(1);
    });
}

// Adjust serving size
function adjustServings(change) {
    currentServingSize += change;
    if (currentServingSize < 1) currentServingSize = 1;
    
    updateIngredientsDisplay();
}

// Update ingredients display with scaled quantities
function updateIngredientsDisplay() {
    if (!currentRecipe) return;
    
    const scale = currentServingSize / currentRecipe.servings;
    const scaledServings = currentRecipe.servings * scale;
    
    document.getElementById('currentServings').textContent = Math.round(scaledServings);
    document.getElementById('decreaseServing').disabled = currentServingSize <= 1;
    
    const ingredientsList = document.getElementById('modalIngredients');
    ingredientsList.innerHTML = currentRecipe.ingredients.map(ing => 
        `<li>${scaleIngredient(ing, scale)}</li>`
    ).join('');
}