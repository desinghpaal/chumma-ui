import {ButtonProps} from "../PrimarySquare/PrimarySquare";
import React from "react";
import BackgroundColorLargeButton from "../index";

const SecondarySquare = ({text}: ButtonProps) => {
    return <BackgroundColorLargeButton text={text} textColor={"#FFFFFF"} bgColor={"#F9B400"}/>
}
export default SecondarySquare