const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: [String],
  instructions: String,
  // Add other fields as necessary
});

module.exports = mongoose.model('Recipe', recipeSchema);
