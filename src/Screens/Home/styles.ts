import { AntDesign } from '@expo/vector-icons';
import Animated from "react-native-reanimated";

import { Device } from "../../helpers/Device";
import styled, { css } from "styled-components/native";

const INITIAL_TRANSLATE_X = -(Device.width * 0.2);

export const Container = styled.View`
  flex: 1;

  padding-top: ${Device.width * 0.2}px;

  position: relative;
  z-index: 1000;
`;

export const Header = styled.View`
  width: 100%;

  justify-content: center;
  align-items: center;
`;

export const HeaderRow = styled.View`
  width: 80%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderContent = styled.View`
  width: 100%;
  margin-left: ${Device.width * 0.2}px;
`;

export const Title = styled(Animated.Text)`
  ${({ theme }) => css`
    font-family: ${theme.FONT.semi_bold};
    font-size: ${theme.FONT_SIZE.lg}px;
    color: ${theme.COLORS.dark};
    letter-spacing: 4px;
  `}
`;

export const Category = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT.light};
    font-size: ${theme.FONT_SIZE.sm}px;
    color: ${theme.COLORS.dark};
  `}
`;

export const ButtonCart = styled(Animated.View)`
  width: 42px;
  height: 42px;

  border-radius: 50px;
  background-color: ${({ theme }) => theme.COLORS.grey};

  align-items: center;
  justify-content: center;
`;

export const BikeContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const BikePoster = styled(Animated.Image)`
  width: 100%;
  height: 320px;
  ${() => `transform: translateX(${INITIAL_TRANSLATE_X.toFixed(0)}px)`}
`;

export const Footer = styled(Animated.View)`
  flex: 1;
  margin-top: ${Device.width * 0.3}px;
  margin-left: ${Device.width * 0.05}px;
`;

export const FooterTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT.semi_bold};
    font-size: ${theme.FONT_SIZE.md}px;
    color: ${theme.COLORS.dark};
    padding-bottom: ${Device.width * 0.02}px;
  `}
`;

export const FooterDescription = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT.light};
    font-size: ${theme.FONT_SIZE.sm}px;
    color: ${theme.COLORS.dark};
  `}
`;

export const Button = styled.TouchableOpacity`
  width: ${Device.width * 0.9}px;

  justify-content: flex-end;
  align-items: flex-end;

  margin-top: ${Device.width * 0.07}px;
`;

export const AnimatedWindow = styled(Animated.View)`
  ${({ theme }) => css`
    width: ${Device.width * 0.95}px;
    height: ${Device.width * 0.95}px;
    background-color: ${theme.COLORS.pink};

    position: absolute;
    top: -${Device.width * 0.01}px;
    right: -${Device.width * 0.01}px;

    z-index: -10;
  `}
`;

type IconProps = typeof AntDesign & {
  name: string;
  size: number;
};

export const Icon = styled(AntDesign).attrs<IconProps>(({ theme, name, size }) => ({
  name: name,
  size: size,
  color: theme.COLORS.dark
}))`

`;