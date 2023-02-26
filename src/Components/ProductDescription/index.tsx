import { Keyframe } from "react-native-reanimated";
import { Device } from "../../helpers/Device";
import { GetProductsProps } from "../../helpers/Products";
import * as Styled from "./styles";

interface ProductDescription {
  products: GetProductsProps[];
}

export default function ProductDescription({ products }: ProductDescription) {

  const enteringAnimation = new Keyframe({
    0: {
      transform: [{ translateY: -(Device.width * 0.8)}],
      opacity: 0,
    },
    40: {
      opacity: 0
    },
    100: {
      transform: [{ translateY: 0 }],
      opacity: 1,
    }
  }).duration(300);
  
  const exitingAnimation = new Keyframe({
    0: {
      transform: [{ translateY: 0 }],
      opacity: 0,
    },
    40: {
      opacity: 0
    },
    100: {
      transform: [{ translateY: -(Device.width * 0.8) }],
      opacity: 1,
    }
  }).duration(300);

  return (
    <Styled.Container entering={enteringAnimation} exiting={exitingAnimation}>
      <Styled.Title>BMW K30</Styled.Title>
      <Styled.Description>{products[0].description}</Styled.Description>
      <Styled.Row>
        <Styled.Price>R$ {products[0].price}</Styled.Price>
        <Styled.Button>
          <Styled.CartTitle>ADD TO CART</Styled.CartTitle>
        </Styled.Button>
      </Styled.Row>
    </Styled.Container>
  )
}