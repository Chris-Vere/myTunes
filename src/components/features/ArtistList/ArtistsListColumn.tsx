import styled from "styled-components";
import Col from "../../layout/Col/Col";
import ArtistsList from "./ArtistsList";

const StyledCol = styled(Col)`
  border-right: 1px solid var(--color-border);
`;

export default function ArtistsListColumn() {
  return (
    <StyledCol style={{width: '25%'}}>
      <ArtistsList />
    </StyledCol>
  )
}
