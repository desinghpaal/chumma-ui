import React from "react";
import {
    WireFramyBadgeProps
} from "../WireFramyBadgeAlertLight/WireFramyBadgeAlterLight";
import {BadgeAlert, BadgeContainer, CloseButton} from "./WireFramyBadgeAlertDark.style";
import {ButtonContainer} from "../../BackgroundColorButton/BackgroundColorButton.style";
import WireFramySuccessRoundedBadgeAlertDark from "./WireFramySuccessRoundedBadgeAlertDark";
import CloseIcon from "../../../CloseIcon";

const WireFramyBadgeAlertDark = ({bgColor,textColor,text,closeIcon,roundEdge}:WireFramyBadgeProps) => {
    return (
        <BadgeContainer bgColor={bgColor} closeIcon={closeIcon} textColor={textColor} roundEdge={roundEdge}>
            <BadgeAlert textColor={textColor}>{text}</BadgeAlert>
            {closeIcon && <CloseButton>
                <CloseIcon color={textColor}/>
            </CloseButton>}
        </BadgeContainer>
    )
}

export const getWireFramyBadgeAlertDarkButtons = () => {
    return (
        <ButtonContainer>
            <WireFramySuccessRoundedBadgeAlertDark />
            <WireFramyBadgeAlertDark text={"Badge Success"} bgColor={"#22C55E"} textColor={"#DCFCE7"} closeIcon/>
            <WireFramyBadgeAlertDark text={"Badge Primary"} bgColor={"#2C97EB"} textColor={"#FFFFFF"} closeIcon/>
            <WireFramyBadgeAlertDark text={"Badge Primary"} bgColor={"#2C97EB"} textColor={"#FFFFFF"} />
            <WireFramyBadgeAlertDark text={"Badge warning"} bgColor={"#F9B400"} textColor={"#FEF3C7"} closeIcon/>
            <WireFramyBadgeAlertDark text={"Badge warning"} bgColor={"#F9B400"} textColor={"#FEF3C7"}/>
            <WireFramyBadgeAlertDark text={"Badge error"} bgColor={"#EF4444"} textColor={"#FEE2E2"} closeIcon/>
            <WireFramyBadgeAlertDark text={"Badge error"} bgColor={"#EF4444"} textColor={"#FEE2E2"} />
            <WireFramyBadgeAlertDark text={"Badge Success"} bgColor={"#22C55E"} textColor={"#DCFCE7"} roundEdge/>
            <WireFramyBadgeAlertDark text={"Badge Success"} bgColor={"#22C55E"} textColor={"#DCFCE7"} closeIcon roundEdge/>
            <WireFramyBadgeAlertDark text={"Badge Primary"} bgColor={"#2C97EB"} textColor={"#FFFFFF"} closeIcon roundEdge/>
            <WireFramyBadgeAlertDark text={"Badge Primary"} bgColor={"#2C97EB"} textColor={"#FFFFFF"} roundEdge/>
            <WireFramyBadgeAlertDark text={"Badge warning"} bgColor={"#F9B400"} textColor={"#FEF3C7"} closeIcon roundEdge/>
            <WireFramyBadgeAlertDark text={"Badge warning"} bgColor={"#F9B400"} textColor={"#FEF3C7"} roundEdge/>
            <WireFramyBadgeAlertDark text={"Badge error"} bgColor={"#EF4444"} textColor={"#FEE2E2"} closeIcon roundEdge/>
            <WireFramyBadgeAlertDark text={"Badge error"} bgColor={"#EF4444"} textColor={"#FEE2E2"} roundEdge/>
        </ButtonContainer>
    )
}
export default WireFramyBadgeAlertDark