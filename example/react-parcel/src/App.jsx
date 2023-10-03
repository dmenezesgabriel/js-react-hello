import React from "react";
import Header from "./components/Header";
import ListItems from "./components/ListItems";
import Profile from "./components/Profile";
import LikeButton from "./components/LikeButton";

const products = [
  { name: "Cabbage", id: 1, color: "green" },
  { name: "Carrot", id: 2, color: "orange" },
  { name: "Apple", id: 3, color: "red" },
  { name: "Orange", id: 4, color: "orange" },
  { name: "Banana", id: 5, color: "yellow" },
];

export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [likes, setLikes] = React.useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <p>React is awesome!</p>

      {!loggedIn && <button onClick={() => setLoggedIn(true)}>Login</button>}

      {loggedIn && (
        <>
          <Profile />
          <h3>Shopping List</h3>
          <ListItems items={products} />
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </>
      )}

      <LikeButton likes={likes} onClick={handleClick} />
    </div>
  );
}
