import {ButtonProps} from "../PrimarySquare/PrimarySquare";
import React from "react";
import BackgroundColorDefaultButton from "../index";

const ErrorSquare = ({text}: ButtonProps) => {
    return <BackgroundColorDefaultButton text={text} textColor={"#EF4444"} bgColor={"#FEE2E2"}/>

}
export default ErrorSquare