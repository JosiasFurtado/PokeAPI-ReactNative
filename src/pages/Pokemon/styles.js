import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #111;
`;

export const PokeCard = styled.View`
  justify-content: center;
  align-items: center;
`;

export const PokeId = styled.View`
  align-self: flex-start;

  margin-top: 15px;
  margin-left: 15%;
  width: 30px;
  height: 30px;
  border-radius: 15px;

  border: 1px solid #fff;
`;

export const Id = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  align-self: center;
  padding: 2px;
`;

export const Type = styled.View`
  flex-direction: row;
  position: absolute;
  align-self: flex-end;
  right: 15%;
  top: 15px;
`;

export const TypeText = styled.Text`
  background-color: ${props => `#${props.background}`};
  color: #fff;
  border-radius: 10px;
  padding: 3px;
  align-self: center;
`;

export const PokeName = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

export const Sprite = styled.Image`
  height: 150px;
  width: 150px;
`;

export const Stats = styled.View`
  max-width: 300px;
  width: 100%;
  height: 20px;
  background-color: #444;
  border-radius: 10px;
  justify-content: center;
  align-self: center;
`;

export const Stat = styled.View`
  width: ${props => `${props.width >= 100 ? 100 : props.width}%`};
  height: 20px;
  border-radius: 10px;
  background-color: ${props => `#${props.background}`};
`;

export const StatTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-top: 5px;
  margin-left: 15%;
`;

export const StatText = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-left: ${props => `${(props.margin || 1) >= 89 ? 89 : props.margin}%`};
`;

export const Description = styled.Text`
  color: #fff;
  font-size: 12px;
  text-align: center;
  align-self: center;
  padding-bottom: 10px;

  margin-top: 5px;

  border-bottom-color: #fff;
  border-bottom-width: 1px;
`;

export const Profile = styled.View`
  flex-direction: row;
  margin-top: 25px;
  justify-content: space-around;
`;

export const ProfTitle = styled.Text`
  max-width: 300px;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  position: absolute;
  left: 50%;
  margin-top: -22px;
  margin-left: -30px;
`;

export const ProfText = styled.Text`
  color: #fff;
  margin-top: 2px;
`;

export const Col1 = styled.View``;

export const Col2 = styled.View``;

export const GenderRatio = styled.View`
  width: 100%;
  height: 20px;
  background-color: #1976d2;
  border-radius: 10px;
`;

export const GenderR = styled.View`
  width: 60%;
  height: 20px;
  background-color: #c2185b;
  border-radius: 10px;
`;

export const GenderText = styled.Text`
  color: #fff;
  margin-top: -20px;
  margin-left: 10px;
`;
