import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "start",
  paddingLeft: "10%",
  rowGap: 20,
  boxSizing: "border-box",
});

export const demoCase = style({
  display: "flex",
  flexDirection: "column",
  rowGap: 2,
});
