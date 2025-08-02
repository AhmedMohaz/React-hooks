import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const Filter = ({ filterTitle, setFilterTitle, filterRating, setFilterRating }) => {
  return (
    <Row className="mb-4">
      <Col md={6}>
        <Form.Control
          type="text"
          placeholder="Filter by title"
          value={filterTitle}
          onChange={(e) => setFilterTitle(e.target.value)}
        />
      </Col>
      <Col md={6}>
        <Form.Control
          type="number"
          placeholder="Minimum rating"
          min={1}
          max={5}
          value={filterRating}
          onChange={(e) => setFilterRating(Number(e.target.value))}
        />
      </Col>
    </Row>
  );
};

export default Filter;
