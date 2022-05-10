import React from "react";

function ToyCard({toy, onDeleteToy, onLikeClick}) {

  function handleLikes(){
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       likes: 10,
      }),
    })
    .then((r) => r.json())
    .then((updateLikes) => onLikeClick(updateLikes));
  }

  function handleDelete(){
    fetch(`http://localhost:3001/toys/${toy.id}`, {
method: "DELETE"
  })
.then((r)=> r.json())
.then(() =>  {
  onDeleteToy(toy.id)
})
  }
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button onClick={handleLikes} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
