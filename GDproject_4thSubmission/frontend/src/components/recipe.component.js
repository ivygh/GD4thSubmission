import React, { useState } from 'react';
import './Recipe.css';

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({ title: '', ingredients: '', instructions: '', image: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe({ ...newRecipe, [name]: value });
  };

  const handleAddRecipe = () => {
    if (newRecipe.title && newRecipe.ingredients && newRecipe.instructions) {
      setRecipes([...recipes, newRecipe]);
      setNewRecipe({ title: '', ingredients: '', instructions: '', image: '' });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const handleSearch = () => {
    // Implement search logic here
  };

  const handleDeleteRecipe = (index) => {
    const updatedRecipes = [...recipes];
    updatedRecipes.splice(index, 1);
    setRecipes(updatedRecipes);
  };

  return (
    <div className="recipe-container">
      <h2>Recipe Management</h2>
      <form className="add-recipe-form">
       
          <label className="form-label">Title:</label>
          <input className="form-input" type="text" name="title" value={newRecipe.title} onChange={handleInputChange} required />

          <label className="form-label">Ingredients:</label>
          <textarea className="form-input" name="ingredients" value={newRecipe.ingredients} onChange={handleInputChange} required />

          <label className="form-label">Instructions:</label>
          <textarea className="form-input" name="instructions" value={newRecipe.instructions} onChange={handleInputChange} required />

          <label className="form-label">Image URL (optional):</label>
          <input className="form-input" type="text" name="image" value={newRecipe.image} onChange={handleInputChange} />

       
      </form>

      <div className="search-bar">
        <h3>Search Recipes</h3>
        <input type="text" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} />
        <button type="button" onClick={handleSearch}>Search</button>
      </div>

      <h3>Recipe List</h3>
      <ul className="recipe-list">
        {recipes
          .filter((recipe) => recipe.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((recipe, index) => (
            <li key={index} className="recipe-item">
              <h4>{recipe.title}</h4>
              <p>Ingredients: {recipe.ingredients}</p>
              <p>Instructions: {recipe.instructions}</p>
              {recipe.image && <img src={recipe.image} alt={recipe.title} style={{ maxWidth: '100px' }} />}
              <button onClick={() => handleDeleteRecipe(index)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Recipe;
