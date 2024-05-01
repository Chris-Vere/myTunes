import { ReactNode } from "react"

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
    <div className={className} style={style}>{children}</div>
  );
}
