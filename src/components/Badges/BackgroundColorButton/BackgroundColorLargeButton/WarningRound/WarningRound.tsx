import {ButtonProps} from "../PrimarySquare/PrimarySquare";
import React from "react";
import BackgroundColorLargeButton from "../index";

const WarningRound = ({text}: ButtonProps) => {
    return <BackgroundColorLargeButton text={text} textColor={"#F9B400"} bgColor={"#FEF3C7"} roundEdge/>

}
export default WarningRound