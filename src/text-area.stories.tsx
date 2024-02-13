import { Meta, StoryObj } from "@storybook/react";
import { ReactAutoTextArea } from "./react-auto-textarea";

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
        display: "inline-block",
        minWidth: "50px",
        maxWidth: "400px",
      }}
      {...args}
    />
  ),
};

export const withHeightStyle: Story = {
  render: (args) => (
    <ReactAutoTextArea
      style={{
        border: "1px solid black",
        display: "inline-block",
        minWidth: "50px",
        maxWidth: "400px",
        minHeight: "30px",
      }}
      {...args}
    />
  ),
};

export const customizedFontSize: Story = {
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

export const test: Story = {
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
  args: {},
};
