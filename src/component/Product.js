import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/Slices/products-slice";
const Product = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  });
  return (
    <Container>
      <Row className="m-3">
        {products.map((product) => (
          <Col className="m-3" key={product.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                className="card-img-top"
                variant="top"
                src={product.image}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="primary">Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Product;
