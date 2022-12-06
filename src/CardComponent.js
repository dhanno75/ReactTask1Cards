import React from "react";
import { Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

const Cards = ({ details }) => (
  <Row>
    {details.map((el) => (
      <Col className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-5">
        <Card className="cardClass">
          {/* Heading */}
          <div className="text-center mb-2">
            <Card.Text className="text-muted head">{el.heading}</Card.Text>
            <Card.Title className="card-price">
              {el.price}
              <span className="period">/month</span>
            </Card.Title>
          </div>

          <hr></hr>
          {/* Body */}
          <Card.Body className="mt-2">
            <ListGroup.Item as="ul">
              <ListGroup.Item
                as="li"
                className={`${
                  el.price === "$9" || el.price === "$49" ? "fw-bold" : ""
                } mb-2`}
              >
                <FontAwesomeIcon icon={faCheck} size="lg" className="icons" />
                {el.lists.l1}
              </ListGroup.Item>
              <ListGroup.Item as="li" className="mb-2">
                <FontAwesomeIcon icon={faCheck} size="lg" className="icons" />
                {el.lists.l2}
              </ListGroup.Item>
              <ListGroup.Item as="li" className="mb-2">
                <FontAwesomeIcon icon={faCheck} size="lg" className="icons" />
                {el.lists.l3}
              </ListGroup.Item>
              <ListGroup.Item as="li" className="mb-2">
                <FontAwesomeIcon icon={faCheck} size="lg" className="icons" />
                {el.lists.l4}
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className={`${el.price === "$0" ? "disable" : ""} mb-2`}
              >
                <FontAwesomeIcon
                  icon={el.price === "$0" ? faX : faCheck}
                  size="lg"
                  className="icons"
                />
                {el.lists.l5}
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className={`${el.price === "$0" ? "disable" : ""} mb-2`}
              >
                <FontAwesomeIcon
                  icon={el.price === "$0" ? faX : faCheck}
                  size="lg"
                  className="icons"
                />
                {el.lists.l6}
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className={`${el.price === "$0" ? "disable" : ""} mb-2`}
              >
                <FontAwesomeIcon
                  icon={el.price === "$0" ? faX : faCheck}
                  size="lg"
                  className="icons"
                />
                <span className={`${el.price === "$49" ? "fw-bold" : ""}`}>
                  {`${el.lists.l7.split(" ")[0]}`}&nbsp;
                </span>
                {el.lists.l7.split(" ").slice(1).join(" ")}
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className={`${
                  el.price === "$0" || el.price === "$9" ? "disable" : ""
                } mb-2`}
              >
                <FontAwesomeIcon
                  icon={el.price === "$0" || el.price === "$9" ? faX : faCheck}
                  size="lg"
                  className="icons"
                />
                {el.lists.l8}
              </ListGroup.Item>
            </ListGroup.Item>
          </Card.Body>

          {/* Button */}
          <Button variant="primary" className="btn">
            Submit
          </Button>
        </Card>
      </Col>
    ))}
  </Row>
);

export default Cards;
