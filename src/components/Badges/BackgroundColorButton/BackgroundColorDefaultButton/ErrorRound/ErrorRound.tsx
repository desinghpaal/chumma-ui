import {ButtonProps} from "../PrimarySquare/PrimarySquare";
import React from "react";
import BackgroundColorDefaultButton from "../index";

const ErrorRound = ({text}: ButtonProps) => {
    return <BackgroundColorDefaultButton text={text} textColor={"#EF4444"} bgColor={"#FEE2E2"} roundEdge/>

}
export default ErrorRound