import React from "react";
import {Badge, BadgeContainer, Ellipse, Rectangle} from "./WireFramyBadgeWhiteWithLine.style";
import {CloseButton} from "../WireFramyBadgeAlertLight/WireFramyBadgeAlterLight.style";
import {ButtonContainer} from "../../BackgroundColorButton/BackgroundColorButton.style";
import CloseIcon from "../../../CloseIcon";

type WireFramyBadgeWhiteBGProps = {
    text: string,
    roundEdge?: boolean,
    closeIcon?: boolean,
    pointer: "Rectangle" | "Ellipse",
    pointerColor: string
}

const WireFramyBadgeAlterWithWhiteBG = ({
                                            text,
                                            roundEdge,
                                            closeIcon,
                                            pointer,
                                            pointerColor
                                        }: WireFramyBadgeWhiteBGProps) => {
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
            <WireFramyBadgeAlterWithWhiteBG text={"Badge success"} pointerColor={"#22C55E"} pointer={"Ellipse"} roundEdge/>
            <WireFramyBadgeAlterWithWhiteBG text={"Badge success"} pointerColor={"#22C55E"} pointer={"Ellipse"} roundEdge closeIcon/>
            <WireFramyBadgeAlterWithWhiteBG text={"Badge success"} pointerColor={"#22C55E"} pointer={"Ellipse"}/>
            <WireFramyBadgeAlterWithWhiteBG text={"Badge success"} pointerColor={"#22C55E"} pointer={"Ellipse"} closeIcon/>
            <WireFramyBadgeAlterWithWhiteBG text={"Badge success"} pointerColor={"#22C55E"} pointer={"Rectangle"} roundEdge/>
            <WireFramyBadgeAlterWithWhiteBG text={"Badge success"} pointerColor={"#22C55E"} pointer={"Rectangle"} roundEdge closeIcon/>
            <WireFramyBadgeAlterWithWhiteBG text={"Badge success"} pointerColor={"#22C55E"} pointer={"Rectangle"}/>
            <WireFramyBadgeAlterWithWhiteBG text={"Badge success"} pointerColor={"#22C55E"} pointer={"Rectangle"} closeIcon/>

            <WireFramyBadgeAlterWithWhiteBG text={"Disabled"} pointerColor={"#9CA3AF"} pointer={"Ellipse"} roundEdge/>
            <WireFramyBadgeAlterWithWhiteBG text={"Disabled"} pointerColor={"#9CA3AF"} pointer={"Ellipse"} roundEdge closeIcon/>
            <WireFramyBadgeAlterWithWhiteBG text={"Disabled"} pointerColor={"#9CA3AF"} pointer={"Ellipse"}/>
            <WireFramyBadgeAlterWithWhiteBG text={"Disabled"} pointerColor={"#9CA3AF"} pointer={"Ellipse"} closeIcon/>
            <WireFramyBadgeAlterWithWhiteBG text={"Disabled"} pointerColor={"#9CA3AF"} pointer={"Rectangle"} roundEdge/>
            <WireFramyBadgeAlterWithWhiteBG text={"Disabled"} pointerColor={"#9CA3AF"} pointer={"Rectangle"} roundEdge closeIcon/>
            <WireFramyBadgeAlterWithWhiteBG text={"Disabled"} pointerColor={"#9CA3AF"} pointer={"Rectangle"}/>
            <WireFramyBadgeAlterWithWhiteBG text={"Disabled"} pointerColor={"#9CA3AF"} pointer={"Rectangle"} closeIcon/>
        </ButtonContainer>
    )
}

export default WireFramyBadgeAlterWithWhiteBG