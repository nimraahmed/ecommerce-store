// axios
//   .post("http://localhost:5000/backend/login", {
//     email: "",
//     password: ""
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//   function Categories() {
//   const [categories, setCategories] = useState("");
//   //const [author, setAuthor] = useState("");
//   async function getCategories() {
//     console.log("clicking button");
//    await axios
//       .get("http://localhost:5000/categories/all", { crossdomain: true })
//       .then((response) => {
        
//           // console.log(response.data[1].name)
//         setCategories(
//           response.data[1].products[0]);
//         // setAuthor(response.data.author);
//       });