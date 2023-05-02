import {ButtonProps} from "../PrimarySquare/PrimarySquare";
import React from "react";
import BackgroundColorLargeButton from "../index";

const ErrorSquare = ({text}: ButtonProps) => {
    return <BackgroundColorLargeButton text={text} textColor={"#EF4444"} bgColor={"#FEE2E2"}/>

}
export default ErrorSquare