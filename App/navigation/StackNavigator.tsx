import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getHeaderAlignment, getHeaderFontSize } from "../utils/headerUtils";
//Screens
import HomeScreen from "../screens/Home/Index";
import StoryDetailScreen from "../screens/Story/Index";
import StoryListScreen from "../screens/List/Index";
import { useTranslation } from "react-i18next";


const Stack = createNativeStackNavigator();

const StackNavigator: React.FC = () => {
  const {t} = useTranslation();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="List"
          component={StoryListScreen}
          options={{
            headerTitleAlign: "center",
            headerTransparent: true,
            headerTitleStyle: { fontFamily: "MerriweatherBold", fontSize: 24 },
            headerTitle: t('stories'),
            headerTintColor: "#E9CEAF",
          }}
        />
        <Stack.Screen
          name="Story"
          component={StoryDetailScreen}
          options={({ route }) => {
            const title = (route.params as { item: { title: string } }).item.title;
            const headerTitleAlign = getHeaderAlignment(title);
            const fontSize = getHeaderFontSize(title);
            return {
              title,
              headerTitleAlign,
              headerTransparent: true,
              headerTitleStyle: { fontFamily: "PacificoRegular", fontSize },
              headerTintColor: '#3C1D3D',
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
