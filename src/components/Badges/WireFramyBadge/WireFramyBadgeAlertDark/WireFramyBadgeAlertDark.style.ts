import styled from "styled-components";
import {
    BadgeContainer as LightBadgeContainer,
    BadgeAlert as LightBadgeAlert
} from "../WireFramyBadgeAlertLight/WireFramyBadgeAlterLight.style"
export const BadgeContainer = styled(LightBadgeContainer)`
  gap: 30px;
  ${({
       closeIcon,
       roundEdge
     }) => closeIcon ? (roundEdge ? `border-radius: 17px; padding: 4px 8px;` : `border-radius: 4px; padding: 4px 8px;`) : (roundEdge ? `border-radius: 17px; padding: 4px 9px;` : `border-radius: 4px; padding: 4px 8px;`)};

`

export const BadgeAlert = styled(LightBadgeAlert)`
  line-height: 32px;
  font-size: 20px;
  font-family: "SF Pro Display-SemiBold";
`

export const CloseButton = styled.button`
  position: relative;
  min-width: 24px;
  height: 24px;
  background: none;
  border: none;
`

