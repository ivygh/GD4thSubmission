import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Recipe.css'; 

const Upload = () => {
  const [recipeInputs, setRecipeInputs] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    image: null,
    video: null,
    recipe: '',
    ingredients: '',
    instructions: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe({
      ...newRecipe,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setNewRecipe({
      ...newRecipe,
      [name]: files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', newRecipe.image);
    formData.append('video', newRecipe.video);
    formData.append('recipe', newRecipe.recipe);
    formData.append('ingredients', newRecipe.ingredients);
    formData.append('instructions', newRecipe.instructions);

    try {
      const response = await axios.post('http://localhost:8081/recipes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const newRecipeData = response.data;

      setRecipes([...recipes, newRecipeData]);

      setNewRecipe({
        image: null,
        video: null,
        recipe: '',
        ingredients: '',
        instructions: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    axios.get('http://localhost:8081/recipes')
      .then((res) => setRecipes(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="recipe-container">
      <h2>Upload Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Upload Image:
          <input type="file" name="image" onChange={handleFileChange} accept="image/*" className="form-input" />
        </label>
        <br />
        <label className="form-label">
          Upload Video:
          <input type="file" name="video" onChange={handleFileChange} accept="video/*" className="form-input" />
        </label>
        <br />
        <label className="form-label">
          Recipe:
          <input type="text" name="recipe" value={newRecipe.recipe} onChange={handleInputChange} className="form-input" />
        </label>
        <br />
        <label className="form-label">
          Ingredients:
          <textarea name="ingredients" value={newRecipe.ingredients} onChange={handleInputChange} className="form-input"></textarea>
        </label>
        <br />
        <label className="form-label">
          Instructions:
          <textarea name="instructions" value={newRecipe.instructions} onChange={handleInputChange} className="form-input"></textarea>
        </label>
        <br />
        <button type="submit" className="form-button">Submit</button>
      </form>

      <h2>Recipe List</h2>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="recipe-item">
            {recipe.image && (
              <img src={recipe.image} alt={`Recipe ${recipe._id}`} className="recipe-image" />
            )}
            {recipe.video && (
              <video controls src={recipe.video} className="recipe-video"></video>
            )}
            <h4>{recipe.recipe}</h4>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upload;
