import React from "react";

import { Container, Title, LoginButton } from "./styles";

function Header() {
  return (
    <Container>
      <Title alt="traveller" />
      <LoginButton>Acesso Restrito</LoginButton>
    </Container>
  );
}

export default Header;
