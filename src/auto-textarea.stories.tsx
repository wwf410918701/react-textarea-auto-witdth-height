import { Meta, StoryObj } from "@storybook/react";
import { AutoTextArea } from "./auto-textarea";
import { useState } from "react";

const meta: Meta<typeof AutoTextArea> = {
  title: "TextArea",
  component: AutoTextArea,
};

export default meta;

type Story = StoryObj<typeof AutoTextArea>;

export const Base: Story = {
  render: (args) => (
    <AutoTextArea
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
    <AutoTextArea
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
    <AutoTextArea
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
      <AutoTextArea
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

export const ManuallyUpdateValue: Story = {
  render: (args) => {
    const [value, setValue] = useState("Old value");
    return (
      <div>
        <AutoTextArea
          style={{
            border: "1px solid black",
            display: "inline-block",
            minWidth: "50px",
            maxWidth: "400px",
            minHeight: "30px",
            maxHeight: "120px",
            fontSize: "40px",
          }}
          value={value}
          {...args}
        />
        <button
          onClick={() => {
            setValue(
              "Updatd value, and guess what, it is extra long, extra long, extra long, extra long, extra long, extra long, extra long, extra long, extra long,!",
            );
          }}
        >
          Update text
        </button>
      </div>
    );
  },
};
