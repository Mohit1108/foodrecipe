import React from "react";
import RecipeCard from "./RecipeCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

export default function RecipeSlider({ recipe, openModal, index }) {
  return <RecipeCard key={index} recipe={recipe} openModal={openModal} />;
}
