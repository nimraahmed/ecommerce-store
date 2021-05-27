import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Categories() {
  const field = {
    padding: "10px",
    margin: "10px, auto",
    fontWeight: "bold",
  };
  const input = {
    padding: "5px",
    margin: "4px",
  };
  const buttonStyle = {
    padding: "10px",
    margin: "10px",
    borderRadius: "8px",
    backgroundColor: "black",
    color: "white",
    border: "2px solid black",
    width: "250px",
    fontFamily: "Nunito",
    fontSize: "15px",
  };
  const root = {
    //  display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Nunito",
  };

  //  const [categories, setCategories] = useState([]);
  const [data, setData] = useState({
    name: "",
  });
  const [error, setError] = useState("");
  const [result, setResult] = useState("");

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  function clear() {
    setResult("");
    setError("");
  }
  function newCategory(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/categories/create", {
        name: data.name,
      })
      .then((response) => {
        setResult(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        setError(error.response.data);
      });
  }
  return (
    <div style={root}>
      <label style={field}>Category Name</label>
      <input
        type="text"
        onChange={(e) => {
          handle(e);
          clear();
        }}
        id="name"
        value={data.name}
        style={input}
      />
      <button style={buttonStyle} onClick={(e) => newCategory(e)}>
        CREATE NEW CATEGORY
      </button>
      <p>{result}</p>
      <h2>{error}</h2>
    </div>
  );
}
