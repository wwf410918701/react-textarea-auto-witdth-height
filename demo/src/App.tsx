import { AutoTextArea } from "react-textarea-auto-witdth-height";
import * as styles from "./app.css";

const DemoCases = [
  {
    title: "Component with min width",
    defaultValue: "Please input here",
    style: {
      border: "1px solid black",
      minWidth: "100px",
    },
  },
  {
    title: "Component with min and max width style",
    style: {
      border: "1px solid black",
      minWidth: "100px",
      maxWidth: "200px",
      background: "white",
      color: "black",
    },
  },
  {
    title: "Component with min width, max width and min height style",
    style: {
      border: "1px solid black",
      minWidth: "100px",
      maxWidth: "200px",
      minHeight: "30px",
    },
  },
  {
    title:
      "Component with min width, max width, min height and max height style",
    style: {
      border: "1px solid black",
      minWidth: "100px",
      maxWidth: "200px",
      minHeight: "30px",
      maxHeight: "120px",
    },
  },
];

function App() {
  return (
    <div className={styles.root}>
      <h1>{`import {AutoTextArea} from 'react-textarea-auto-witdth-height'`}</h1>
      {DemoCases.map(({ title, style, ...rest }) => (
        <div className={styles.demoCase}>
          <h3>{title}</h3>
          <div>
            <AutoTextArea style={style} {...rest} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
