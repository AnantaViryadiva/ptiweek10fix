import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
import "../styles.css";

function Card(props) {
  return (
    <article>
      <div className="card">
        <div className="top">
          <Avatar img={props.emoji} />
          <h2 className="name">{props.name}</h2>
          <Detail detailInfo={props.meaning} />
        </div>
      </div>
    </article>
  );
}

export default Card;
