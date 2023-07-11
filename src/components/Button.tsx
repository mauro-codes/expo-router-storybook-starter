import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export type MyButtonProps = {
  onPress?: () => void;
  text: string;
  disabled?: boolean;
  type?: "primary" | "secondary" | "tertiary";
};

export const MyButton: React.FC<MyButtonProps> = ({
  onPress,
  text,
  disabled,
  type,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, { opacity: disabled ? 0.3 : 1 }]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text
        style={[
          styles.text,
          {
            fontSize: type === "primary" ? 16 : 12,
          },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "purple",
    borderRadius: 8,
  },
  text: { color: "white" },
});
