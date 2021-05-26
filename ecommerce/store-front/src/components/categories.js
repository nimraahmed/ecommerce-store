import React, { useState } from "react";
import axios from "axios";

function Categories() {
  const [categories, setCategories] = useState("");
  //const [author, setAuthor] = useState("");

  async function getCategories() {
    console.log("clicking button");

    await axios
      .get("http://localhost:5000/categories/all", { crossdomain: true })
      .then((response) => {
        const allCategories = response.data.categories.allCategories;
        let result = getCategories(allCategories);
        console.log(result);
        // console.log(response.data[1].name)
        // setCategories([response.data[i].name]);

        // setAuthor(response.data.author);
      });
  }
  return (
    <div>
      <button onClick={getCategories}>Get categories</button>
      <h1>{categories}</h1>
    </div>
  );
}
export default Categories;
