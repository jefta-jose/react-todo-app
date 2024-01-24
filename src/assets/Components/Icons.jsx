import "../Components/Icon.scss";

const Icons = ({ url }) => {
  return (
    <div className="icons">
      <img src={url} className="icons-styles" />
    </div>
  );
};

export default Icons;
