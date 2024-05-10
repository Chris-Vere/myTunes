import { Outlet } from "react-router-dom";
import ArtistsNav from "../components/nav/artists/ArtistsNav";
import Col from "../components/layout/Col/Col";

export default function ArtistLayout() {
  return (
    <>
      <ArtistsNav />
      <Col style={{flex: 1}}>
        <Outlet />
      </Col>
    </>
  );
}
