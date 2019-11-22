import React from 'react';
import {Container, Touchable, Title, TitleTxt, Logo} from './styles';

import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <Container>
      <Touchable onPress="/">
        <Logo source={logo} />
      </Touchable>
      <Title>
        <TitleTxt>PokeAPI</TitleTxt>
      </Title>
    </Container>
  );
}
