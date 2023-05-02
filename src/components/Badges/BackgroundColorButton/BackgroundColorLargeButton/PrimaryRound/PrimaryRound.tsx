import {ButtonProps} from "../PrimarySquare/PrimarySquare";
import React from "react";
import BackgroundColorLargeButton from "../index";

const PrimaryRound = ({text}: ButtonProps) => {
    return <BackgroundColorLargeButton text={text} textColor={"#FFFFFF"} bgColor={"#2C97EB"} roundEdge/>
}

export default PrimaryRound