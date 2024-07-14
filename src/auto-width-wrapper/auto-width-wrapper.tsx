import { Fragment, useState } from "react";
import * as styles from "./auto-width-wrapper.css";

export interface AutoWidthWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Update content when use input, to ensure width holder hold the
   * corrct width
   */
  renderTextArea: (onContentUpdate: (text: string) => void) => React.ReactNode;
  value?: string;
  minRows?: number;
}

/**
 * Wrapper to handle the auto width grow
 */
export const AutoWidthWrapper = ({
  renderTextArea,
  value = "",
  className: _className,
  style: _style,
  ...rest
}: AutoWidthWrapperProps) => {
  // Need to have text to hold the height
  const [content, setContent] = useState(value);
  const [preValueProp, setPreValueProp] = useState(value);

  if (preValueProp !== value) {
    setPreValueProp(value);
    setContent(value);
  }

  return (
    <div className={styles.root} {...rest}>
      <div className={styles.widthHolder}>
        {/* To take up correct space when users input multiple lines */}
        {content.split("\n").map(function (item, index) {
          if (item.length === 0) {
            return (
              <Fragment key={`${index}-${item}`}>
                <div>{item}</div>
                <br />
              </Fragment>
            );
          }
          return <div key={`${index}-item`}>{item}</div>;
        })}
      </div>
      {renderTextArea((text: string) => {
        setContent(text);
      })}
    </div>
  );
};
