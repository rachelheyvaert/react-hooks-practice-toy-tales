import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";
// import { useEffect } from "react/cjs/react.production.min";
const API = 'http://localhost:3001/toys'


function App() {
  const [showForm, setShowForm] = useState(true);
  const [toys, setAllToys] = useState([])
  const [newToy, setNewToy] = useState({
    id: "",
    name: "",
    image: "",
    likes: 0
  })

  useEffect(()=> {
    fetch(API)
    .then((r)=> r.json())
    .then(setAllToys)
  },[])


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm setNewToy={setNewToy} setAllToys={setAllToys} newToy={newToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} />
    </>
  );
}

export default App;
