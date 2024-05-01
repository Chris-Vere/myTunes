import { ReactElement } from "react"

type Btn = {
  text: string;
  selected: boolean,
}

const btnConfig:Btn[] = [{
    text: 'Artists',
    selected: true,
  }, {
    text: 'Albums',
    selected: false,
  }, {
    text: 'Songs',
    selected: false,
  }
];

export type LayoutProps = {
  children?: ReactElement
}

export default function Layout(props: LayoutProps) {
  const {
    children
  } = props;

  return (
    <main className="flex h-full">
      <aside className="w-1/6 p-6 bg-neutral-800 border-r border-r-neutral-700">
        <nav className="flex flex-col">
          {
            btnConfig.map((btn) => (
              <button
                key={btn.text}
                className={`
                flex
                items-center
                mb-[2px]
                p-2
                text-left
                rounded-md
                before:block
                before:w-3
                before:h-3
                before:ml-1
                before:mr-3
                before:rounded-full
                before:bg-red-400
                ${btn.selected ? 'bg-neutral-700' : ''}`}
                >
                {btn.text}
              </button>
            ))
          }
        </nav>
      </aside>
      {children}
    </main>
  );
}
