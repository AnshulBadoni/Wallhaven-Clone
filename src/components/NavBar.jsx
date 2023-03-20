import React, { useState } from "react";
import Home from "./Home";

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState([""]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass the search term as a prop to the Home component
    // when the form is submitted
    setSearchTerm(event.target.searchInput.value);
  };

  return (
    <>
    <header id="header">
      
  <a id="logo" href="https://wallhaven.cc">
    <h2>WallhavenClone</h2>
    {/* <img src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png" alt="wallhavenClone" width="40px"/> */}
  </a>
  <form onSubmit={handleSubmit}>
  <div className="search-container">
        <label>
          <input className="searchb" placeholder="Search..." type="text" name="searchInput" />
        </label>
        <button type="submit"><img src="https://clipground.com/images/logo-search-png-1.png" alt="" width="40px"/></button>
        </div>
      </form>
      
   </header>
   <header
        className="listing-header"
        style={{backgroundImage: "radial-gradient(400px 80px at 0px top, rgba(170, 221, 51, .3), transparent)"}}
      >
        <br/>
        <h1>
          <i className="far fa-clock latest"></i>
          &nbsp;
          WallPaper
        </h1>
        <p>The latest wallpapers uploaded by our awesome community!</p>
      </header>
      <Home searchTerm={searchTerm} />
     
    </>
  );
};

export default NavBar;
