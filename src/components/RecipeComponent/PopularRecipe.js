import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
// import mi from "../../assets/HeroImage.jpg";

export default function PopularRecipe() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("paneer");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getRecipes();
  }, [query]);
  const getRecipes = async () => {
    // let query = "paneer";
    setLoading(true);
    const appID = "c0076e1a";

    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${process.env.REACT_APP_NOT_SECRET_CODE}`
    ).catch((error) => {
      // Stop the loader
      setLoading(false);
      console.error("ERROR- ", error);
    });

    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
    setLoading(false);

    // const api = await fetch(
    //   `https://api.spoonacular.com/recipes/random?apiKey=cff2f88292624e4c8617140e75a742cc&number=6`
    // );
    // const data = await api.json();
    // setPopular(data.recipes);
    // console.log(data);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setLoading(true);

    setQuery(search);
    setSearch("");
    setLoading(false);
  };
  return (
    <>
      <form className="d-flex col-8 m-auto pb-2" onSubmit={getSearch}>
        <input
          className="form-control text-center"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="btn submitBTN " type="submit">
          Search
        </button>
      </form>
      <p className="text-center d-block mb-3"> Search result for - {query}</p>
      {/* Spinning loader */}
      {loading && (
        <div className="text-center mt-4 loading-circle">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <Splide
        options={{
          perPage: 3,
          // type: "loop",
          gap: "2rem",
          // pagination: false,
          arrows: false,
          lazyLoad: true,
        }}
      >
        {recipes.map((recipes) => {
          return (
            <SplideSlide>
              <div className="recipeCard ">
                <div className="imageBg">
                  <img
                    alt={recipes.recipe.label}
                    src={recipes.recipe.image}
                    // src={mi}
                    className="card-img-top myPopularImage"
                  />
                </div>

                <div className="card-body">
                  <h3 className="card-title">{recipes.recipe.label}</h3>
                  {/* <h3>Recipes Title </h3> */}
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Calories - {Math.floor(recipes.recipe.calories)}
                    </li>
                    <li className="list-group-item">
                      Meal Type - {recipes.recipe.mealType}
                    </li>
                    <li className="list-group-item">
                      Dish Type - {recipes.recipe.dishType}
                    </li>
                  </ul>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </>
  );
}
