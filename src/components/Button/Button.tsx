import React from "react";

const Button = ({
  children,
  ...other
}: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  // return <button>{children}</button>;
  const child = children || "我是按鈕";
  return <button {...other}>{child}</button>;
};

export default Button;
