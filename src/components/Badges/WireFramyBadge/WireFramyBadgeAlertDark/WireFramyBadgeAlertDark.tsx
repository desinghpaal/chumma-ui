import React from "react";
import {
    WireFramyBadgeProps
} from "../WireFramyBadgeAlertLight/WireFramyBadgeAlterLight";
import {BadgeAlert, BadgeContainer, CloseButton} from "./WireFramyBadgeAlertDark.style";
import {BadgeRow, ButtonContainer} from "../../BackgroundColorButton/BackgroundColorButton.style";
import WireFramySuccessRoundedBadgeAlertDark from "./WireFramySuccessRoundedBadgeAlertDark";
import CloseIcon from "../../../CloseIcon";

const WireFramyBadgeAlertDark = ({bgColor, textColor, text, closeIcon, roundEdge}: WireFramyBadgeProps) => {
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
            <BadgeRow>
                <WireFramyBadgeAlertDark text={"Badge Success"} bgColor={"#22C55E"} textColor={"#DCFCE7"} roundEdge/>
                <WireFramyBadgeAlertDark text={"Badge Success"} bgColor={"#22C55E"} textColor={"#DCFCE7"} closeIcon
                                         roundEdge/>

                <WireFramySuccessRoundedBadgeAlertDark/>
                <WireFramyBadgeAlertDark text={"Badge Success"} bgColor={"#22C55E"} textColor={"#DCFCE7"}
                                         closeIcon/>
            </BadgeRow>
            <BadgeRow>
                <WireFramyBadgeAlertDark text={"Badge Primary"} bgColor={"#2C97EB"} textColor={"#FFFFFF"} roundEdge/>
                <WireFramyBadgeAlertDark text={"Badge Primary"} bgColor={"#2C97EB"} textColor={"#FFFFFF"} closeIcon
                                         roundEdge/>
                <WireFramyBadgeAlertDark text={"Badge Primary"} bgColor={"#2C97EB"} textColor={"#FFFFFF"}/>
                <WireFramyBadgeAlertDark text={"Badge Primary"}
                                         bgColor={"#2C97EB"}
                                         textColor={"#FFFFFF"}
                                         closeIcon/>


            </BadgeRow>

            <BadgeRow>
                <WireFramyBadgeAlertDark text={"Badge warning"} bgColor={"#F9B400"} textColor={"#FEF3C7"} roundEdge/>

                <WireFramyBadgeAlertDark text={"Badge warning"} bgColor={"#F9B400"} textColor={"#FEF3C7"} closeIcon
                                         roundEdge/>
                <WireFramyBadgeAlertDark text={"Badge warning"} bgColor={"#F9B400"} textColor={"#FEF3C7"}/>
                <WireFramyBadgeAlertDark text={"Badge warning"} bgColor={"#F9B400"} textColor={"#FEF3C7"} closeIcon/>

            </BadgeRow>

            <BadgeRow>
                <WireFramyBadgeAlertDark text={"Badge error"} bgColor={"#EF4444"} textColor={"#FEE2E2"} roundEdge/>
                <WireFramyBadgeAlertDark text={"Badge error"} bgColor={"#EF4444"} textColor={"#FEE2E2"} closeIcon
                                         roundEdge/>

                <WireFramyBadgeAlertDark text={"Badge error"} bgColor={"#EF4444"} textColor={"#FEE2E2"}/>
                <WireFramyBadgeAlertDark text={"Badge error"} bgColor={"#EF4444"} textColor={"#FEE2E2"} closeIcon/>
            </BadgeRow>
        </ButtonContainer>
    )
}
export default WireFramyBadgeAlertDark