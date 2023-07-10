import React from "react";
import Stack from "react-bootstrap/Stack";
import { Container } from "react-bootstrap";
import WebInfo from "../WebInfo/WebInfo";
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <Container>
      <Stack gap={1}>
        <WebInfo />
        <NavBar />
      </Stack>
    </Container>
  );
}

export default Header;
