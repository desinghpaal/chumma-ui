import {ButtonProps} from "../PrimarySquare/PrimarySquare";
import React from "react";
import BackgroundColorLargeButton from "../index";

const SuccessSquare = ({text}: ButtonProps) => {
    return <BackgroundColorLargeButton text={text} textColor={"#22C55E"} bgColor={"#DCFCE7"}/>

}
export default SuccessSquare