import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="items-center justify-center flex-1 bg-zinc-950">
      <Text className="text-2xl font-bold text-white">Hello React</Text>
      <StatusBar style="light" translucent />
    </View>
  );
}
