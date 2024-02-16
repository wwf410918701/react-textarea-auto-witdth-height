import { Meta, StoryObj } from "@storybook/react";
import { ReactAutoTextArea } from "./react-auto-textarea";
import { useState } from "react";

const meta: Meta<typeof ReactAutoTextArea> = {
  title: "TextArea",
  component: ReactAutoTextArea,
};

export default meta;

type Story = StoryObj<typeof ReactAutoTextArea>;

export const Base: Story = {
  render: (args) => (
    <ReactAutoTextArea
      style={{
        border: "1px solid black",
        minWidth: "50px",
        maxWidth: "400px",
      }}
      {...args}
    />
  ),
};

export const WithHeightStyle: Story = {
  render: (args) => (
    <ReactAutoTextArea
      style={{
        border: "1px solid black",
        minWidth: "50px",
        maxWidth: "400px",
        minHeight: "30px",
      }}
      {...args}
    />
  ),
};

export const CustomizedFontSize: Story = {
  render: (args) => (
    <ReactAutoTextArea
      style={{
        border: "1px solid black",
        display: "inline-block",
        minWidth: "50px",
        maxWidth: "400px",
        minHeight: "30px",
        maxHeight: "120px",
        fontSize: "40px",
      }}
      {...args}
    />
  ),
};

export const WithInitialContent: Story = {
  render: (args) => {
    const [state, setState] = useState(
      "Extra long content,  Extra long content,Extra long content,Extra long content,Extra long content,",
    );
    return (
      <ReactAutoTextArea
        style={{
          border: "1px solid black",
          minWidth: "50px",
          maxWidth: "400px",
          minHeight: "30px",
          maxHeight: "120px",
          fontSize: "40px",
        }}
        {...args}
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
    );
  },
};
