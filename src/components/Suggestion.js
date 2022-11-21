import "./App.css";

export default function Suggestion(props) {
  return (
    <li className="side-line">
      <div className="side-left">
        <a href="#"><img src={props.user.image} /></a>
        <a href="#">
          <div>
            <p className="bold">{props.user.name}</p>
            <p className="small light grey">Segue você</p>
          </div>
        </a>
      </div>
      <p className="small bold blue">Seguir</p>
    </li>
  );
}
