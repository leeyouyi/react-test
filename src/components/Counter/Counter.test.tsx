import React from "react";
import { render, screen } from "@testing-library/react"; // 把 testing-library 常用的值引用進來
import Counter from "./Counter";

describe("Test <Counter />", () => {
  // 每次測試後將 render 的 DOM 清空
  // afterEach(cleanup);
  test("測試是否正常 render", () => {
    // render Component
    render(<Counter />);
    // 下方三個方法都可以找到顯示計數的 <span />
    expect(screen.getByTestId("display_count").textContent).toBe("點了0下");
    expect(screen.getByText("點了0下").textContent).toBe("點了0下");
    expect(
      screen.getByRole("button", { name: "點我加 1" })
    ).toBeInTheDocument();
  });
});
