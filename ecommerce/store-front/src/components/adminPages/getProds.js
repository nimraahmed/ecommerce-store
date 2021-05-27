import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
        maxWidth: 345,
      margin: '10px'
  },
  media: {
    height: 0,
    paddingTop: "40%", // 16:9
  },
}));

export default function ProductCard() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get("http://localhost:5000/products/all", { crossdomain: true })
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div>
      <span>
        {products.map((product) => (
          <div>
            <Card className={classes.root}>
              <CardHeader title={product.name} />
              <CardMedia
                className={classes.media}
                image="https://unsplash.com/photos/AqLIkOzWDAk"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Description: {product.description}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Price: Rs. {product.price}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Quantity: {product.quantity}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </span>
      <p>{error}</p>
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function Products() {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     getProducts();
//   }, []);

//   const getProducts = () => {
//     console.log("clicking button");

//     axios
//       .get("http://localhost:5000/products/all", { crossdomain: true })
//       .then((response) => {
//         setProducts(response.data);
//       }).catch((error) => {
//           setError(error)
//       })
//   };

//   return (
//     <div>
//       {products.map((product) => (
//         <ul>
//               <li key="name">{product.name}</li>
//               <li key="price">{product.price}</li>
//               <li key="description">{product.description}</li>
//               <li key="quantity">{product.quantity}</li>
//           </ul>
//       ))}
//           <p>{error}</p>
//     </div>
//   );
// }
