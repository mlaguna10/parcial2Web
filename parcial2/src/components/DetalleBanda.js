import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function DetalleBanda(props){
    return (
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body className="mb-1">
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>{props.foundation_year}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
}

export default DetalleBanda;