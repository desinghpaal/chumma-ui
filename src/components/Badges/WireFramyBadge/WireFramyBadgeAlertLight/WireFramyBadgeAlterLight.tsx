import {BadgeAlert, BadgeContainer, CloseButton} from "./WireFramyBadgeAlterLight.style";
import {BackgroundColorButtonProps} from "../../BackgroundColorButton/BackgroundColorButton";
import {BadgeRow, ButtonContainer} from "../../BackgroundColorButton/BackgroundColorButton.style";
import React from "react";
import WireFramyBadgeSuccessAlterLight from "./WireFramyBadgeSuccessAlterLight";
import CloseIcon from "../../../CloseIcon";

export type WireFramyBadgeProps = BackgroundColorButtonProps & { closeIcon?: boolean, outline?: boolean }

const WireFramyBadgeAlterLight = ({bgColor, textColor, text, roundEdge, closeIcon, outline}: WireFramyBadgeProps) => {
    return (
        <BadgeContainer bgColor={bgColor} roundEdge={roundEdge} closeIcon={closeIcon} textColor={textColor}
                        outline={outline}>
            <BadgeAlert textColor={textColor}>{text}</BadgeAlert>
            {closeIcon && <CloseButton>
                <CloseIcon color={textColor}/>
            </CloseButton>}
        </BadgeContainer>
    )
}

export const getWireFramyBadgeAlertLight = () => {
    return (
        <ButtonContainer>
            <BadgeRow>
                <WireFramyBadgeSuccessAlterLight text={"Badge Success"}/>
                <WireFramyBadgeAlterLight text={"Badge Success"} textColor={"#22C55E"} bgColor={"#DCFCE7"}
                                          roundEdge closeIcon/>
                <WireFramyBadgeAlterLight text={"Badge Success"} textColor={"#22C55E"} bgColor={"#DCFCE7"}
                />
                <WireFramyBadgeAlterLight text={"Badge Success"} textColor={"#22C55E"} bgColor={"#DCFCE7"}
                                          closeIcon/>

            </BadgeRow>

            <BadgeRow>
                <WireFramyBadgeAlterLight text={"Outline"} textColor={"#2C97EB"} bgColor={"#FFFFFF"}
                                          roundEdge outline/>
                <WireFramyBadgeAlterLight text={"Outline"} textColor={"#2C97EB"} bgColor={"#FFFFFF"}
                                          roundEdge closeIcon outline/>
                <WireFramyBadgeAlterLight text={"Outline"} textColor={"#2C97EB"} bgColor={"#FFFFFF"}
                                          outline/>
                <WireFramyBadgeAlterLight text={"Outline"} textColor={"#2C97EB"} bgColor={"#FFFFFF"}
                                          closeIcon outline/>
            </BadgeRow>

            <BadgeRow>
                <WireFramyBadgeAlterLight text={"Badge Warning"} textColor={"#F9B400"} bgColor={"#FEF3C7"}
                                          roundEdge/>
                <WireFramyBadgeAlterLight text={"Badge Warning"} textColor={"#F9B400"} bgColor={"#FEF3C7"}
                                          roundEdge closeIcon/>
                <WireFramyBadgeAlterLight text={"Badge Warning"} textColor={"#F9B400"} bgColor={"#FEF3C7"}
                />
                <WireFramyBadgeAlterLight text={"Badge Warning"} textColor={"#F9B400"} bgColor={"#FEF3C7"}
                                          closeIcon/>
            </BadgeRow>

            <BadgeRow>
                <WireFramyBadgeAlterLight text={"Badge error"} textColor={"#EF4444"} bgColor={"#FEE2E2"}
                                          roundEdge/>
                <WireFramyBadgeAlterLight text={"Badge error"} textColor={"#EF4444"} bgColor={"#FEE2E2"}
                                          roundEdge closeIcon/>
                <WireFramyBadgeAlterLight text={"Badge error"} textColor={"#EF4444"} bgColor={"#FEE2E2"}
                />
                <WireFramyBadgeAlterLight text={"Badge error"} textColor={"#EF4444"} bgColor={"#FEE2E2"}
                                          closeIcon/>
            </BadgeRow>

            <BadgeRow>
                <WireFramyBadgeAlterLight text={"Disabled"} textColor={"#9CA3AF"} bgColor={"#FFFFFF"}
                                          roundEdge/>
                <WireFramyBadgeAlterLight text={"Disabled"} textColor={"#9CA3AF"} bgColor={"#FFFFFF"}
                                          roundEdge closeIcon/>
                <WireFramyBadgeAlterLight text={"Disabled"} textColor={"#9CA3AF"} bgColor={"#FFFFFF"}
                />
                <WireFramyBadgeAlterLight text={"Disabled"} textColor={"#9CA3AF"} bgColor={"#FFFFFF"}
                                          closeIcon/>
            </BadgeRow>
        </ButtonContainer>
    )
}
export default WireFramyBadgeAlterLight