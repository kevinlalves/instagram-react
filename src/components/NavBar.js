import "./NavBar.css";
import "./App.css";
import {imagePath} from "./App";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="left-navbar">
          <ion-icon class="icons" name="logo-instagram"></ion-icon>
          <div className="divisor desktop"></div>
          <img src={imagePath("logo")} />
        </div>
        <input className="desktop" type="text" placeholder="Pesquisar" />
        <div className="right-navbar">
          <ion-icon class="icons" name="paper-plane-outline"></ion-icon>
          <ion-icon class="icons desktop" name="compass-outline"></ion-icon>
          <ion-icon class="icons desktop" name="heart-outline"></ion-icon>
          <ion-icon class="icons desktop" name="person-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}
