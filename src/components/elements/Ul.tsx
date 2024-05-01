import { ReactNode } from "react";

export type UlProps = {
  children?: ReactNode,
  style?: Record<string, string | number>,
}

export default function Ul(props: UlProps) {
  const {
    style,
    children,
  } = props;

  return (
    <ul className="m-0" style={style}>
      {children}
    </ul>
  );
}
