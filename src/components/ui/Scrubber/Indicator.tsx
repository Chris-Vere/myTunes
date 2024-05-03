type IndicatorProps = {
  percentage?: number;
}

export default function Indicator(props: IndicatorProps) {
  const {
    percentage = 0,
  } = props;

  const className = "w-full h-2 bg-gray-200 pointer-events-none origin-left";
  
  return <div style={{transform: `scale(${percentage}, 1)`}} className={className} />
}
