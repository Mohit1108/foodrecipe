import React from "react";
import { Modal, Button } from "react-bootstrap";
const RecipeModal = ({ showModal, closeModal, recipe }) => {
  return (
    <Modal
      className="ModalRecipe"
      scrollable
      show={showModal}
      onHide={closeModal}
      size="lg"
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {recipe && (
        <>
          <Modal.Header closeButton>
            <Modal.Title>{recipe.recipe.label}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-0 scrollerHide">
            <div className="ImageDiv mb-3">
              <img src={recipe.recipe.image} alt={recipe.recipe.label} />
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
                            {Math.floor(recipe.recipe.calories)} cal
                          </li>
                          <hr />
                          <span className="d-flex flex-row gap-2">
                            <b> Caution</b>
                            <span>
                              {recipe.recipe.cautions.map((item) => (
                                <li className="list-group-item"> ~ {item}</li>
                              ))}
                            </span>
                          </span>
                          <hr />
                          <span className="d-flex flex-row gap-2">
                            <b> Cuisine Type </b>
                            <span>
                              {recipe.recipe.cuisineType.map((item) => (
                                <li className="list-group-item">~ {item}</li>
                              ))}
                            </span>
                          </span>
                          <hr />
                          <span className="d-flex flex-row gap-2">
                            <b> Diet Labels</b>
                            <span>
                              {recipe.recipe.dietLabels.map((item) => (
                                <li className="list-group-item">~ {item}</li>
                              ))}
                            </span>
                          </span>
                          <hr />
                          <span className="d-flex flex-row gap-2">
                            <b>Dish Type</b>
                            <span>
                              {recipe.recipe.dishType.map((item) => (
                                <li className="list-group-item">~ {item}</li>
                              ))}
                            </span>
                          </span>
                          <hr />
                          <span className="d-flex flex-row gap-2">
                            <b>Meal Type</b>
                            <span>
                              {recipe.recipe.mealType.map((item) => (
                                <li className="list-group-item">~ {item}</li>
                              ))}
                            </span>
                          </span>

                          <hr />
                          <span className="d-flex flex-row gap-2">
                            <b>Total Time</b>
                            <span>
                              <li className="list-group-item">
                                ~ {recipe.recipe.totalTime}Mins
                              </li>
                            </span>
                          </span>
                          <hr />
                          <span className="d-flex flex-row gap-2">
                            <b>Total Weight</b>
                            <span>
                              <li className="list-group-item">
                                ~ {Math.floor(recipe.recipe.totalWeight)}
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
                              {recipe.recipe.healthLabels.map((item) => (
                                <li className="list-group-item">~ {item}</li>
                              ))}
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
                          {recipe.recipe.ingredientLines.map((item) => (
                            <li>{item}</li>
                          ))}
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
    </Modal>
  );
};

export default RecipeModal;
