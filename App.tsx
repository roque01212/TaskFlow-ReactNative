import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "./src/constants/theme";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
