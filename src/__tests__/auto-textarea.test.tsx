import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { AutoTextArea } from "..";

describe("Auto textarea can correctly ", () => {
  it("render", () => {
    const result = render(<AutoTextArea />);
    expect(result).toMatchSnapshot();
  });

  it("render with short content that not required to span horizontally", () => {
    const result = render(<AutoTextArea value="content" />);
    expect(result).toMatchSnapshot();
  });

  it("expand horizontally", () => {
    const result = render(<AutoTextArea value="content content content" />);
    expect(result).toMatchSnapshot();
  });

  it("expand both vertically and horizontally", () => {
    const result = render(
      <AutoTextArea value="extra long contentextra long contentextra long contentextra long contentextra long contentextra long contentextra long content" />,
    );
    expect(result).toMatchSnapshot();
  });

  it("render with styles", () => {
    const result = render(
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
        value="extra long contentextra long contentextra long contentextra long contentextra long contentextra long contentextra long content"
      />,
    );
    expect(result).toMatchSnapshot();
  });
});

const setup = (label?: string, onChange?: (e: any) => string) => {
  const ariaLabel = label ?? "auto-text-area";
  render(<AutoTextArea aria-label={ariaLabel} onChange={onChange} />);
  const input: HTMLTextAreaElement = screen.getByLabelText(ariaLabel);
  return input;
};

describe("When receive input, auto textarea can", () => {
  it("receive value", () => {
    const textarea = setup("receive value");
    fireEvent.change(textarea, { target: { value: "input" } });
    expect(textarea.value).toBe("input");
  });

  it("update horizontal size correctly", () => {
    const textarea = setup("update horizontal size correctly");
    fireEvent.change(textarea, {
      target: { value: "content content content" },
    });
    expect(textarea).toMatchSnapshot();
  });

  it("update horizontal and vertical size correctly", () => {
    const textarea = setup("update horizontal and vertical size correctly");
    fireEvent.change(textarea, {
      target: {
        value:
          "extra long contentextra long contentextra long contentextra long contentextra long contentextra long contentextra long content",
      },
    });
    expect(textarea).toMatchSnapshot();
  });

  it("trigger callback with correct prop", () => {
    const content =
      "extra long contentextra long contentextra long contentextra long contentextra long contentextra long contentextra long content";
    const callback = vi.fn((e) => {
      return e.target.value;
    });
    const textarea = setup("trigger callback with correct prop", callback);

    fireEvent.change(textarea, {
      target: {
        value: content,
      },
    });
    expect(callback).toBeCalledTimes(1);
    expect(callback).toReturnWith(content);
  });

  it("trigger reset correctly", () => {
    const emptyContent = "";
    const callback = vi.fn((e) => {
      return e.target.value;
    });
    const textarea = setup("trigger reset correctly", callback);

    fireEvent.change(textarea, {
      target: {
        value: "some input",
      },
    });
    expect(callback).toBeCalledTimes(1);
    fireEvent.change(textarea, {
      target: {
        value: emptyContent,
      },
    });
    expect(callback).toBeCalledTimes(2);
    expect(callback).toReturnWith(emptyContent);
    expect(textarea).toMatchSnapshot();
  });
});
