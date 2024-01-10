import React from "react";
import { useState, useEffect } from "react";
import { CardFooter } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {add} from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";

const Product = () => {
    const dispach= useDispatch();

    const {data: products} = useSelector(state => state.products);

//   const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => setProducts(result));
   dispach(getProducts());

  }, []);

  const addToCart=(product)=>{
      dispach(add(product))


  }

  const cards = products.map(product => (
    <div className="col-md-3" style={{marginBottom: "10px"}} >
      <Card key={product.id} className= "h-100">
          <div className= "text-center"> 
        <Card.Img variant="top" src={product.image}  style={{width:"100px" , height:"130px"}}/>
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
          INR :{product.price}
          </Card.Text>
          
        </Card.Body>
        <Card.Footer className= "text-center" style={{background : "white"}}>
        <Button  variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1 className="text-center">Product Dashboard</h1>
      <div className="row">
          {cards}
      </div>
    </>
  );
};

export default Product;
