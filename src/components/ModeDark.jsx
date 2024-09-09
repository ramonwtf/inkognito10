import React, { useState, useEffect } from "react";
import "./ModeDark.css"

const ModeDark = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  };

  return (
    

      <button
        className='btn-theme' id="darkmode"
        onClick={switchTheme}
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    
    
  );
};



export default ModeDark;
