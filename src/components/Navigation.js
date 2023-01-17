import React from "react";
import { Link } from "react-router-dom";

function Navigation (){
  return (
    <nav className="navigation">
      <ul>
        <li><Link className="list" to="/">HomePage</Link></li>
        <li><Link className="list" to="/add-note">AddNote</Link></li>
      </ul>
    </nav>
  );
  }
   

  export default Navigation;