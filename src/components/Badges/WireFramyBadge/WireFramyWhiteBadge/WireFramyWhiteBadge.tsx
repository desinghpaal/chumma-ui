import React from "react";
import {Badge, BadgeContainer, Ellipse, Rectangle} from "./WireFramyWhiteBadge.style";
import {CloseButton} from "../WireFramyBadgeAlertLight/WireFramyBadgeAlterLight.style";
import {BadgeRow, ButtonContainer} from "../../BackgroundColorButton/BackgroundColorButton.style";
import CloseIcon from "../../../CloseIcon";
import WireFramyWhiteBadgeWithEllipse from "./WireFramyBadgeWhiteWithEllipse";
import WireFramyWhiteBadgeWithLine from "./WireFramyBadgeWhiteWithLine";

export type WireFramyBadgeWhiteBGProps = {
    text: string,
    roundEdge?: boolean,
    closeIcon?: boolean,
    pointerColor: string
}

type WireFramyBadgeWhiteBGWithPointerProps = {
    pointer: "Rectangle" | "Ellipse",
} & WireFramyBadgeWhiteBGProps

const WireFramyBadgeAlterWithWhiteBG = ({
                                            text,
                                            roundEdge,
                                            closeIcon,
                                            pointer,
                                            pointerColor
                                        }: WireFramyBadgeWhiteBGWithPointerProps) => {
    const bgColor: string = "#FFFFFF";
    const textColor: string = "#9CA3AF"
    return (
        <BadgeContainer bgColor={bgColor} roundEdge={roundEdge} closeIcon={closeIcon} textColor={textColor} outline>
            {pointer === "Rectangle" ? <Rectangle color={pointerColor}/> : <Ellipse color={pointerColor}/>}
            <Badge textColor={textColor}>{text}</Badge>
            {closeIcon && <CloseButton>
                <CloseIcon color={textColor}/>
            </CloseButton>}
        </BadgeContainer>
    )
}


export const getWireFramyBadgesAlterWithWhiteBG = () => {
    return (
        <ButtonContainer>
            <BadgeRow>
                <WireFramyWhiteBadgeWithEllipse text={"Badge Success"} pointerColor={"#22C55E"} roundEdge/>
                <WireFramyWhiteBadgeWithEllipse text={"Badge Success"} pointerColor={"#22C55E"} roundEdge closeIcon/>
                <WireFramyWhiteBadgeWithEllipse text={"Badge Success"} pointerColor={"#22C55E"}/>
                <WireFramyWhiteBadgeWithEllipse text={"Badge Success"} pointerColor={"#22C55E"} closeIcon/>
            </BadgeRow>

            <BadgeRow>
                <WireFramyWhiteBadgeWithLine text={"Badge Success"} pointerColor={"#22C55E"} roundEdge/>
                <WireFramyWhiteBadgeWithLine text={"Badge Success"} pointerColor={"#22C55E"} roundEdge closeIcon/>
                <WireFramyWhiteBadgeWithLine text={"Badge Success"} pointerColor={"#22C55E"}/>
                <WireFramyWhiteBadgeWithLine text={"Badge Success"} pointerColor={"#22C55E"} closeIcon/>
            </BadgeRow>

            <BadgeRow>
                <WireFramyWhiteBadgeWithEllipse text={"Disabled"} pointerColor={"#9CA3AF"} roundEdge/>
                <WireFramyWhiteBadgeWithEllipse text={"Disabled"} pointerColor={"#9CA3AF"} roundEdge closeIcon/>
                <WireFramyWhiteBadgeWithEllipse text={"Disabled"} pointerColor={"#9CA3AF"}/>
                <WireFramyWhiteBadgeWithEllipse text={"Disabled"} pointerColor={"#9CA3AF"} closeIcon/>
            </BadgeRow>

            <BadgeRow>
                <WireFramyWhiteBadgeWithLine text={"Disabled"} pointerColor={"#9CA3AF"} roundEdge/>
                <WireFramyWhiteBadgeWithLine text={"Disabled"} pointerColor={"#9CA3AF"} roundEdge closeIcon/>
                <WireFramyWhiteBadgeWithLine text={"Disabled"} pointerColor={"#9CA3AF"}/>
                <WireFramyWhiteBadgeWithLine text={"Disabled"} pointerColor={"#9CA3AF"} closeIcon/>
            </BadgeRow>
        </ButtonContainer>
    )
}

export default WireFramyBadgeAlterWithWhiteBG