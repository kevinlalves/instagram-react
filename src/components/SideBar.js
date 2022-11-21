import "./SideBar.css";
import "./App.css";
import User from "./User";
import Suggestions from "./Suggestions";

export default function SideBar() {
  return (
    <div className="sidebar">
      <User />
      <div className="side-line bold small">
        <p className="grey">Sugestões para você</p>
        <a href="#">
          <p>Ver tudo</p>
        </a>
      </div>
      <Suggestions />
      <p className="foot-size">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </p>
      <p className="foot-size">© 2021 INSTAGRAM DO FACEBOOK</p>
    </div>
  );
}
