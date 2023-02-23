import React from "react";
import { NavLink, NavItem } from "react-router-dom";

function NavBar() {
  
  return (
  
    <nav class="navbar" as="ül">

      <li>
        <NavLink
          class="active"
          to="/"
          exact
          >Home
        </NavLink>
      </li>
      
      <li>
        <NavLink
          class="active"
          to="/movies"          
          >Movies
        </NavLink>
      </li>
      
      <li>
        <NavLink
          class="active"
          to="/directors"
          >Directors
        </NavLink>
      </li>   

      <li> 
        <NavLink
          class="active"
          to="/actors"
          >Actors
        </NavLink>
      </li>
    
    </nav>
  )
}

export default NavBar;
