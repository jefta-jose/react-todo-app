import "./App.scss";
import Main from "./assets/Layouts/Main";

function App() {
  return (
    <div className="main-content">
      <div className="image-background">
        <img
          className="background"
          src="../src/assets/bg-desktop-dark.jpg"
          alt=""
        />
      </div>
      <div className="list-container">
        <Main />
      </div>
    </div>
  );
}

export default App;
