import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { styles } from "../styles/styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome on Board !!</Text>
      <TextInput
        placeholder="Username"
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        keyboardType="email-address"
        style={styles.input}
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
      <Link href="/about">About</Link>
      <StatusBar style="auto" />
    </View>
  );
}
