import React from "react";
import Header from "./components/Header";
import NameList from "./components/NameList";

const names = ["John", "Jane", "Jack"];

export default function App() {
  const [likes, setLikes] = React.useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <p>React is awesome!</p>
      <NameList names={names} />
      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
