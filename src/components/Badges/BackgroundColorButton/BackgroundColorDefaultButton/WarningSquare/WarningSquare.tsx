import {ButtonProps} from "../PrimarySquare/PrimarySquare";
import React from "react";
import BackgroundColorDefaultButton from "../index";

const WarningSquare = ({text}: ButtonProps) => {
    return <BackgroundColorDefaultButton text={text} textColor={"#F9B400"} bgColor={"#FEF3C7"}/>
}
export default WarningSquare