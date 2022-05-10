import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, setAllToys}) {

  function handleDeleteToy(id){
    const updatedToyArray = toys.filter(toy =>toy.id !== id)
    setAllToys(updatedToyArray)
  }

  function handleToyLikes(updatedLikes) {
    const newLikeCount = toys.map((toy)=> {
if(toy.id === updatedLikes.id) {
  toy.likes = toy.like + 1
  return updatedLikes;
} else {
  return toy;
} })
setAllToys([...toys, newLikeCount])
  }

  return (
    <div id="toy-collection">{toys.map(toy=> <ToyCard onLikeClick={handleToyLikes} key={toy.id} toy={toy} onDeleteToy={handleDeleteToy} />)}</div>
  );
}

export default ToyContainer;
