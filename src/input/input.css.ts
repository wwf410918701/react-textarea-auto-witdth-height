import { style } from "@vanilla-extract/css";
import { fontStyle } from "../shareStyles.css";

export const root = style([
  fontStyle,
  {
    top: 0,
    left: 0,
    padding: 0,
    border: "none",
    height: "100%",
    width: "100%",
    position: "absolute",
    resize: "none",
    overflow: "hidden",

    ":focus": {
      outline: "none",
    },
  },
]);
