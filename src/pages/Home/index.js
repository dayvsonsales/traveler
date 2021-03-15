import React from "react";

import {
  Container,
  TitleLeft,
  Title,
  SubTitle,
  FindOutButton,
  Content,
} from "./styles";

import Header from "../../components/Header";
import Cities from "../../components/Cities";

const citiesLeft = [
  {
    photo:
      "https://cdn.bloghoteis.com/wp-content/uploads/2018/11/shutterstock_1034972236.jpg",
    name: "Florianópolis",
    amount: 98,
  },
  {
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-s/04/23/f9/8f/getlstd-property-photo.jpg",
    name: "Àguas Mornas",
    amount: 98,
  },
  {
    photo:
      "https://cdn.bloghoteis.com/wp-content/uploads/2018/11/shutterstock_1034972236.jpg",
    name: "Florianópolis",
    amount: 98,
  },
  {
    photo:
      "https://cdn.bloghoteis.com/wp-content/uploads/2018/11/shutterstock_1034972236.jpg",
    name: "Florianópolis",
    amount: 98,
  },
];

const citiesRight = [
  {
    photo:
      "https://www.segueviagem.com.br/wp-content/uploads/2021/01/Vista-aerea-das-praias-da-Lagoinha-e-Prainha-Bombinhas-Santa-Catarina-shutterstock_1624434856-300x169.jpg",
    name: "Bombinhas",
    amount: 98,
  },
  {
    photo:
      "https://blog.rentcars.com/wp-content/uploads/2020/01/vila-germanica-blumenau-sc_2.jpg",
    name: "Blumenau",
    amount: 98,
  },
  {
    photo:
      "https://cdn.bloghoteis.com/wp-content/uploads/2018/11/shutterstock_1034972236.jpg",
    name: "Florianópolis",
    amount: 98,
  },
  {
    photo:
      "https://cdn.bloghoteis.com/wp-content/uploads/2018/11/shutterstock_1034972236.jpg",
    name: "Florianópolis",
    amount: 98,
  },
];

function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <TitleLeft>
          <Title>Viva uma grande aventura</Title>
          <SubTitle>
            Descubra locais incríveis para se visitar em cidades maravilhosas de
            Santa Catarina.
          </SubTitle>

          <FindOutButton>Descobrir todos os lugares</FindOutButton>
        </TitleLeft>

        <Cities cities={citiesLeft} />
        <Cities top cities={citiesRight} />
      </Content>
    </Container>
  );
}

export default Home;
