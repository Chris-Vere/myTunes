import { ReactNode } from "react";
import StyledRow from "./RowStyles";

export type RowProps = {
  className?: string,
  children?: ReactNode;
}

export default function Row(props: RowProps) {
  const {
    children,
    className,
  } = props;

  return (
    <StyledRow className={className}>
      {children}
    </StyledRow>
  );
}
