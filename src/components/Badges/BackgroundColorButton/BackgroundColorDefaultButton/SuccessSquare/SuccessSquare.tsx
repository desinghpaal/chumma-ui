import {ButtonProps} from "../PrimarySquare/PrimarySquare";
import React from "react";
import BackgroundColorDefaultButton from "../index";

const SuccessSquare = ({text}: ButtonProps) => {
    return <BackgroundColorDefaultButton text={text} textColor={"#22C55E"} bgColor={"#DCFCE7"}/>

}
export default SuccessSquare