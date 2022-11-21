import "./Post.css";
import "./App.css";
import { users } from "./User";
import { useState } from "react";

export default function Post(props) {
  const [heartVisibility, setHeartVisibility] = useState(false);
  return (
    <li data-test="post" className="post">
      <div className="post-header">
        <div className="post-title">
          <a href=""><img src={users[props.post.userId].image} /> </a>
          <a href="">
            <p><span className="bold">{users[props.post.userId].name}</span></p>
          </a>
        </div>
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
      <img data-test="post-image" onDoubleClick={props.post.liked ? undefined : (() => props.onClick("liked"))} src={props.post.image} />
      <div className="post-footer">
        <div className="post-actions">
          <div className="left-actions">
            <div data-test="like-post" onClick={() => props.onClick("liked")} >
              {props.post.liked
                ? <ion-icon style={{ color: "red" }} class="icons" name="heart"></ion-icon>
                : <ion-icon class="icons" name="heart-outline"></ion-icon>
              }
            </div>
            <ion-icon class="icons" name="chatbubble-outline"></ion-icon>
            <ion-icon class="icons" name="paper-plane-outline"></ion-icon>
          </div>
          <div data-test="save-post" onClick={() => props.onClick("saved")} >
            {props.post.saved
              ? <ion-icon class="icons" name="bookmark"></ion-icon>
              : <ion-icon class="icons" name="bookmark-outline"></ion-icon>
            }
          </div>
        </div>
        <div className="reactions">
          <img src={users[props.post.id + 2].image} />
          <p>
            Curtido por <span className="bold">respondeai</span> e
            <span data-test="likes-number" className="bold"> outras {props.post.numLikes} pessoas</span>
          </p>
        </div>
      </div>
    </li>
  );
}
