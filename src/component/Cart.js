import React from "react";
import { Button, Image } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../rtk/Slices/cart-slice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, prd) => {
    acc += prd.price * prd.quantity;
    return acc;
  }, 0);
  return (
    <div className="container">
      <h1>Welcome to cart</h1>
      <Button
        className="my-3"
        variant="danger"
        onClick={() => dispatch(clear())}
      >
        Clear Cart
      </Button>
      <h5>{totalPrice.toFixed(2)}$</h5>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((prd) => (
            <tr key={prd.id}>
              <td>{prd.id}</td>
              <td>{prd.title}</td>
              <td>
                <Image
                  src={prd.image}
                  alt={prd.title}
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td>{prd.price}$</td>
              <td>{prd.quantity}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deleteFromCart(prd))}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
