import { Button, Text, TouchableOpacity, View } from "react-native";

export default function Latihan4() {
  return (
    <View>
      <Text>Latihan4</Text>

      <Button title="Press here" onPress={() => alert("Hello")} />

      <TouchableOpacity
        style={{
          backgroundColor: "blue",

          margin: 20,

          padding: 15,

          alignItems: "center",
        }}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}
