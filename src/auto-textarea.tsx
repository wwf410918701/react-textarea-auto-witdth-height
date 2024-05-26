import { TextareaHTMLAttributes, forwardRef } from "react";
import { AutoWidthWrapper } from "./auto-width-wrapper";
import { Input } from "./input";
import * as styles from "./auto-textarea.css";
import clsx from "clsx";

interface AutoTextAreaProps
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "rows | cols | 'value"
  > {
  value?: string;
}

/**
 * A textarea that can automatically resize in both width and height.
 * In other words it behaves the same as a div, which means it will
 * first expand horizontally, then grow vertically after it reached the
 * width limit, then finally become scrollable to accomdate the overflow
 * content by default if it has any height limit.
 */
export const AutoTextArea = forwardRef<HTMLTextAreaElement, AutoTextAreaProps>(
  ({ onChange, style, className, value, ...rest }, ref) => (
    <div style={style} className={clsx(className, styles.mockTextareaBorder)}>
      <AutoWidthWrapper
        value={value}
        renderTextArea={(onContentUpdate) => (
          <Input
            {...rest}
            ref={ref}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              onContentUpdate(e.target.value);
              if (!onChange) return;
              onChange(e);
            }}
          />
        )}
      />
    </div>
  ),
);
