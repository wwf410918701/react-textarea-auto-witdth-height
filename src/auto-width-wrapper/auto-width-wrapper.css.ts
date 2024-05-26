import { style } from "@vanilla-extract/css";
import { fontStyle } from "../shareStyles.css";

export const root = style({
  position: "relative",
  display: "inline-block",
  border: "none",
  width: "100%",
});

export const widthHolder = style([
  fontStyle,
  {
    visibility: "hidden",
    whiteSpace: "pre-wrap",
    padding: 0,
    margin: 0,
    boxSizing: "inherit",
  },
]);
