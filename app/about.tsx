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
          <Link style={styles.boxText} href={"/screens/payments/deposit"}>
            Deposit
          </Link>
        </View>
        <View style={styles.column}>
          <Text style={styles.boxText}>Withdraw</Text>
        </View>
        <View style={styles.column}>
          <Link style={styles.boxText} href={"/screens/payments/pay"}>
            Pay
          </Link>
        </View>
        <View style={styles.column}>
          <Link style={styles.boxText} href={"/screens/payments/sendMoney"}>
            Send Money
          </Link>
        </View>
        <View style={styles.column}>
          <Text style={styles.boxText}>Profile</Text>
        </View>
        <View style={styles.column}>
          <Link style={styles.boxText} href={"/screens/payments/balance"}>
            Balance
          </Link>
        </View>
        <View style={styles.column}>
          <Link style={styles.boxText} href={"/screens/payments/history"}>
            History
          </Link>
        </View>
        <View style={styles.column}>
          <Link style={styles.boxText} href={"/screens/payments/more"}>
            More
          </Link>
        </View>

        <View style={styles.column}>
          <Text style={styles.boxText}>Logout</Text>
        </View>
      </View>
    </View>
  );
}
