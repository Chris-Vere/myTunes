import styled from "styled-components";
import AlbumArtwork from "../AlbumArtwork/AlbumArtwork";

const Wrapper = styled.div`

`;
export default function PlaybackStatus() {
  return (
    <Wrapper>
      <div>
        <AlbumArtwork style={{width: '30px'}} />
      </div>
      <div>
        <h2>Song Name</h2>
        <p>Artist Name &emdash; Album Name</p>
      </div>
    </Wrapper>
  );
}
