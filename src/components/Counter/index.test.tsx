import React from "react";
import { render, screen } from "@testing-library/react"; // 把 testing-library 常用的值引用進來
import Counter from ".";
import userEvent from "@testing-library/user-event";

describe("Test <Counter />", () => {
  // 每次測試後將 render 的 DOM 清空
  // afterEach(cleanup);
  test("測試click+1按鈕是否正確+1,click+2按鈕是否正確+2", () => {
    // render Component
    render(<Counter />);
    // 下方三個方法都可以找到顯示計數的 <span />
    expect(screen.getByTestId("display_count").textContent).toBe("點了0下");
    expect(screen.getByText("點了0下").textContent).toBe("點了0下");
    expect(
      screen.getByRole("button", { name: "點我加 1" })
    ).toBeInTheDocument();
    const button1 = screen.getByRole("button", { name: "點我加 1" }); // 在這邊「 點我加 1 」是 Button 裡面的內容
    userEvent.click(button1); // 模擬使用者的點擊行為
    expect(screen.getByTestId("display_count").textContent).toBe("點了1下");
    const button2 = screen.getByRole("button", { name: "點我加 2" }); // 在這邊「 點我加 2 」是 Button 裡面的內容
    userEvent.click(button2); // 模擬使用者的點擊行為
    expect(screen.getByTestId("display_count").textContent).toBe("點了3下");
  });
});
