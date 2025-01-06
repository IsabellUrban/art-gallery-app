import styled from "styled-components";
import ArtPiecePreview from "./ArtPiecePreview";

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const StyledHeading = styled.h2`
  text-align: center;
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0;
  margin: 0;
`;

const StyledListItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
`;

export default function ArtPieces({
  artPieces,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <StyledContainer>
      <StyledHeading>All art pieces</StyledHeading>
      <StyledList>
        {artPieces.map((artPiece) => {
          return (
            <StyledListItem key={artPiece.slug}>
              <ArtPiecePreview
                artPiece={artPiece}
                handleToggleFavorite={handleToggleFavorite}
                artPiecesInfo={artPiecesInfo}
              />
            </StyledListItem>
          );
        })}
      </StyledList>
    </StyledContainer>
  );
}
