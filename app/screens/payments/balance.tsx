import { StatusBar } from "expo-status-bar";
import React from "react";

import { Bar, Doughnut, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  registerables,
  Legend,
} from "chart.js";

import { Text, View, ScrollView } from "react-native";
import { Link } from "expo-router";
import { styles } from "../../../styles/styles";

const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ...registerables,
  Title,
  Tooltip,
  Legend
);

export const Data = {
  labels: ["Deposit", "Withdrawals"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

export default function Balance() {
  const getChartData = () => {
    const chartData = {
      labels: ["Customers", "Agent"],
      datasets: [
        {
          data: [20, 80],
          backgroundColor: ["#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#36A2EB", "#FFCE56"],
        },
      ],
    };

    return chartData;
  };
  return (
    <View style={styles.container2}>
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "800" }}>Balance</Text>
          <Text style={{ fontSize: 15 }}>20 Feb 2023</Text>
        </View>
        <Text style={{ marginLeft: "auto" }}>Down</Text>
      </View>

      <View style={{ backgroundColor: "black", padding: 20, borderRadius: 10 }}>
        <Text style={{ fontSize: 20, color: "white" }}>Balance : M123.00</Text>
        <Text style={{ fontSize: 14, color: "white" }}>
          Available : M123.00
        </Text>
        <Text style={{ fontSize: 14, color: "white" }}>
          Account Number : 565787878
        </Text>
        <StatusBar style="auto" />
      </View>

      <View
        style={{
          backgroundColor: "black",
          padding: 20,
          borderRadius: 10,
          marginTop: 20,
        }}
      >

        <Text style={{ fontSize: 20, color: "white", marginBottom: 10 }}>
          Transactions
        </Text>
        <ScrollView>
          <View style={{ backgroundColor: "gray", padding: 5 }}>
            <Text style={{ fontSize: 14, color: "white" }}>Hlalele Maroba</Text>
            <Text
              style={{
                fontSize: 14,
                color: "green",
                textAlign: "right",
                fontWeight: "700",
              }}
            >
              {" "}
              +M200.00
            </Text>
            <Text style={{ fontSize: 14, color: "white" }}>Deposited</Text>
          </View>
          <View style={{ backgroundColor: "gray", padding: 5, marginTop: 8 }}>
            <Text style={{ fontSize: 14, color: "white" }}>Hlalele Maroba</Text>
            <Text
              style={{
                fontSize: 14,
                color: "red",
                textAlign: "right",
                fontWeight: "700",
              }}
            >
              {" "}
              -M200.00
            </Text>
            <Text style={{ fontSize: 14, color: "white" }}>Withdrawal</Text>
          </View>
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
