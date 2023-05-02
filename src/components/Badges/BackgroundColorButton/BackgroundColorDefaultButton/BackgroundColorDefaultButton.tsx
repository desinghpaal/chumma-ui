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
import {BadgeRow, ButtonContainer} from "../BackgroundColorButton.style";

const BackgroundColorDefaultButton = ({text, roundEdge, bgColor, textColor}: BackgroundColorButtonProps) => {
    return (
        <BackgroundColorButton text={text} roundEdge={roundEdge} bgColor={bgColor} textColor={textColor}
                               size={"Default"}/>
    )
}

export default BackgroundColorDefaultButton

export function getDefaultButtons() {
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
