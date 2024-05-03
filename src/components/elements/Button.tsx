import { ComponentProps } from "react";

const CircleButton = (props: ComponentProps<'button'>) => {
  const {
    children,
    ...buttonProps
  } = props;

  return <button type="button" className="block w-6 h-6 ml-1 mr-3 rounded bg-gray-500" {...buttonProps}>{children}</button>
}

export {
  CircleButton,
}
