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
import {BadgeRow, ButtonContainer} from "../BackgroundColorButton.style";

const BackgroundColorLargeButton = ({text, roundEdge, bgColor, textColor}: BackgroundColorButtonProps) => {
    return (
        <BackgroundColorButton text={text} roundEdge={roundEdge} bgColor={bgColor} textColor={textColor}
                               size={"Large"}/>
    )
}

export default BackgroundColorLargeButton

export function getLargeButtons() {
    return (
        <ButtonContainer>
            <BadgeRow>
                <PrimarySquare text={"Primary"}/>
                <SecondarySquare text={"Secondary"}/>
                <SuccessSquare text={"Success"}/>
                <ErrorSquare text={"Error"}/>
                <WarningSquare text={"Warning"}/>
                <InfoSquare text={"Info"}/>
            </BadgeRow>

            <BadgeRow>
                <PrimaryRound text={"Primary"}/>
                <SecondaryRound text={"Secondary"}/>
                <SuccessRound text={"Success"}/>
                <ErrorRound text={"Error"}/>
                <WarningRound text={"Warning"}/>
                <InfoRound text={"Info"}/>
            </BadgeRow>
        </ButtonContainer>
    );
}