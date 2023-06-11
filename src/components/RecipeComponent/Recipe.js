import React, { useEffect, useState } from "react";
import RecipeModal from "./Modal";
import RecipeCard from "./RecipeCard";
import RecipeSlider from "./RecipeSlider";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
export default function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("Paneer"); // Set default search query
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getRecipes();
  }, [currentPage]);

  const getRecipes = async () => {
    setLoading(true);
    const appID = "c0076e1a";
    const resultsPerPage = 6;
    const response = await fetch(
      `https://api.edamam.com/search?q=${searchQuery}&app_id=${appID}&app_key=${
        process.env.REACT_APP_NOT_SECRET_CODE
      }&from=${currentPage * resultsPerPage}&to=${
        (currentPage + 1) * resultsPerPage
      }`
    ).catch((error) => {
      console.error("ERROR- ", error);
      setLoading(false);
    });

    const data = await response.json();
    setRecipes((prevRecipes) => [...prevRecipes, ...data.hits]);
    console.log(data);
    setLoading(false);
  };

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const loadMoreRecipes = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setRecipes([]);
    setCurrentPage(0);
    getRecipes();
  };

  return (
    <>
      {/* Form for Getting the Name of Recipe */}
      <form className="d-flex col-md-10 col-lg-8 m-auto pb-2">
        <input
          className="form-control text-center"
          type="text"
          placeholder="Search for recipes"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button className="btn submitBTN " type="submit" onClick={handleSearch}>
          Search
        </button>
      </form>
      {/* <p className="text-center d-block mb-3"> Search result for - {query}</p> */}
      {/* Grid View of Recipes */}
      <div className="d-sm-none d-md-none d-lg-flex d-xl-flex d-xxl-flex hideinMobile">
        <div className="row row-cols-3  ">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <RecipeCard
                key={recipe.recipe.label}
                recipe={recipe}
                openModal={openModal}
              />
            ))
          ) : (
            <div className="text-center no-recipe my-4">
              <p>No recipes found</p>
            </div>
          )}
        </div>
      </div>

      {/* <div className="row  row-cols-3">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.recipe.label}
            recipe={recipe}
            openModal={openModal}
          />
        ))}
      </div> */}
      {/* Recipe Slider */}
      <Splide
        className=" d-sm-flex d-md-flex d-lg-none d-xl-none d-xxl-none"
        options={{
          perPage: 3,
          gap: "2rem",
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
        {recipes.map((recipe) => (
          <SplideSlide>
            <RecipeSlider
              key={recipe.recipe.label}
              recipe={recipe}
              openModal={openModal}
            />
          </SplideSlide>
        ))}
      </Splide>
      {/* Spinning loader */}
      {loading && (
        <div className="text-center mt-4 loading-circle">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {/* Load More Button */}
      {recipes.length > 0 && (
        <div className="text-center">
          <button className="btn btn-primary" onClick={loadMoreRecipes}>
            Load More
          </button>
        </div>
      )}
      <RecipeModal
        showModal={showModal}
        closeModal={closeModal}
        recipe={selectedRecipe}
      />
    </>
  );
}
