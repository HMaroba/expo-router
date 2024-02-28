import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function More() {
  return (
    <View>
      <View
        style={{
          backgroundColor: "black",
          minHeight: 200,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: 20,
        }}
      >
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text
            style={{
              fontSize: 30,
              color: "white",
              fontWeight: "200",
            }}
          >
            Hi
          </Text>
          <Text
            style={{
              fontSize: 30,
              color: "white",
              fontWeight: "600",
              marginLeft: 30,
            }}
          >
            Hlalele Maroba
          </Text>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: "white",
            fontWeight: "200",
            marginTop: 20,
          }}
        >
          Balance
        </Text>
        <Text style={{ fontSize: 40, color: "white", fontWeight: "800" }}>
          LSL 20000.00
        </Text>
      </View>

      <View
        style={{
          padding: 20,
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <View
          style={{
            padding: 5,

            flexDirection: "row",
            marginTop: 20,
            width: "100%",
          }}
        >
          <View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "gray",
                height: 60,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                marginRight: 10,
              }}
            >
              <Feather name="send" size={32} color="green" />
            </View>
          </View>
          <View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "gray",
                height: 60,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                marginRight: 10,
              }}
            >
         
              <MaterialCommunityIcons name="contactless-payment" size={32} color="green" />
            </View>
          </View>

          <View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "gray",
                height: 60,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                marginRight: 10,
              }}
            >
              <Feather name="send" size={32} color="green" />
            </View>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: "gray",
              height: 60,
              width: 60,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              marginRight: 10,
            }}
          >
            <FontAwesome name="user-plus" size={28} color="green" />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "gray",
              height: 60,
              width: 60,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              marginRight: 10,
            }}
          >
           <AntDesign name="logout" size={32} color="green" />
          </View>
        </View>
      </View>
    </View>
  );
}
