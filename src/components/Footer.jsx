import React from "react";
import Button from "react-bootstrap/Button"; // Importamos el componente

const Footer = (props) => {
  return (
    <div className="footer">
      <h1>
        Si quieres averiguar mas sobre estas plantas haz click aqui:{" "}
        <Button variant="success">Ver mas</Button>{" "}
      </h1>
    </div>
  );
};
export default Footer;
