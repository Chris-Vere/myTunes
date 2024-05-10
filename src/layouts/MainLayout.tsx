import { ReactNode } from "react"
import MainNav from "../components/nav/MainNav";
import Player from "../components/features/Player/Player";
import Row from "../components/layout/Row/Row";

export default function MainLayout({children}: {children: ReactNode}) {
  return (
    <main className="flex h-full">
      <aside className="w-1/6 p-6 bg-gray-900 border-r border-r-gray-600">
        <MainNav />
      </aside>
      <div className="flex flex-col grow">
        <Player />
        <Row>
          {children}
        </Row>
      </div>
    </main>
  );
}
