import { Dimensions, Platform } from "react-native";

export type DeviceProps = {
  width: number;
  height: number;
  plataform: {
    plataform: "android" | "ios";
    behavior: "padding" | "height";
  };
};
const { width, height } = Dimensions.get("screen");

export const Device: DeviceProps = {
  width,
  height,
  plataform: {
    plataform: Platform.OS === "android" ? "android" : "ios",
    behavior: Platform.OS === "android" ? "height" : "padding",
  },
};
