import { useEffect, useState } from "react";
import { BackHandler } from 'react-native';
import {
  Easing,
  Keyframe,
  KeyframeProps,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSpring
} from "react-native-reanimated";
import ProductDescription from "../../Components/ProductDescription";
import { Device } from "../../helpers/Device";

import GetProducts, { GetProductsProps } from "../../helpers/Products";

import * as Styled from "./styles";

const INITIAL_ANIMATED_WINDOW_VALUE = (Device.width * 0.95);
const INITIAL_TRANSLATE_X = -(Device.width * 0.2);

interface FooterComponent {
  openPage: () => void;
  products: GetProductsProps[];
}


export default function Home() {
  const [pageIsOpened, setPageIsOpened] = useState<boolean>(false);

  const [products, setProducts] = useState<GetProductsProps[]>([] as GetProductsProps[]);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(true);

  const animatedWindow = useSharedValue({
    height: INITIAL_ANIMATED_WINDOW_VALUE,
    width: INITIAL_ANIMATED_WINDOW_VALUE
  });

  const animatedBike = useSharedValue(INITIAL_TRANSLATE_X);
  const animatedTitle = useSharedValue(0);

  function animateWindow() {
    if (!pageIsOpened) {
      animatedWindow.value = {
        height: Device.height,
        width: Device.width * 1.2
      };
    } else {
      animatedWindow.value = {
        height: INITIAL_ANIMATED_WINDOW_VALUE,
        width: INITIAL_ANIMATED_WINDOW_VALUE
      };
    }
  }

  function animateBike() {
    !pageIsOpened ? animatedBike.value = 0 : animatedBike.value = INITIAL_TRANSLATE_X;
  }

  function animateTitle() {
    !pageIsOpened
      ? animatedTitle.value = withDelay(550, withSpring(-(Device.width * 0.7)))
      : animatedTitle.value = withDelay(550, withSpring(0))
  }

  function openPage() {
    setPageIsOpened((oldValue) => !oldValue);
    animateWindow();
    animateBike();
    animateTitle();
  }

  const rAnimatedWindow = useAnimatedStyle(() => {
    return {
      height: withDelay(300, withSpring(animatedWindow.value.height)),
      width: withDelay(300, withSpring(animatedWindow.value.width)),
    }
  });

  const rAnimatedBike = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withDelay(400, withSpring(animatedBike.value)),
        },
      ],
      width: pageIsOpened ? withSpring(320) : withSpring(400),
      height: pageIsOpened ? withSpring(220) : withSpring(320),
    }
  }, [pageIsOpened]);

  const rAnimtedTitle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: animatedTitle.value,
        }
      ],
    }
  });

  const enteringAnimation = new Keyframe({
    0: {
      transform: [{ translateY: -(Device.width * 0.8) }],
      opacity: 0,
    },
    100: {
      transform: [{ translateY: 0 }],
      opacity: 1,
    }
  }).duration(500);

  const exitingAnimation = new Keyframe({
    100: {
      transform: [{ translateY: -(Device.width * 0.8) }],
      opacity: 1
    },
    0: {
      transform: [{ translateY: 0 }],
      opacity: 0,
    },
  }).duration(500);

  useEffect(() => {
    (async () => {
      const fetchProducts = await GetProducts();
      setProducts(fetchProducts);
      setLoadingProducts(false);
    })();
  }, []);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      if (pageIsOpened) {
        setPageIsOpened(false);
        animateWindow();
        animateBike();
        animateTitle();
      }

      return true
    })
  }, [pageIsOpened])

  if (loadingProducts) {
    return null;
  }

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.HeaderContent>
          <Styled.HeaderRow>
            <Styled.Category>{products[0].tag}</Styled.Category>
            {pageIsOpened && <Styled.ButtonCart
              entering={enteringAnimation}
              exiting={exitingAnimation}
            >
              <Styled.Icon
                name="shoppingcart"
                size={18}
              />
            </Styled.ButtonCart>
            }
          </Styled.HeaderRow>
          <Styled.Title
            numberOfLines={1}
            style={rAnimtedTitle}
          >
            BMW K30
          </Styled.Title>
        </Styled.HeaderContent>
      </Styled.Header>
      <Styled.BikeContainer>
        <Styled.BikePoster
          source={{ uri: "https://www.pngall.com/wp-content/uploads/5/Mountain-Trek-Bike-PNG-Free-Download.png" }}
          resizeMethod="resize"
          style={[{ resizeMode: 'cover' }, rAnimatedBike]}
        />
      </Styled.BikeContainer>
      {
        !pageIsOpened
          ? <Footer
            openPage={openPage}
            products={products}
          />
          : <ProductDescription
            products={products}
          />
      }
      <Styled.AnimatedWindow style={rAnimatedWindow} />
    </Styled.Container>
  )
}

function Footer({ openPage, products }: FooterComponent) {

  const enteringAnimation = new Keyframe({
    0: {
      transform: [{ translateY: -(Device.width * 0.8) }],
      opacity: 0,
    },
    100: {
      transform: [{ translateY: 0 }],
      opacity: 1,
    }
  }).duration(300);

  const exitingAnimation = new Keyframe({
    100: {
      transform: [{ translateY: -(Device.width * 0.8) }],
      opacity: 1
    },
    0: {
      transform: [{ translateY: 0 }],
      opacity: 0,
    },
  }).duration(300);

  return (
    <Styled.Footer entering={enteringAnimation} exiting={exitingAnimation}>
      <Styled.FooterTitle>Amazing Speed. {'\n'}Incredible Power</Styled.FooterTitle>
      <Styled.FooterDescription numberOfLines={2}>{products[0].description}</Styled.FooterDescription>
      <Styled.Button onPress={openPage}>
        <Styled.Icon
          name="arrowright"
          size={32}
        />
      </Styled.Button>
    </Styled.Footer>
  )
}

