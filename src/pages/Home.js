import React from "react";
import HerobannerImage from "../assets/HeroBannerImage.jpg";
import CTA from "../components/CTA";
import RecipeCard from "../components/RecipeComponent/RecipeGrid";
import PopularRecipe from "../components/RecipeComponent/PopularRecipe";
export default function Home() {
  return (
    <div className=" AppContainer">
      <div className="HeroSection pt-5">
        <div className="mb-3 row align-items-center">
          <div className="col-sm-6">
            <h1>
              <span className="underLineText">Eat</span> What You Cook With Us,{" "}
              <span className="underLineText">Together!</span>
            </h1>
            <p className="secondaryPara">
              When you eat something that cooked by yourself, the happiness is
              priceless.
            </p>
            <button className="btn Secondarybtn">Search Recipes</button>
          </div>
          <div className="col-sm-6 ">
            <img
              src={HerobannerImage}
              className="img-fluid"
              alt="Wild Landscape"
            />
          </div>
        </div>
      </div>
      {/* <div className="row row-cols-1 row-cols-md-3 g-4 my-5"> */}
      <section className="popularRecipes my-5">
        <div className="text-center mb-4">
          <p className="lh-1">Search Recipes Here</p>

          <h2>
            <span className="underLineText">Search </span> Your Favourite
            Recipes to Try
          </h2>
        </div>
        <PopularRecipe />
      </section>
      {/* </div> */}

      {/* <RecipeCard /> */}

      <CTA />
    </div>
  );
}
