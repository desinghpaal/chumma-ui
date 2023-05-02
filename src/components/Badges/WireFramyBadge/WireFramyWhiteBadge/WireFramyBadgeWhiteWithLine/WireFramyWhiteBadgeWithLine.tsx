import React from "react";
import WireFramyBadgeAlterWithWhiteBG, {WireFramyBadgeWhiteBGProps} from "../WireFramyWhiteBadge";

const WireFramyWhiteBadgeWithLine = ({text, pointerColor, roundEdge, closeIcon}: WireFramyBadgeWhiteBGProps) => {
    return <WireFramyBadgeAlterWithWhiteBG text={text} pointerColor={pointerColor} pointer={"Rectangle"}
                                           roundEdge={roundEdge} closeIcon={closeIcon}/>
}

export default WireFramyWhiteBadgeWithLine