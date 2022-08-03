import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ResponsiveAutoExample(props) {
  return (
    <div className="main">
      <Container>
        <Row>
          <Col sm>{props.col1}</Col>
          <Col sm>{props.col2}</Col>
          <Col sm>{props.col3}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResponsiveAutoExample;
