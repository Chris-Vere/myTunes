import { ReactNode } from "react";

export type RowProps = {
  children?: ReactNode;
}

export default function Row(props: RowProps) {
  const {
    children,
  } = props;

  return (
    <div className="flex grow">
      {children}
    </div>
  );
}
