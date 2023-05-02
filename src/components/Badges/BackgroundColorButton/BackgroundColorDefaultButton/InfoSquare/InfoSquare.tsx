import {ButtonProps} from "../PrimarySquare/PrimarySquare";
import React from "react";
import BackgroundColorDefaultButton from "../index";

const InfoSquare = ({text}: ButtonProps) => {
    return <BackgroundColorDefaultButton text={text} textColor={"#2C97EB"} bgColor={"#C8E4FA"}/>


}
export default InfoSquare