import {Badge, Badges, BadgesContainer} from "./BackgroundColorButton.style";

export type BackgroundColorButtonProps = { text: string, roundEdge?: boolean, bgColor: string, textColor: string }
type LargeButtonProps = BackgroundColorButtonProps & { size: "Large" | "Default" }

export const BackgroundColorButton = ({text, roundEdge, bgColor, textColor, size}: LargeButtonProps) => {
    return (
        <BadgesContainer>
            <Badge2 text={text} roundEdge={roundEdge} bgColor={bgColor} textColor={textColor} size={size}/>
        </BadgesContainer>
    )
}
const Badge2 = ({text, roundEdge, textColor, bgColor, size}: LargeButtonProps) => {
    return (
        <Badges roundEdge={roundEdge} bgColor={bgColor} size={size}>
            <Badge textColor={textColor} size={size}>
                {text}
            </Badge>
        </Badges>
    )
}

export default BackgroundColorButton