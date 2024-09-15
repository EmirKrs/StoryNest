import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import AnimatedButton from "../../components/AnimatedButton";
import { FontAwesome6 } from "@expo/vector-icons";

const Index: React.FC<{ navigation: any }> = ({ navigation }) => {
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
        <Text style={styles.title}>Bedtime Stories</Text>
        <Text style={styles.text}>
          Lorem lorem lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          story lorem ipsum story
        </Text>
        <AnimatedButton
          title="Go to Stories"
          backgroundColor="#E9CEAF"
          marginVertical={40}
          color="#3C1D3D"
          width="60%"
          fontSize={20}
          onPress={() => navigation.navigate("List")}
          icon={<FontAwesome6 name="wand-magic-sparkles" size={26} color={'#3C1D3D'}/>}
        />
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
    textAlign: "center",
    width: "60%",
    marginTop: 20,
    fontSize: 16,
    fontFamily: "QuicksandBold",
    color: "#5A4B6E",
  },
});

export default Index;
