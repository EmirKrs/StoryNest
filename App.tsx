import StackNavigator from './App/navigation/StackNavigator';
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    PacificoRegular: require("./assets/fonts/Pacifico-Regular.ttf"),
    MerriweatherBold: require("./assets/fonts/Merriweather-Bold.ttf"),
    MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
    QuicksandBold: require("./assets/fonts/Quicksand-Bold.ttf"),
    JostExtraBoldItalic: require("./assets/fonts/Jost-ExtraBoldItalic.ttf"),
    EBGaramondBold: require("./assets/fonts/EBGaramond-Bold.ttf"),
    EBGaramondExtraBoldItalic: require("./assets/fonts/EBGaramond-ExtraBoldItalic.ttf"),
    EBGaramondExtraBold: require("./assets/fonts/EBGaramond-ExtraBold.ttf"),
    JostExtraBold: require("./assets/fonts/Jost-ExtraBold.ttf"),
  });

  useEffect(() => {
    SplashScreen.hideAsync();
  }, [loaded, error]);


  if (!loaded && !error) {
    return null;
  }
  
  return (
    <StackNavigator/>
  );
}
