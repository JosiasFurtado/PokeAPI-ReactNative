/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
import React, {Component} from 'react';
import api from '../../services/api';

import {
  Container,
  PokeCard,
  PokeId,
  Id,
  Type,
  TypeText,
  PokeName,
  Sprite,
  Stats,
  Stat,
  StatText,
  StatTitle,
  Description,
  Profile,
  ProfTitle,
  ProfText,
  Col1,
  Col2,
  GenderRatio,
  GenderR,
  GenderText,
} from './styles';

const TYPE_COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6',
};

export default class Pokemon extends Component {
  state = {
    name: '',
    pokemonIndex: '',
    imageUrl: '',
    types: [],
    description: '',
    stats: {
      hp: 1,
      attack: 1,
      defense: 1,
      speed: 1,
      specialAttack: 1,
      specialDefense: 1,
    },
    height: '',
    weight: '',
    eggGroups: '',
    catchRate: '',
    abilities: '',
    genderRatioMale: 1,
    genderRatioFemale: 1,
    evs: '',
    hatchSteps: '',
    themeColor: 'EF5350',
  };

  async componentDidMount() {
    const {navigation} = this.props;
    const pokemonIndex = navigation.state.params.id;

    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;
    const pokemonRes = await api.get(pokemonUrl);

    this.setState({pokemonIndex: pokemonRes.data.id});

    const {name} = pokemonRes.data;
    const imageUrl = pokemonRes.data.sprites.front_default;

    let {hp, attack, defense, speed, specialAttack, specialDefense} = '';

    pokemonRes.data.stats.map(stat => {
      switch (stat.stat.name) {
        case 'hp':
          hp = stat.base_stat;
          break;
        case 'attack':
          attack = stat.base_stat;
          break;
        case 'defense':
          defense = stat.base_stat;
          break;
        case 'speed':
          speed = stat.base_stat;
          break;
        case 'special-attack':
          specialAttack = stat.base_stat;
          break;
        case 'special-defense':
          specialDefense = stat.base_stat;
          break;
        default:
          break;
      }
    });

    const height =
      Math.round((pokemonRes.data.height * 0.328084 + 0.00001) * 100) / 100;

    const weight =
      Math.round((pokemonRes.data.weight * 0.220462 + 0.00001) * 100) / 100;

    const types = pokemonRes.data.types.map(type => type.type.name);

    const themeColor = `${TYPE_COLORS[types[types.length - 1]]}`;

    const abilities = pokemonRes.data.abilities
      .map(ability => {
        return ability.ability.name
          .toLowerCase()
          .split('-')
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ');
      })
      .join(', ');

    const evs = pokemonRes.data.stats
      .filter(stat => {
        if (stat.effort > 0) {
          return true;
        }
        return false;
      })
      .map(stat => {
        return `${stat.effort} ${stat.stat.name
          .toLowerCase()
          .split('-')
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ')}`;
      })
      .join(', ');

    await api.get(pokemonSpeciesUrl).then(res => {
      let description = '';
      res.data.flavor_text_entries.some(flavor => {
        if (flavor.language.name === 'en') {
          description = flavor.flavor_text;
        }
      });
      const femaleRate = res.data.gender_rate;
      const genderRatioFemale = 12.5 * femaleRate;
      const genderRatioMale = 12.5 * (8 - femaleRate);

      const catchRate = Math.round((100 / 255) * res.data.capture_rate);

      const eggGroups = res.data.egg_groups
        .map(group => {
          return group.name
            .toLowerCase()
            .split(' ')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
        })
        .join(', ');

      const hatchSteps = 255 * (res.data.hatch_counter + 1);

      this.setState({
        description,
        genderRatioFemale,
        genderRatioMale,
        catchRate,
        eggGroups,
        hatchSteps,
      });
    });

    this.setState({
      imageUrl,
      name,
      types,
      stats: {
        hp,
        attack,
        defense,
        speed,
        specialAttack,
        specialDefense,
      },
      themeColor,
      height,
      weight,
      abilities,
      evs,
    });
  }

  render() {
    const {
      pokemonIndex,
      types,
      name,
      imageUrl,
      themeColor,
      stats,
      description,
      height,
      weight,
      catchRate,
      genderRatioMale,
      genderRatioFemale,
      eggGroups,
      hatchSteps,
      abilities,
      evs,
    } = this.state;
    return (
      <Container>
        <PokeCard>
          <PokeId>
            <Id>{pokemonIndex}</Id>
          </PokeId>
          <Type>
            {types.map(type => (
              <TypeText key={type} background={TYPE_COLORS[type]}>
                {type
                  .toLowerCase()
                  .split(' ')
                  .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(' ')}
              </TypeText>
            ))}
          </Type>
          <Sprite source={{uri: imageUrl}} />
          <PokeName>
            {name
              .toLowerCase()
              .split(' ')
              .map(s => s.charAt(0).toUpperCase() + s.substring(1))
              .join(' ')}
          </PokeName>
        </PokeCard>

        <StatTitle>Hp</StatTitle>
        <Stats>
          <Stat width={stats.hp} background={themeColor}>
            <StatText margin={stats.hp}>{stats.hp}</StatText>
          </Stat>
        </Stats>

        <StatTitle>Attack</StatTitle>
        <Stats>
          <Stat width={stats.attack} background={themeColor}>
            <StatText margin={stats.attack}>{stats.attack}</StatText>
          </Stat>
        </Stats>

        <StatTitle>Defense</StatTitle>
        <Stats>
          <Stat width={stats.defense} background={themeColor}>
            <StatText margin={stats.defense}>{stats.defense}</StatText>
          </Stat>
        </Stats>

        <StatTitle>Speed</StatTitle>
        <Stats>
          <Stat width={stats.speed} background={themeColor}>
            <StatText margin={stats.speed}>{stats.speed}</StatText>
          </Stat>
        </Stats>

        <StatTitle>Special Attack</StatTitle>
        <Stats>
          <Stat width={stats.specialAttack} background={themeColor}>
            <StatText margin={stats.specialAttack}>
              {stats.specialAttack}
            </StatText>
          </Stat>
        </Stats>

        <StatTitle>Special Defense</StatTitle>
        <Stats>
          <Stat width={stats.specialDefense} background={themeColor}>
            <StatText margin={stats.specialDefense}>
              {stats.specialDefense}
            </StatText>
          </Stat>
        </Stats>
        <Description>{description.replace('\n', ' ')}</Description>
        <Profile>
          <ProfTitle>Profile</ProfTitle>
          <Col1>
            <ProfText>Height: {height} ft.</ProfText>
            <ProfText>Weight: {weight} lbs</ProfText>
            <ProfText>Catch Rate: {catchRate}%</ProfText>
            <ProfText>Gender Ratio:</ProfText>
            <GenderRatio>
              <GenderR femaleRate={genderRatioFemale} />
              <GenderText>
                {genderRatioFemale}% / {genderRatioMale}%
              </GenderText>
            </GenderRatio>
          </Col1>
          <Col2>
            <ProfText>Egg Groups: {eggGroups}</ProfText>
            <ProfText>Hatch Steps: {hatchSteps}</ProfText>
            <ProfText>Skills: {abilities}</ProfText>
            <ProfText>EVs: {evs}</ProfText>
          </Col2>
        </Profile>
      </Container>
    );
  }
}
