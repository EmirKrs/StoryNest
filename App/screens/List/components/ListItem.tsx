import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";

const screenWidth = Dimensions.get('window').width;

const ListItem: React.FC<{ navigation: any; item: any }> = ({ navigation, item }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
      style={styles.card}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Story", { item })}
      >
        
            <Image source={{uri:item.imageUrl}} style={styles.image}/>
          <Text style={styles.text}>{item.title}</Text>
    
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
    justifyContent: 'center',
     alignItems: 'center',
  },
  card:{
    paddingTop: 20,
    paddingBottom:10,
    width: screenWidth*0.9,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 30,
    backgroundColor: '#E9CEAF',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  text: {
    marginVertical: 5,
    fontFamily: "PacificoRegular",
    color: '#3C1D3D',
    textAlign: 'center',
    fontSize: 24,
  },
  image:{
    width: screenWidth*0.5,
    height: 250,
    marginTop:5,
    borderRadius: 20,
    borderTopLeftRadius: 140,
    borderTopRightRadius: 140,
  }
});

export default ListItem;
