import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

export default function Button(props: ButtonProps) {
  const {
    type = 'button',
    ...nativeButtonProps
  } = props;

  return <button type={type} {...nativeButtonProps}>{props.children}</button>
}
