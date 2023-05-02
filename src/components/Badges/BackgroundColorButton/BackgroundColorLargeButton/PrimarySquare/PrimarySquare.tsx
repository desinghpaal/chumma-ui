import React from "react";
import BackgroundColorLargeButton from "../index";

export type ButtonProps = {
    text: string
}
const PrimarySquare = ({text}: ButtonProps) => {
    return <BackgroundColorLargeButton text={text} textColor={"#FFFFFF"} bgColor={"#2C97EB"}/>
}

export default PrimarySquare