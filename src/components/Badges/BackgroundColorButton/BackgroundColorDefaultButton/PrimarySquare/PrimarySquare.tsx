import React from "react";
import BackgroundColorDefaultButton from "../index";

export type ButtonProps = {
    text: string
}
const PrimarySquare = ({text}: ButtonProps) => {
    return <BackgroundColorDefaultButton text={text} textColor={"#FFFFFF"} bgColor={"#2C97EB"}/>
}

export default PrimarySquare