import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Link } from "expo-router";
import { styles } from "../styles/styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome on Board !!</Text>
      <Text style={styles.label}>Username</Text>
      <TextInput
        placeholder="Username"
        keyboardType="email-address"
        style={styles.input}
      />
        <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="Password"
        keyboardType="email-address"
        style={styles.input}
      />
      <TouchableOpacity style={styles.btn}>
        <Link style={styles.btnText} href={"/about"}>
          Submit
        </Link>
      </TouchableOpacity>
      <Link href="/screens/register" style={styles.registerLink}>Register today to join us </Link>
      <StatusBar style="auto" />
    </View>
  );
}
