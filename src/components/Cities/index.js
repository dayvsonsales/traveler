import React from "react";

import {
  Container,
  CardCity,
  Photo,
  Title,
  Amount,
  Information,
} from "./styles";

function Cities({ top, cities }) {
  return (
    <Container top={top}>
      {cities.map((city) => (
        <CardCity>
          <Photo src={city.photo} />
          <Information>
            <Title>{city.name}</Title>
            <Amount>{city.amount} locais</Amount>
          </Information>
        </CardCity>
      ))}
    </Container>
  );
}

export default Cities;
