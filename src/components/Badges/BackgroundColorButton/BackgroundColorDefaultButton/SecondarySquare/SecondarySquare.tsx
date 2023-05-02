import {ButtonProps} from "../PrimarySquare/PrimarySquare";
import React from "react";
import BackgroundColorDefaultButton from "../index";

const SecondarySquare = ({text}: ButtonProps) => {
    return <BackgroundColorDefaultButton text={text} textColor={"#FFFFFF"} bgColor={"#F9B400"}/>
}
export default SecondarySquare