import React from "react";
import RecipeCard from "./RecipeCard";
export default function RecipeGrid() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
      <RecipeCard></RecipeCard> <RecipeCard></RecipeCard>{" "}
      <RecipeCard></RecipeCard>
    </div>
  );
}
