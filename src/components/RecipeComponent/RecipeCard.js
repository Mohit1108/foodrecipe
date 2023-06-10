import React from "react";

export default function RecipeCard() {
  return (
    <div>
      <div className="col">
        <div className="card">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
            className="card-img-top"
            alt="Hollywood Sign on The Hill"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
