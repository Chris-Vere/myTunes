import { ReactNode } from "react"
import StyledCol from "./ColStyles";

export type ColProps = {
  className?: string,
  children?: ReactNode,
  style?: Record<string, string | number>,
}

export default function Col(props: ColProps) {
  const {
    children,
    className,
    style,
  } = props;

  return (
    <StyledCol className={className} style={style}>{children}</StyledCol>
  );
}
