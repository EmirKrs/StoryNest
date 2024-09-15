import { Text, Animated, TouchableOpacity, StyleSheet, View } from "react-native";
import React, { ReactNode, useEffect, useRef } from "react";

interface ButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  color?: string;
  width?: any;
  marginVertical?: number;
  fontSize?: number;
  icon?: ReactNode; // ikonu opsiyonel olarak geçirebilmek için
}

const AnimatedButton: React.FC<ButtonProps> = ({ title, onPress, backgroundColor = "#000", width = "40%", color = "#fff", marginVertical=20, fontSize=18, icon }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [scaleAnim]);

  return (
    <Animated.View
      style={[{ width,marginVertical }, { transform: [{ scale: scaleAnim }] }]}
    >
      <TouchableOpacity
        style={[styles.buttonContent, { backgroundColor }]}
        activeOpacity={0.8}
        onPress={onPress}
      >
        <Text style={[styles.text, { color, fontSize }]}>{title}</Text>
        {icon && <View style={styles.icon}>{icon}</View>}
      </TouchableOpacity>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  buttonContent: {
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    flexDirection: 'row',
  },
  text: {
    fontFamily: "JostExtraBold",
  },
  icon:{
    marginLeft: 10,
  }
});

export default AnimatedButton;
