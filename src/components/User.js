import "./User.css";
import "./App.css";
import { imagePath } from "./App";
import { useState } from "react";

export const users = [
  { id: 0, name: "9gag", image: imagePath("9gag") },
  { id: 1, name: "meowed", image: imagePath("meowed") },
  { id: 2, name: "nathanwpyle", image: imagePath("nathanwpyle") },
  { id: 3, name: "wawawiwa", image: imagePath("wawawiwa") },
  { id: 4, name: "respondeai", image: imagePath("respondeai") },
  { id: 5, name: "filomoderna", image: imagePath("filomoderna") },
  { id: 6, name: "catanacomics", image: imagePath("catanacomics") },
  { id: 7, name: "adorable_animals", image: imagePath("adorable_animals") },
  { id: 8, name: "bad.vibes.memes", image: imagePath("bad.vibes.memes") },
  { id: 9, name: "barked", image: imagePath("barked") },
  { id: 10, name: "razoesparacreditar", image: imagePath("razoesparaacreditar") },
  { id: 11, name: "smallcuteanimals", image: imagePath("smallcuteanimals") },
  { id: 12, name: "shibirdart", image: imagePath("shibirdart") }
];


export default function User() {
  const [name, setName] = useState("Kevin");
  const [image, setImage] = useState(imagePath("catanacomics"));
  return (
    <div data-test="user" className="side-header">
      <a href="#"><img onClick={() => {
        const newImage = prompt("Escolha o link para a nova foto:");
        if (newImage) {
          fetch(newImage).then(response => {
            if (response.ok) {
              setImage(newImage);
            }
          })
            .catch(() => console.log("O link fornecido esta corrompido."));
        }
      }} data-test="profile-image" src={image} /></a>
      <a href="#">
        <div>
          <p className="bold">catanacomics</p>
          <div className="name">
            <p data-test="name" className="light grey">{name}</p>
            <ion-icon onClick={() => {
              const newName = prompt("Escreva o novo nome:");
              if (newName) {
                setName(newName);
              }
            }} name="pencil-outline"
              data-test="edit-name"></ion-icon>
          </div>
        </div>
      </a>
    </div>
  );
}
