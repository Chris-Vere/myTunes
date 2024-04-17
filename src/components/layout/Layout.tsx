import { ReactElement } from "react"

export type LayoutProps = {
  children?: ReactElement
}

export default function Layout(props: LayoutProps) {
  const {
    children
  } = props;

  return (
    <main className="outer-wrap">
      <aside className="sidebar">
        <nav className="library-nav">
          <button className="btn btn-text btn-library-nav --selected">Artists</button>
          <button className="btn btn-text btn-library-nav">Albums</button>
          <button className="btn btn-text btn-library-nav">Songs</button>
        </nav>
      </aside>
      {children}
    </main>
  );
}
