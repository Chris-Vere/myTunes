import AlbumsPanel from "../components/features/AlbumsPanel/AlbumsPanel";
import ArtistsListColumn from "../components/features/ArtistList/ArtistsListColumn";
import Col from "../components/layout/Col/Col";

export default function ArtistsPage() {
  return (
    <>
      <ArtistsListColumn />
      <Col style={{flex: 1}}>
        <AlbumsPanel />
      </Col>
    </>
  );
}
