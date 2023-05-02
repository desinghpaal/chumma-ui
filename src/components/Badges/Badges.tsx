import {Wrapper} from "./Badges.style";
import {getWireFramyBadgesAlterWithWhiteBG} from "./WireFramyBadge/WireFramyWhiteBadge";
import {getLargeButtons} from "./BackgroundColorButton/BackgroundColorLargeButton";
import {getDefaultButtons} from "./BackgroundColorButton/BackgroundColorDefaultButton";
import {getWireFramyBadgeAlertLight} from "./WireFramyBadge/WireFramyBadgeAlertLight";
import {getWireFramyBadgeAlertDarkButtons} from "./WireFramyBadge/WireFramyBadgeAlertDark";

const Badges = () => {
    return (
        <Wrapper>
            <p>Background Colour - Large</p>
            {getLargeButtons()}
            <p>Background Colour - Default</p>
            {getDefaultButtons()}
            <p>Wireframy Badge Alert Light</p>
            {getWireFramyBadgeAlertLight()}
            <p>Wireframy Badge Alert Dark</p>
            {getWireFramyBadgeAlertDarkButtons()}
            <p>Wireframy Badge White Background</p>
            {getWireFramyBadgesAlterWithWhiteBG()}
        </Wrapper>
    )
}
export default Badges