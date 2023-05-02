import WireFramyBadgeAlterWithWhiteBG, {WireFramyBadgeWhiteBGProps} from "../WireFramyWhiteBadge";
import React from "react";

const WireFramyWhiteBadgeWithEllipse = ({text, pointerColor, roundEdge, closeIcon}: WireFramyBadgeWhiteBGProps) => {
    return <WireFramyBadgeAlterWithWhiteBG text={text} pointerColor={pointerColor} pointer={"Ellipse"}
                                           roundEdge={roundEdge} closeIcon={closeIcon}/>

}

export default WireFramyWhiteBadgeWithEllipse