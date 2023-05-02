import {ButtonProps} from "../PrimarySquare/PrimarySquare";
import React from "react";
import BackgroundColorDefaultButton from "../index";

const PrimaryRound = ({text}: ButtonProps) => {
    return <BackgroundColorDefaultButton text={text} textColor={"#FFFFFF"} bgColor={"#2C97EB"} roundEdge/>
}

export default PrimaryRound