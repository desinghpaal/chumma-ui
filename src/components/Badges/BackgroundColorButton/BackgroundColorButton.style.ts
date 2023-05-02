import styled, {css} from "styled-components";

export const BadgesContainer = styled.div`
  display: flex;
  position: relative;
  width: fit-content;
  align-items: flex-start;
`

export const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const DisplayBox = css `
  font-family: "SF Pro Display-Bold";
  font-weight: 700;
  font-style: normal;
`

export const BadgePosition = css`
  position: relative;
  margin-top: -1px ;
  text-align: center;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`

export const Badge = styled.div<{textColor: string, roundEdge?: boolean, size: "Default" | "Large"}>`
  ${ValignTextMiddle}
  ${DisplayBox}
  ${BadgePosition}
  ${({ size }) => (size === "Default") ?  `font-size: 12px; height:14px;` :  `font-size: 16px;`};

  color: ${({textColor}) => textColor};
`

export const BadgesBasic = css`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  overflow: hidden;
`
export const Badges = styled.div <{bgColor: string, roundEdge?: boolean, size: "Default" | "Large"}>`
  ${BadgesBasic};
  background-color: ${({bgColor}) => bgColor};
  
  ${({ size,roundEdge }) => (size === "Default") ? (roundEdge ?  `border-radius: 20px; padding: 2px 8px;` : `border-radius: 4px; padding: 2px 8px;`) : (roundEdge ? `border-radius: 24px; padding: 5px 16px;` : `border-radius: 4px; padding: 5px 16px;`) };
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`