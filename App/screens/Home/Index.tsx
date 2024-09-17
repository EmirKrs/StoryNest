import { Image, StyleSheet, Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import AnimatedButton from "../../components/AnimatedButton";
import { FontAwesome6 } from "@expo/vector-icons";
import { useLayoutEffect, useState } from "react";
import * as NavigationBar from "expo-navigation-bar";
import { useTranslation } from "react-i18next";
import * as Localization from 'expo-localization';
import "../../locales/i18n";

const Index: React.FC<{ navigation: any }> = ({ navigation }) => {
  const {t, i18n} = useTranslation();
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(prev => !prev);
    i18n.changeLanguage(isEnabled? 'en':'tr');
  };

  useLayoutEffect(() => {
    NavigationBar.setBackgroundColorAsync('#3C1D3D');
    const locales = Localization.getLocales();
    const userLanguage = locales[0]?.languageCode;
    setIsEnabled(userLanguage === 'tr');
    return () => {
      NavigationBar.setBackgroundColorAsync('#f0eae3');
    }
  },[]);

  return (
    <LinearGradient style={{ flex: 1 }} colors={["#121C2A", "#3C1D3D"]}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" translucent={true} />
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/images/home_screen.webp")}
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>{t('homeTitle')}</Text>
        <Text style={styles.text}>{t('homeText')}</Text>
        <AnimatedButton
          title={t('homeButton')}
          backgroundColor="#E9CEAF"
          marginVertical={40}
          color="#3C1D3D"
          width="60%"
          fontSize={20}
          onPress={() => navigation.navigate("List")}
          icon={<FontAwesome6 name="wand-magic-sparkles" size={26} color={'#3C1D3D'}/>}
        />
                <View style={styles.switchContainer}>
        <Switch 
        trackColor={{false: '#E9CEAF', true: '#E9CEAF'}}
        thumbColor={isEnabled? '#121C2A': '#121C2A'}
        onValueChange={toggleSwitch}
        value={isEnabled}
        />
        <Text style={styles.switchText}>{i18n.language}</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
  imageContainer: {
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
    width: "75%",
    aspectRatio: 10/12,
    borderWidth: 5,
    borderColor: "#E9CEAF",
    borderTopLeftRadius: 140,
    borderTopRightRadius: 140,
    shadowColor: "#E9CEAF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  image: {
    borderTopLeftRadius: 140,
    borderTopRightRadius: 140,
    width: "100%",
    height: "100%",
  },
  title: {
    textAlign: "center",
    marginTop: 16,
    fontSize: 34,
    fontFamily: "JostExtraBold",
    color: "#E9CEAF",
  },
  text: {
    textAlign: "justify",
    width: "70%",
    marginTop: 20,
    fontSize: 16,
    fontFamily: "QuicksandBold",
    color: "#5A4B6E",
  },
  switchContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
  },
  switchText:{
    color: '#E9CEAF',
    fontSize: 16,
    marginLeft:5,
    fontFamily: "QuicksandBold",
  }
});

export default Index;
