import "./WorkCardStyles.css";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt={props.key} />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <a href={props.view} className="btn" target="_blank" rel="noopener">
            VIEW
          </a>
          <a href={props.source} className="btn" target="_blank" rel="noopener">
            SOURCE
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
