import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
// import "@splidejs/react-splide/css";
// import { isLineBreak } from "typescript";
// import mi from "../../assets/HeroImage.jpg";
// import MyModal from "./ViewModal";
export default function PopularRecipe() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("paneer");
  const [loading, setLoading] = useState(false);

  // const [clickedRecipe, setCLickedRecipe] = useState("");
  // // React.useCallback.
  useEffect(() => {
    getRecipes();
  }, [query]);
  const getRecipes = async () => {
    // let query = "paneer";
    setLoading(true);

    // const check = localStorage.getItem("myRecipes");

    // if (check) {
    //   setRecipes(JSON.parse(check));
    //   setLoading(false);
    // }
    const appID = "c0076e1a";

    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${process.env.REACT_APP_NOT_SECRET_CODE}`
    ).catch((error) => {
      // Stop the loader
      console.error("ERROR- ", error);
      setLoading(false);
    });

    const data = await response.json();
    // localStorage.setItem("myRecipes", JSON.stringify(data.hits));
    setRecipes(data.hits);
    console.log(data);
    setLoading(false);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    setLoading(true);
    e.preventDefault();
    if (!search) {
      // Input validation: check if searchQuery is empty
      alert("Can't Proceed with empty input");
      setLoading(false);

      return;
    }
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

      <div className="row  row-cols-3">
        {recipes.slice(0, 6).map((recipes, index) => {
          return (
            <div className="recipeCard col">
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

              <div id="descriptionDIV" className="Description">
                <div className="card">
                  <img
                    src={recipes.recipe.image}
                    className="card-img-top"
                    alt={recipes.recipe.label}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{recipes.recipe.label}</h5>
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                            Ingredient
                          </button>
                        </h2>
                        <div
                          id="flush-collapseOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingOne"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            {recipes.recipe.ingredientLines.map((desc) => (
                              <p>- {desc}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                          >
                            Health Labels
                          </button>
                        </h2>
                        <div
                          id="flush-collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingTwo"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            {recipes.recipe.healthLabels.map((Hlabel) => (
                              <p>- {Hlabel}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="flush-headingThree"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                          >
                            Accordion Item #3
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingThree"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            Placeholder content for this accordion, which is
                            intended to demonstrate the{" "}
                            <code>.accordion-flush</code> class. This is the
                            third item's accordion body. Nothing more exciting
                            happening here in terms of content, but just filling
                            up the space to make it look, at least at first
                            glance, a bit more representative of how this would
                            look in a real-world application.
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="card-text">
                      Calories - {recipes.recipe.calories}
                    </p>
                    <p className="card-text">
                      Diet Labels - {recipes.recipe.dietLabels}
                    </p>
                    <p className="card-text">
                      Dish Type - {recipes.recipe.dishType}
                    </p>
                    {/* <p className="card-text">
                      Health Labels -
                      {recipes.recipe.healthLabels.map((Hlabel) => (
                        <p>- {Hlabel}</p>
                      ))}
                    </p> */}
                    <p className="card-text">
                      Total Time - {recipes.recipe.totalTime}mins
                    </p>
                    {/* <div className="card-text">
                      Ingredient -
                      {recipes.recipe.ingredientLines.map((desc) => (
                        <p>- {desc}</p>
                      ))} */}
                    {/* </div> */}
                    <p className="card-text">
                      Meal Type - {recipes.recipe.mealType}
                    </p>
                    <p className="card-text">
                      Total Weight - {Math.floor(recipes.recipe.totalWeight)}
                      grams
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
