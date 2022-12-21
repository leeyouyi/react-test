import React from "react";

const TestButton = ({
  children,
  ...other
}: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  // return <button>{children}</button>;
  const child = children || "我是按鈕";
  return <button {...other}>{child}</button>;
};

export default TestButton;
