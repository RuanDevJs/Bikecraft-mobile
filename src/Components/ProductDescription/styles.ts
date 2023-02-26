import { AntDesign } from '@expo/vector-icons';
import Animated from "react-native-reanimated";

import { Device } from "../../helpers/Device";
import styled, { css } from "styled-components/native";

export const Container = styled(Animated.View)`
  flex: 2;
  align-items: center;
  margin: 18px 0;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT.semi_bold};
    font-size: ${theme.FONT_SIZE.lg}px;
    color: ${theme.COLORS.dark};
    text-align: center;
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT.light};
    font-size: ${theme.FONT_SIZE.sm}px;
    color: ${theme.COLORS.dark};

    line-height: 26px;
    width: 85%;
    
    margin: 12px 0;
  `}
`;

export const Row = styled.View`
  width: 85%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; 
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT.semi_bold};
    font-size: ${theme.FONT_SIZE.md}px;
    color: ${theme.COLORS.dark};
    flex: 1;
  `}
`;

export const CartTitle = styled.Text`
    ${({ theme }) => css`
    font-family: ${theme.FONT.semi_bold};
    font-size: ${theme.FONT_SIZE.sm}px;
    color: ${theme.COLORS.dark};
  `}
`;

export const Button = styled.TouchableOpacity`
`;