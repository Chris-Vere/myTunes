type btnConfigType = {
  text: string;
}
const btnConfig:btnConfigType[] = [
  { text: 'Prev' },
  { text: 'Play' },
  { text: 'Next' },
];

export default function PlayerControls() {
  const btnClasses = 'bg-gray-600 px-2 py-1 rounded hover:bg-gray-100 hover:text-gray-800';

  return (
    <div className="flex items-center gap-2">
      {btnConfig.map(btn => <button key={btn.text} type="button" className={btnClasses}>{btn.text}</button>)}
    </div>
  );
}
