import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import styled from "@emotion/styled";

export enum EdesignColor {
  blue = "blue",
  blueoutline = "blueoutline",
  green = "green",
  yellow = "yellow",
  white = "white",
}
export interface ButtonProps extends MuiButtonProps {
  designColor: EdesignColor;
}

const Button = (props: ButtonProps): JSX.Element => {
  const { children, size, designColor, ...other } = props;
  return (
    <Style>
      <MuiButton
        className={
          size !== "small" ? `${designColor} btn` : `${designColor} btn btn-sm`
        }
        {...other}
      >
        {children}
      </MuiButton>
    </Style>
  );
};

const Style = styled.div`
  .btn {
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    line-height: 1.5;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .btn {
    border-radius: 30px;
    padding: 5px 15px;
    font-size: 1.5rem;
    min-width: 120px;
    margin-left: 10px;
    transition: all 0.2s ease-out;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .btn-sm {
    margin: 0 2px;
    font-size: 1.5rem;
    margin-left: 10px;
    min-width: 84px;
    padding: 6px 15px;
  }
  .white {
    color: #2493e0;
    background: linear-gradient(180deg, #fff 0, #e9f2fe 100%);
    border: 1px solid #fff;
    box-shadow: 2px 2px 8px rgb(0 50 0 / 20%);
    padding: 5px 15px;
  }
  .white:hover {
    border: 1px solid #538cef;
  }
  .yellow {
    color: #fff;
    font-weight: bolder;
    background: linear-gradient(180deg, #fcc900 0, #fa953b 100%);
    border: 0 !important;
    box-shadow: 3px 3px 10px 0 rgb(100 90 0 / 13%);
  }
  .yellow:hover {
    background: linear-gradient(180deg, #e04a4a 0, #b10a10 100%);
    transform: scale(1.07);
  }
  .blue {
    background: linear-gradient(180deg, #2493e0 0, #1073c9 100%);
    /* background: linear-gradient(180deg, #538cef 0, #0063b3 100%); */
    border: 0 !important;
    box-shadow: 2px 2px 12px rgb(0 0 150 / 20%);
  }
  .blue:hover {
    background: linear-gradient(180deg, #538cef 0, #0063b3 100%);
    transform: scale(1.07);
  }
  .green {
    background: linear-gradient(180deg, #95c980 0, #67a254 100%);
    border: 0 !important;
    box-shadow: 3px 3px 10px 0 rgb(0 50 0 / 17%);
  }
  .green:hover {
    background: linear-gradient(180deg, #67a254 0, #256c34 100%);
    transform: scale(1.07);
  }
  .red {
    background: linear-gradient(180deg, #e04a4a 0, #b10a10 100%);
    border: 0 !important;
    box-shadow: 3px 3px 10px 0 rgb(0 50 0 / 17%);
  }
  .red:hover {
    background: linear-gradient(180deg, #e04a4a 0, #dc3545 100%);
    transform: scale(1.07);
  }
  .blueoutline {
    color: #538cef;
    background-color: #fff;
    border-color: #538cef !important;
    box-shadow: 3px 3px 10px 0 rgb(0 50 0 / 17%);
  }
  .blueoutline:hover {
    color: #f96710;
    border-color: #f96710 !important;
    transform: scale(1.07);
  }
`;

export default Button;
