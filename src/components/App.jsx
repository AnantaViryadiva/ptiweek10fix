import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";
import "../styles.css";

function createCard(emojipedia) {
  return (
    <Card
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">emojipedia</h1>
      <div className="grid">{emojipedia.map(createCard)}</div>
    </div>
  );
}

export default App;
