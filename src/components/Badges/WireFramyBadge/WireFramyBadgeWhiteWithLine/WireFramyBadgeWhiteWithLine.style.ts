import styled from "styled-components";
import {
    BadgeAlert, BadgeContainer as LightBadgeContainer
} from "../WireFramyBadgeAlertLight/WireFramyBadgeAlterLight.style";

export const Badge = styled(BadgeAlert)`
  font-weight: 500;
`

export const BadgeContainer = styled(LightBadgeContainer)`
  gap: 5px;
  padding: 6px 7px;
  border: 1px solid;
  border-radius: ${({roundEdge}) => roundEdge ? `4px` : `17px`};
`

export const Ellipse = styled.div<{ color: string }>`
  position: relative;
  min-width: 7px;
  height: 7px;
  background-color: ${({color}) => color};
  border-radius: 3.5px;
`

export const Rectangle = styled.div<{ color: string }>`
  position: relative;
  min-width: 2px;
  height: 9px;
  background-color: ${({color}) => color};
`