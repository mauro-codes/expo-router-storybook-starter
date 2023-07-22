import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true";

const Index = () => {
  return (
    <SafeAreaView>
      <Text>Hello world</Text>
    </SafeAreaView>
  );
};

let EntryPoint = Index;

if (storybookEnabled) {
  const StorybookUI = require("../.storybook/native").default;
  EntryPoint = () => {
    return (
      <View style={{ flex: 1 }}>
        <StorybookUI />
      </View>
    );
  };
}

export default EntryPoint;
