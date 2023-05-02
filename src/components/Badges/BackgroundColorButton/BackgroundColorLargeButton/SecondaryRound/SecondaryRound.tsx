import {ButtonProps} from "../PrimarySquare/PrimarySquare";
import React from "react";
import BackgroundColorLargeButton from "../index";

const SecondaryRound = ({text}: ButtonProps) => {
    return <BackgroundColorLargeButton text={text} roundEdge textColor={"#FFFFFF"} bgColor={"#F9B400"}/>
}

export default SecondaryRound