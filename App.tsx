import { ThemeProvider } from "styled-components/native";
import { 
  useFonts,
  Poppins_300Light,
  Poppins_600SemiBold
} from "@expo-google-fonts/poppins";

import Home from "./src/Screens/Home";
import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold
  });

  if(!fontsLoaded){
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}