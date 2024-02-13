import { HTMLAttributes, forwardRef } from "react";
import * as styles from "./input.css";

interface Props extends HTMLAttributes<HTMLTextAreaElement> {}

/**
 * Text area input that can fill the space that it is in
 */
export const Input = forwardRef<HTMLTextAreaElement, Props>((props, ref) => (
  <textarea ref={ref} className={styles.root} {...props} />
));
