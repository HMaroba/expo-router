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
import { styles } from "../../styles/styles";

export default function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account Now !!</Text>
      <TextInput
        placeholder="Full Names"
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder="Phone Number"
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder="Email Address"
        keyboardType="email-address"
        style={styles.input}
      />

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
      {/* <Link href="/about">About</Link> */}
      <StatusBar style="auto" />
    </View>
  );
}
