import { Ref, forwardRef } from "react";
import styled from "styled-components";

const LoaderDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0;
  pointer-events: none;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;

  &.in {
    animation-name: inAnimation;
    animation-duration: 0.3s;
  }

  &.out {
    animation-name: outAnimation;
    animation-duration: 0.3s;
  }
`;

type DelayingLoaderProps = {
  className?: string;
};

export const DelayingLoader = forwardRef((props: DelayingLoaderProps, ref:Ref<HTMLDivElement>) => {
  const {
    className,
  } = props;

  return <LoaderDiv ref={ref} className={className} />;
});
