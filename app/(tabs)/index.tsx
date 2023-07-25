import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

import Lottie from "lottie-react-native";

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Lottie
          source={require("@/lottie-animations/threads.json")}
          loop
          autoPlay
          style={{ width: 90, height: 90, alignSelf: "center" }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
