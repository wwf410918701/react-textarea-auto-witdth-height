import { TextareaHTMLAttributes } from "react";
import { AutoWidthWrapper } from "./auto-width-wrapper";
import { Input } from "./input";
import * as styles from "./react-auto-textarea.css";
import clsx from "clsx";

type ReactAutoTextAreaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "rows | cols"
>;

/**
 * A textarea that can automatically resize in both width and height.
 * In other words it behaves the same as a div, which means it will
 * first expand horizontally, then grow vertically after it reached the
 * width limit, then finally become scrollable to accomdate the overflow
 * content by default if it has any height limit.
 */
export const ReactAutoTextArea = ({
  onChange,
  style,
  className,
  ...rest
}: ReactAutoTextAreaProps) => (
  <div style={style} className={clsx(className, styles.mockTextareaBorder)}>
    <AutoWidthWrapper
      renderTextArea={(onContentUpdate) => (
        <Input
          {...rest}
          onChange={(e: any) => {
            onContentUpdate(e.target.value);
            if (!onChange) return;
            onChange(e.target.value);
          }}
        />
      )}
    />
  </div>
);
