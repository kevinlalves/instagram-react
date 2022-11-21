import "./Story.css";

export default function Story(props) {
  return (
    <li className="story">
      <a href="#" target="_blank" rel="external">
        <div className="background">
          <img src={props.image} />
        </div>
      </a>
      <a href="#" target="_blank" rel="external">
        <p>{props.name}</p>
      </a>
    </li>
  );
}
