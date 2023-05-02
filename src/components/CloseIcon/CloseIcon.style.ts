import styled from "styled-components";

export const Line1 = styled.div<{bgColor?: string}>`
  height: 80%;
  width: 1px;
  transform: rotate(45deg);
  Z-index: 1;
  background-color: ${({bgColor}) => bgColor ?? `black`};
`


export const Line2 = styled.div<{bgColor?: string}>`
  height: 100%;
  width: 1px;
  transform: rotate(90deg);
  Z-index: 2;
  background-color: ${({bgColor}) => bgColor ?? `black`};
`
