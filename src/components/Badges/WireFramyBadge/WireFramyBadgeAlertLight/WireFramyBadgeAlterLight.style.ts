import styled, {css} from "styled-components";
import {
    BadgePosition,
    BadgesBasic,
    ValignTextMiddle
} from "../../BackgroundColorButton/BackgroundColorButton.style";

export const BadgeContainer = styled.div<{
    bgColor: string,
    roundEdge?: boolean,
    closeIcon?: boolean,
    outline?: boolean,
    textColor: string
}>`
  ${BadgesBasic};
  ${({closeIcon}) => closeIcon && `gap: 4px;`}
  ${({outline,textColor}) => outline && `border:1px solid ${textColor};`}
  padding: 4px 9px;
  border-radius: 16px;
  background-color: ${({bgColor}) => bgColor};
  ${({
       closeIcon,
       roundEdge
     }) => closeIcon ? (roundEdge ? `border-radius: 16px; padding: 4px 6px;` : `border-radius: 2px; padding: 4px 6px;`) : (roundEdge ? `border-radius: 16px; padding: 4px 9px;` : `border-radius: 2px; padding: 4px 8px;`)};
`
export const BadgeAlertFont = css`
  font-size: 12px;
  font-family: "SF Pro Display-Medium";
  font-weight: 400;
  font-style: normal;
`
export const BadgeAlert = styled.div<{ textColor: string, roundEdge?: boolean }>`
  ${BadgeAlertFont};
  ${ValignTextMiddle};
  ${BadgePosition};
  line-height: normal;
  width: fit-content;

  color: ${({textColor}) => textColor};
`

export const CloseButton = styled.button`
  position: relative;
  height: 13px;
  border: none;
  background-color: initial;
  cursor: pointer;
`
