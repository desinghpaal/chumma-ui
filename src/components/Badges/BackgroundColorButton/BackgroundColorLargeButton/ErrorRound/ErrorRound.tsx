import {ButtonProps} from "../PrimarySquare/PrimarySquare";
import React from "react";
import BackgroundColorLargeButton from "../index";

const ErrorRound = ({text}: ButtonProps) => {
    return <BackgroundColorLargeButton text={text} textColor={"#EF4444"} bgColor={"#FEE2E2"} roundEdge/>

}
export default ErrorRound