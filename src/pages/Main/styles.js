import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const PokeCard = styled.TouchableOpacity`
  flex: 1;
  max-width: 200px;
  height: 100px;
  width: 100%;
  margin: 2px;
  color: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  justify-content: center;
`;

export const PokeName = styled.Text`
  color: #fff;
  align-self: center;
  font-weight: bold;
`;

export const PokeImg = styled.Image`
  align-self: center;
  width: 60px;
  height: 60px;
`;

export const PokeId = styled.Text`
  color: #fff;
  margin-left: 5px;
`;

export const List = styled.FlatList`
  margin-top: 5px;
  max-height: 91%;
`;

export const Spinner = styled(Icon)`
  align-self: center;
  width: 30px;
  height: 30px;
  margin: 8px;
`;

export const Page = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
  padding: 5px;
`;

export const PageNumber = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 25px;
  height: 25px;
  margin: 10px;
  padding: 5px;
  border-radius: 15px;
`;
