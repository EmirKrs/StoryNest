import { StyleSheet, FlatList, ActivityIndicator, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { collection, getDocs } from "firebase/firestore";
import { fireDB } from "../../../firebasConfig";
import ListItem from "./components/ListItem";

interface Tale {
  title: string;
  content: string;
  imageUrl: string;
}

const Index: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [tales, setTales] = useState<Tale[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(fireDB, 'tales-tr'));
        const data = querySnapshot.docs.map(doc => doc.data() as Tale);
        setTales(data);
        return data;
      } catch (e) {
        console.error('Error fetching documents: ', e);
      } finally{
        setLoading(false);
      }
    };
    fetchData();
  },[]);


  if(loading) {
    return(
      <LinearGradient 
      colors={["#121C2A", "#3C1D3D"]}
      style={{justifyContent:'center', alignItems:'center',flex:1}}>
              <ActivityIndicator size='large' color='#E9CEAF'/>
      </LinearGradient>

    )
  }

  return (
    <LinearGradient colors={["#121C2A", "#3C1D3D"]} style={{ flex: 1, justifyContent: 'center' }}>
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
          data={tales}
          keyExtractor={(item) => item.title.toString()}
          renderItem={({ item }) => (
            <ListItem navigation={navigation} item={item} />
          )}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    width: '100%',
  },
  list:{
     width: "100%", 
     height: "90%",
  }
});

export default Index;
