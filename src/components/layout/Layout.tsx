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
      <aside className="w-1/6 p-6 bg-gray-900 border-r border-r-gray-600">
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
                ${btn.selected ? 'bg-gray-500' : ''}`}
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
