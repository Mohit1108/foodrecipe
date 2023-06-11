import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
// import mi from "../../assets/HeroImage.jpg";
import MyModal from "./ViewModal";
export default function PopularRecipe() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("paneer");
  const [loading, setLoading] = useState(false);
  const [clickedRecipe, setCLickedRecipe] = useState("");

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

      <Splide
        options={{
          perPage: 3,
          // type: "loop",
          gap: "2rem",
          // pagination: false,
          arrows: false,
          lazyLoad: true,
          mediaQuery: "max",
          breakpoints: {
            640: {
              perPage: 1,
            },
          },
        }}
      >
        {recipes.map((recipes) => {
          return (
            <SplideSlide key={recipes.recipe.label}>
              <div className="recipeCard ">
                <div className="imageBg">
                  <img
                    alt={recipes.recipe.label}
                    src={recipes.recipe.image}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
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
        })}{" "}
        <MyModal data={recipes} />
      </Splide>
    </>
  );
}
