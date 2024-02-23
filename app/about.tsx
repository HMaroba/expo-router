import { Text, View, ImageBackground } from "react-native";

import { Link } from "expo-router";
import { styles } from "../styles/styles";

const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

export default function About() {
  return (
    <View>
      <View>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>
      </View>
      <View style={styles.About}>
        <View style={styles.column}>
          <Text style={styles.boxText}>Deposit</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.boxText}>Withdraw</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.boxText}>Pay</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.boxText}>Send Money</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.boxText}>Profile</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.boxText}>Logout</Text>
        </View>
      </View>
    </View>
  );
}
