import React from "react";
const API = 'http://localhost:3001/toys'
function ToyForm({setNewToy, setAllToys, newToy}) {

  function handleChange(e){
    setNewToy((currentToy)=> ({
      ...currentToy,
      [e.target.name]: e.target.value
    }))
  }

  function handleSubmit(e){
e.preventDefault();
fetch(API, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newToy),
})
  .then((resp) => resp.json())
  .then((data) => setAllToys((currentToy)=> [...currentToy, data]));

  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={newToy.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={newToy.image}
          onChange={handleChange}

        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
