import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import  Card  from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CardFooter } from "react-bootstrap";
import { remove } from '../store/cartSlice';

const Carts = () => {
  const dispatch= useDispatch();
  const products= useSelector(state => state.cart)


  const removeToCart=(id) => {
    dispatch(remove(id))


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
          {product.price}
          </Card.Text>
          
        </Card.Body>
        <CardFooter className= "text-center" style={{background : "white"}}>
        <Button  variant="danger" onClick={()=>removeToCart(product.id)}>Remove Item</Button>
        </CardFooter>
      </Card>
    </div>
  ));

    return (
      <>
      <div className="row">
          {cards}
      </div>
      </>
    )
}

export default Carts;