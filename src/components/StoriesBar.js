import Story from "./Story";
import "./StoriesBar.css";
import "./App.css";
import {users} from "./User";

export default function StoriesBar() {
  return (
    <div className="stories">
      <ul className="story-panel">
        {users.map(story => <Story key={story.id} image={story.image} name={story.name} />)}
      </ul>
      <ion-icon class="left-arrow arrow" name="chevron-back-circle-sharp"></ion-icon>
      <ion-icon class="right-arrow arrow desktop" name="chevron-forward-circle-sharp"></ion-icon>
    </div>
  );
}
