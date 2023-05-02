import BackgroundColorButton, {BackgroundColorButtonProps} from "../BackgroundColorButton";
import PrimarySquare from "./PrimarySquare";
import PrimaryRound from "./PrimaryRound";
import SecondarySquare from "./SecondarySquare";
import SecondaryRound from "./SecondaryRound";
import SuccessSquare from "./SuccessSquare";
import SuccessRound from "./SuccessRound";
import ErrorSquare from "./ErrorSquare";
import ErrorRound from "./ErrorRound";
import WarningSquare from "./WarningSquare";
import WarningRound from "./WarningRound";
import InfoSquare from "./InfoSquare";
import InfoRound from "./InfoRound";
import React from "react";
import {ButtonContainer} from "../BackgroundColorButton.style";

const BackgroundColorLargeButton = ({text, roundEdge, bgColor, textColor}: BackgroundColorButtonProps) => {
    return (
        <BackgroundColorButton text={text} roundEdge={roundEdge} bgColor={bgColor} textColor={textColor}
                               size={"Large"}/>
    )
}

export default BackgroundColorLargeButton

export function getLargeButtons() {
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