import React from "react";
import "./nav.css";
import imagen from '../Assets/imgs/CaraYBaltimore.svg'

function Nav() {
  return (
    <div>
      <hr />
      <nav className="navbar">
        <div className="baltimoreText">
          <h1>Baltimore</h1>
          
        </div>


        <ul>
          <li>Inicio</li>
          <li>Explorar</li>
          <li>Cafeteria</li>
        </ul>

        <div>
          <ul>
            <li>
              <i class="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i class="fa-brands fa-instagram"></i>
            </li>
          </ul>
        </div>

      </nav>
      <hr />
    </div>
  );
}

export default Nav;
