import {ButtonProps} from "../PrimarySquare/PrimarySquare";
import React from "react";
import BackgroundColorLargeButton from "../index";

const InfoRound = ({text}: ButtonProps) => {
    return <BackgroundColorLargeButton text={text} textColor={"#2C97EB"} bgColor={"#C8E4FA"} roundEdge/>

}
export default InfoRound