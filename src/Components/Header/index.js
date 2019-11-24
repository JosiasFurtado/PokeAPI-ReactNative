import React, {Component} from 'react';
import api from '../../services/api';

import {
  Container,
  Touchable,
  Title,
  TitleTxt,
  Logo,
  Search,
  IconSearch,
} from './styles';

import logo from '../../assets/logo.png';

export default class Header extends Component {
  state = {
    search: '',
    url: '',
    error: null,
    loading: false,
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({loading: true, error: false});
    try {
      const {search} = this.state;

      if (search === '') {
        throw new Error('Search empyt');
      } else {
        const url = `https://pokeapi.co/api/v2/pokemon/${search}/`;
        const response = await api.get(url);
        const pokemonIndex = response.data.game_indices[0].game_index;
        this.props.navigation.navigate('Pokemon', {id: pokemonIndex});
      }

      this.setState({
        search: '',
      });
    } catch (error) {
      this.setState({error: true});
    } finally {
      this.setState({loading: false});
    }
  };

  render() {
    const {search, loading, error} = this.state;

    return (
      <Container>
        <Touchable onPress={() => this.props.navigation.navigate('Main')}>
          <Logo source={logo} />
        </Touchable>
        <Title>
          <TitleTxt>PokeAPI</TitleTxt>
        </Title>
        <Search
          placeholder="PokeID or Name"
          placeholderTextColor="#555"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="send"
          value={search}
          onChangeText={text => this.setState({search: text.toLowerCase()})}
          onSubmitEditing={this.handleSubmit}
        />
        <IconSearch name="search" size={14} color="#555" />
      </Container>
    );
  }
}
