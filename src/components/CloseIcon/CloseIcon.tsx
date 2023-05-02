import {Line1, Line2} from "./CloseIcon.style";

const CloseIcon = ({color}: {color?: string}) => {
    console.log("sdds ",color)
    return (
            <Line1 bgColor={color}>
                <Line2 bgColor={color}/>
            </Line1>
    )
}


export default CloseIcon