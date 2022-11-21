import "./Body.css";
import "./App.css";
import SideBar from "./SideBar";
import Posts from "./Posts";
import StoriesBar from "./StoriesBar";

export default function Body() {
  return (
    <div className="page">
      <div className="page-content">
        <div className="mobile-page">
          <StoriesBar />
          <Posts />
        </div>
        <SideBar />
      </div>
    </div>
  );
}
