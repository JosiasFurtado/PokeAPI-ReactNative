import React, {Component} from 'react';
import {View, Image, Text, FlatList, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';

import {PokeCard, Page, PageNumber, PokeId, PokeImg, PokeName} from './styles';

export default class Main extends Component {
  state = {
    pokemons: [],
    urlNext: '',
    urlPrev: '',
    pageNumber: 1,
    loading: false,
  };

  async componentDidMount() {
    const response = await api.get('https://pokeapi.co/api/v2/pokemon/');
    const {next, previous, results} = response.data;
    // const params = new URL(next).searchParams;
    // const offset = params.get('offset');
    this.setState({
      urlNext: next,
      urlPrev: previous,
      pokemons: results,
      pageNumber: 1,
    });
  }

  backPage = async () => {
    const {urlPrev, pageNumber} = this.state;
    const response = await api.get(urlPrev);
    const {next, previous, results} = response.data;
    if (pageNumber > 1) {
      this.setState({
        urlNext: next,
        urlPrev: previous,
        pokemons: results,
        pageNumber: pageNumber - 1,
      });
    }
  };

  nextPage = async () => {
    const {urlNext, pageNumber} = this.state;
    const response = await api.get(urlNext);
    const {next, previous, results} = response.data;
    this.setState({
      urlNext: next,
      urlPrev: previous,
      pokemons: results,
      pageNumber: pageNumber + 1,
    });
  };

  renderPokeCard = item => {
    const {name, url} = item;
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    return (
      <PokeCard onPress={this.onPressPokeCard}>
        <PokeId>{pokemonIndex}</PokeId>
        <PokeImg source={{uri: imageUrl}} />
        <PokeName>{name}</PokeName>
      </PokeCard>
    );
  };

  onPressPokeCard = () => {
    console.warn('Pressed');
  };

  render() {
    const {pokemons, loading, pageNumber} = this.state;
    return (
      <SafeAreaView>
        <FlatList
          data={pokemons}
          numColumns={3}
          keyExtractor={item => String(item.name)}
          renderItem={({item}) => this.renderPokeCard(item)}
        />

        <Page>
          <Icon
            name="arrow-left"
            color="#fff"
            size={25}
            onClick={this.backPage}
          />
          <PageNumber>
            <Text>{pageNumber || 1}</Text>
          </PageNumber>
          <Icon
            name="arrow-right"
            color="#fff"
            size={25}
            onClick={this.nextPage}
          />
        </Page>
      </SafeAreaView>
    );
  }
}
