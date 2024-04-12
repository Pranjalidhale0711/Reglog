import React from "react";
import './navBar.css'

function navBar() {
   function handleclick(){
     console.log("i am pressed");
     window.location.href="/login"
   }
  return (
       <div className="NavBar">
      <nav>
        <div className="title" onClick={handleclick}>Login</div>
      </nav>
    </div>
  );
}

export default navBar;
