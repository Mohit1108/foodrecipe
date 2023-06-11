import React from "react";

export default function RecipeCard({ recipe, openModal }) {
  return (
    <div key={recipe.recipe.label} className="recipeCard col">
      <div className="imageBg">
        <img
          alt={recipe.recipe.label}
          src={recipe.recipe.image}
          className="card-img-top myPopularImage"
          onClick={() => openModal(recipe)}
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">{recipe.recipe.label}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Calories - {Math.floor(recipe.recipe.calories)}
          </li>
          <li className="list-group-item">
            Meal Type - {recipe.recipe.mealType}
          </li>
          <li className="list-group-item">
            Dish Type - {recipe.recipe.dishType}
          </li>
        </ul>
      </div>
    </div>
  );
}
