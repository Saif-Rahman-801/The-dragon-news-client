import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

import { AuthContext } from "../../../Provider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism without fear and Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee speed={80} className="text-danger">
          I can be a React component, multiple React components, or just some
          text....
        </Marquee>
      </div>

    </Container>
  );
};

export default Header;
