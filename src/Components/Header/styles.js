import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  max-width: 100%;
  height: 45px;

  flex-direction: row;
  align-items: center;
  margin: 0 15px 0 15px;

  border-bottom-width: 1px;
  border-bottom-color: #999;
`;

export const Search = styled.TextInput`
  max-width: 40%;
  width: 100%;
  height: 35px;
  position: absolute;
  right: 5px;

  background-color: #fff;
  color: #111;

  border-radius: 10px;
  padding: 2px;
`;

export const IconSearch = styled(Icon)`
  position: absolute;
  right: 15px;
`;

export const Logo = styled.Image`
  height: 35px;
  width: 35px;
`;

export const Touchable = styled.TouchableOpacity`
  color: #fff;
  margin-left: 15px;
`;

export const Title = styled.View`
  margin-left: 15px;
  border-left-color: #999;
  border-left-width: 1px;
`;

export const TitleTxt = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  align-items: center;
  margin-left: 15px;
`;
