import React, { useEffect, useState } from "react";
import RecipeModal from "./Modal";
// import { Modal, Button, Card, Row, Col } from "react-bootstrap";
export default function PopularRecipe() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("vegetarian");
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
      `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${
        process.env.REACT_APP_NOT_SECRET_CODE
      }&from=${currentPage * resultsPerPage}&to=${
        (currentPage + 1) * resultsPerPage
      }`
    ).catch((error) => {
      // Stop the loader
      console.error("ERROR- ", error);
      setLoading(false);
    });

    const data = await response.json();
    setRecipes((prevRecipes) => [...prevRecipes, ...data.hits]);
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

  return (
    <>
      {/* Form for Getting the Name of Recipe */}
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
      {/* Grid View of Recipes */}
      <div className="row  row-cols-3">
        {recipes.map((recipe) => (
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
        ))}
      </div>
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

      {/* Modal */}
      {/* <Modal
        className="ModalRecipe"
        scrollable
        show={showModal}
        onHide={closeModal}
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        {selectedRecipe && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedRecipe.recipe.label}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-0 scrollerHide">
              <div className="ImageDiv mb-3">
                <img
                  src={selectedRecipe.recipe.image}
                  alt={selectedRecipe.recipe.label}
                />
              </div>
              <div className="contentDiv p-2">
                <div className="boxText">
                  <div className="row">
                    <div className="col-4">
                      <div
                        className="list-group gap-2 mb-2"
                        id="list-tab"
                        role="tablist"
                      >
                        <a
                          className="list-group-item list-group-item-action btn"
                          id="list-home-list"
                          data-bs-toggle="list"
                          href="#list-home"
                          role="tab"
                          aria-controls="list-home"
                        >
                          Overview
                        </a>
                        <a
                          className="list-group-item list-group-item-action btn"
                          id="list-profile-list"
                          data-bs-toggle="list"
                          href="#list-profile"
                          role="tab"
                          aria-controls="list-profile"
                        >
                          Health Labels
                        </a>
                        <a
                          className="list-group-item list-group-item-action btn"
                          id="list-messages-list"
                          data-bs-toggle="list"
                          href="#list-messages"
                          role="tab"
                          aria-controls="list-messages"
                        >
                          Ingredients
                        </a>
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="tab-content" id="nav-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="list-home"
                          role="tabpanel"
                          aria-labelledby="list-home-list"
                        >
                          <ul className="">
                            <li className="list-group-item">
                              <b>Calories</b> ~ {""}
                              {Math.floor(selectedRecipe.recipe.calories)} cal
                            </li>
                            <hr />
                            <span className="d-flex flex-row gap-2">
                              <b> Caution</b>
                              <span>
                                {selectedRecipe.recipe.cautions.map((item) => (
                                  <li className="list-group-item"> ~ {item}</li>
                                ))}
                              </span>
                            </span>
                            <hr />
                            <span className="d-flex flex-row gap-2">
                              <b> Cuisine Type </b>
                              <span>
                                {selectedRecipe.recipe.cuisineType.map(
                                  (item) => (
                                    <li className="list-group-item">
                                      ~ {item}
                                    </li>
                                  )
                                )}
                              </span>
                            </span>
                            <hr />
                            <span className="d-flex flex-row gap-2">
                              <b> Diet Labels</b>
                              <span>
                                {selectedRecipe.recipe.dietLabels.map(
                                  (item) => (
                                    <li className="list-group-item">
                                      ~ {item}
                                    </li>
                                  )
                                )}
                              </span>
                            </span>
                            <hr />
                            <span className="d-flex flex-row gap-2">
                              <b>Dish Type</b>
                              <span>
                                {selectedRecipe.recipe.dishType.map((item) => (
                                  <li className="list-group-item">~ {item}</li>
                                ))}
                              </span>
                            </span>
                            <hr />
                            <span className="d-flex flex-row gap-2">
                              <b>Meal Type</b>
                              <span>
                                {selectedRecipe.recipe.mealType.map((item) => (
                                  <li className="list-group-item">~ {item}</li>
                                ))}
                              </span>
                            </span>

                            <hr />
                            <span className="d-flex flex-row gap-2">
                              <b>Total Time</b>
                              <span>
                                <li className="list-group-item">
                                  ~ {selectedRecipe.recipe.totalTime}Mins
                                </li>
                              </span>
                            </span>
                            <hr />
                            <span className="d-flex flex-row gap-2">
                              <b>Total Weight</b>
                              <span>
                                <li className="list-group-item">
                                  ~{" "}
                                  {Math.floor(
                                    selectedRecipe.recipe.totalWeight
                                  )}
                                  grms
                                </li>
                              </span>
                            </span>

                            <hr />
                          </ul>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="list-profile"
                          role="tabpanel"
                          aria-labelledby="list-profile-list"
                        >
                          <ul className="">
                            <span className="d-flex flex-row gap-3">
                              <b> Health Labels</b>
                              <span>
                                {selectedRecipe.recipe.healthLabels.map(
                                  (item) => (
                                    <li className="list-group-item">
                                      ~ {item}
                                    </li>
                                  )
                                )}
                              </span>
                            </span>
                          </ul>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="list-messages"
                          role="tabpanel"
                          aria-labelledby="list-messages-list"
                        >
                          <ul>
                            {selectedRecipe.recipe.ingredientLines.map(
                              (item) => (
                                <li>{item}</li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal> */}
    </>
  );
}
