import React, {Component} from 'react';
import {TouchableOpacity, Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';

import {
  PokeCard,
  List,
  Page,
  PageNumber,
  PokeId,
  PokeImg,
  PokeName,
  Spinner,
} from './styles';

export default class Main extends Component {
  state = {
    pokemons: [],
    urlNext: '',
    urlPrev: '',
    pageNumber: 1,
    loading: true,
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
    const {loading} = this.state;
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    return (
      <PokeCard onPress={this.onPressPokeCard}>
        <PokeId>{pokemonIndex}</PokeId>
        {loading ? (
          <PokeImg source={{uri: imageUrl}} />
        ) : (
          <Spinner loading={loading} name="spinner" color="#fff" size={25} />
        )}
        <PokeName>{name}</PokeName>
      </PokeCard>
    );
  };

  onPressPokeCard = () => {
    console.warn('Pressed');
  };

  render() {
    const {pokemons, pageNumber} = this.state;
    return (
      <SafeAreaView>
        <List
          data={pokemons}
          numColumns={3}
          keyExtractor={item => String(item.name)}
          renderItem={({item}) => this.renderPokeCard(item)}
        />

        <Page>
          <TouchableOpacity onPress={this.backPage}>
            <Icon name="arrow-left" color="#fff" size={25} />
          </TouchableOpacity>
          <PageNumber>
            <Text>{pageNumber || 1}</Text>
          </PageNumber>
          <TouchableOpacity onPress={this.nextPage}>
            <Icon name="arrow-right" color="#fff" size={25} />
          </TouchableOpacity>
        </Page>
      </SafeAreaView>
    );
  }
}
