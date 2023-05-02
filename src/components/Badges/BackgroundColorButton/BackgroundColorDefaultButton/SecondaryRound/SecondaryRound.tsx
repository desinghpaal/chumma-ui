import {ButtonProps} from "../PrimarySquare/PrimarySquare";
import React from "react";
import BackgroundColorDefaultButton from "../index";

const SecondaryRound = ({text}: ButtonProps) => {
    return <BackgroundColorDefaultButton text={text} roundEdge textColor={"#FFFFFF"} bgColor={"#F9B400"}/>
}

export default SecondaryRound