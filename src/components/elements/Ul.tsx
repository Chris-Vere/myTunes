import { ReactNode } from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
  margin: 0;
`;

export type UlProps = {
  children?: ReactNode,
  style?: Record<string, string | number>,
  className?: string,
}

export default function Ul(props: UlProps) {
  const {
    className,
    style,
    children,
  } = props;

  return (
    <StyledUl className={className} style={style}>
      {children}
    </StyledUl>
  );
}
