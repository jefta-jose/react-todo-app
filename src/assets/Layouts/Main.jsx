import "../Layouts/Main.scss";
import sun from "../icon-sun.svg";
import ListArray from "../Components/ListArray";

const Main = () => {
  return (
    <div className="todo-list-body">
      <div className="logo">
        <div>
          <h1>TODO</h1>
        </div>
        <div>
          <img src={sun} alt="Sun Icon" />
        </div>
      </div>
      <div className="list-holder">
        <div className="list-array">
          <ListArray />
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
};

export default Main;
