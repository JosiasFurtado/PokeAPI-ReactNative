import styled from 'styled-components/native';

export const Container = styled.View`
  max-width: 100%;
  height: 45px;

  flex-direction: row;
  align-items: center;
  margin: 0 15px 0 15px;

  border-color: #999;
  border-bottom-width: 1px;
  border-bottom-color: #999;
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
  border-left-color: #999;
  border-left-width: 1px;
  border-left-style: solid;
`;

export const TitleTxt = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  align-items: center;
  margin-left: 15px;
`;
