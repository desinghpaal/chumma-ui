import BackgroundColorButton from "../index";
import {BackgroundColorButtonProps} from "../BackgroundColorButton";
import PrimarySquare from "./PrimarySquare";
import React from "react";
import PrimaryRound from "./PrimaryRound";
import SecondarySquare from "./SecondarySquare";
import SecondaryRound from "./SecondaryRound";
import SuccessSquare from "./SuccessSquare";
import SuccessRound from "./SuccessRound";
import ErrorSquare from "./ErrorSquare";
import ErrorRound from "./ErrorRound";
import WarningRound from "./WarningRound";
import WarningSquare from "./WarningSquare";
import InfoSquare from "./InfoSquare";
import InfoRound from "./InfoRound";
import {ButtonContainer} from "../BackgroundColorButton.style";

const BackgroundColorDefaultButton = ({text, roundEdge, bgColor, textColor}: BackgroundColorButtonProps) => {
    return (
        <BackgroundColorButton text={text} roundEdge={roundEdge} bgColor={bgColor} textColor={textColor} size={"Default"}/>
    )
}

export default BackgroundColorDefaultButton
export function getDefaultButtons() {
    return <ButtonContainer>
        <PrimarySquare text={"Primary"}/>
        <PrimaryRound text={"Primary"}/>

        <SecondarySquare text={"Secondary"}/>
        <SecondaryRound text={"Secondary"}/>

        <SuccessSquare text={"Success"}/>
        <SuccessRound text={"Success"}/>

        <ErrorSquare text={"Error"}/>
        <ErrorRound text={"Error"}/>

        <WarningSquare text={"Warning"}/>
        <WarningRound text={"Warning"}/>

        <InfoSquare text={"Info"}/>
        <InfoRound text={"Info"}/>
    </ButtonContainer>;
}
