import React, { useState } from "react";

export default function Mode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  const root = document.documentElement;
  if (isDarkMode) {
    root.style.setProperty("--primary", "#fbe0dc");
    root.style.setProperty("--secondary", "#f7c531");
    root.style.setProperty("--heading", "#fff");
    root.style.setProperty("--text", "#fff");
    document.body.style.backgroundColor = "#14151F";
  } else {
    root.style.setProperty("--primary", "#fbe0dc");
    root.style.setProperty("--secondary", "#f7c531");
    root.style.setProperty("--heading", "#272042");
    root.style.setProperty("--text", "#8b8ba5");
    document.body.style.backgroundColor = "#fff";
  }

  // --primary: #fbe0dc;
  // --secondary: #f7c531;
  // --heading: #272042;
  // --text: #8b8ba5;
  // --purple: #d8cbf6;
  // --yellow: #fdfae5;
  // --white: #fff;
  // --black: #000;

  return (
    <div>
      <div className={`container ${isDarkMode ? "dark-mode" : ""}`}>
        <h1 className="text-center">Recipe App</h1>
      </div>
      <div className="mode-toggle text-center mt-4">
        <button className="btn btn-secondary" onClick={handleModeToggle}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}
