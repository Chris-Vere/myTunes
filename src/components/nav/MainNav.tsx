import { Link, useLocation } from "react-router-dom";

type ButtonType = {
  text: string;
  dest: string;
}

const buttonConfig:ButtonType[] = [{
    text: 'Artists',
    dest: 'artists',
  }, {
    text: 'Albums',
    dest: 'albums',
  }, {
    text: 'Songs',
    dest: 'songs',
  }
];

export default function MainNav() {
  const location = useLocation();
  const [, firstSegment] = location.pathname.split('/');  

  const linkClasses = `
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
    before:bg-red-100`;

  return (
    <nav className="flex flex-col">
      {
        buttonConfig.map((btn) => (
          <Link
            to={`/${btn.dest}`}
            key={btn.text}
            className={`${linkClasses} ${btn.dest === firstSegment ? 'bg-gray-500' : ''}`}
            >
            {btn.text}
          </Link>
        ))
      }
    </nav>
  )
}
