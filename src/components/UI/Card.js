import "./Card.css";

function Card(props) {
  //it could return a div or any kind of html element with a className of Card
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
