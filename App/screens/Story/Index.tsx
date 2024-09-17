import { Text, StyleSheet, ScrollView } from "react-native";
import {useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AnimatedButton from "../../components/AnimatedButton";
import { FontAwesome6 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as NavigationBar from "expo-navigation-bar";
import { useTranslation } from "react-i18next";

const Index: React.FC<{ navigation: any; route: any }> = ({ navigation, route}) => {
  const  item  = (route.params as { item: { title: string, content:string } }).item;

  const firstLetter = item.content.charAt(0);
  const restOfText = item.content.slice(1);
  const {t} = useTranslation();

  useLayoutEffect(() => {
    NavigationBar.setBackgroundColorAsync('#f0eae3');
    return () => {
      NavigationBar.setBackgroundColorAsync('#3C1D3D');
    }
  },[]);

  return (
    <LinearGradient style={{ flex: 1 }} colors={["#E9CEAF", "#f0eae3"]}>
      <SafeAreaView style={{flex:1}}>
        <ScrollView
          style={{ marginTop: 60}}
          contentContainerStyle={{ justifyContent: "center", alignItems: "center"}}>

          <Text style={{ fontSize: 18, paddingHorizontal: 20, textAlign: 'justify', fontFamily: "PacificoRegular",}}>
            <Text style={{ fontSize: 24, paddingHorizontal: 20, fontFamily: "PacificoRegular",}}> {firstLetter}</Text>
            {restOfText}
          </Text>

          <AnimatedButton
           width='80%' 
           title={t('goodnightButton')} 
           backgroundColor="#3C1D3D"
           onPress={() => navigation.navigate('List')} 
           icon={<FontAwesome6 name="moon" size={22} color={'#fff'}/>}/>
        </ScrollView>
      </SafeAreaView>
      </LinearGradient>
  );
};
const styles = StyleSheet.create({
  
});

export default Index;
