import { style } from "@vanilla-extract/css";

/**
 * Inherit all the font styles that are passed in the component
 * Making sure will take up same space as place holder
 */
export const fontStyle = style({
  fontSize: "inherit",
  fontWeight: "inherit",
  fontFamily: "inherit",
  lineHeight: "inherit",
  font: "inherit",
  fontVariant: "inherit",
  fontStyle: "inherit",
  wordBreak: "break-word",
  background: "inherit",
});
