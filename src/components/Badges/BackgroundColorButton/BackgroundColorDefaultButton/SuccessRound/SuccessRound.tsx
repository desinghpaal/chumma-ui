import {ButtonProps} from "../PrimarySquare/PrimarySquare";
import React from "react";
import BackgroundColorDefaultButton from "../index";

const SuccessRound = ({text}: ButtonProps) => {
    return <BackgroundColorDefaultButton text={text} textColor={"#22C55E"} bgColor={"#DCFCE7"} roundEdge/>

}
export default SuccessRound