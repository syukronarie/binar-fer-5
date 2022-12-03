import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
	return (
		<Row>
			<Col>
				<p>Copyright &copy; {new Date().getFullYear()}</p>
			</Col>
		</Row>
	);
};

export default Footer;
