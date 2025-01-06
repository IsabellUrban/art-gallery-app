import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

const PreviewContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const TextContent = styled.div`
  padding: 1rem;
  background: white;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
`;

export default function ArtPiecePreview({
  artPiece,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  const { imageSource, name, artist, slug } = artPiece;
  const isFavorite = artPiecesInfo?.[slug]?.isFavorite || false;

  return (
    <PreviewContainer>
      <ButtonWrapper>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={() => handleToggleFavorite(slug)}
        />
      </ButtonWrapper>
      <Link href={`/art-pieces/${slug}`}>
        <ImageWrapper>
          <StyledImage
            src={imageSource}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 200px"
          />
        </ImageWrapper>
        <TextContent>
          <p>
            <strong>Title:</strong> {name}
          </p>
          <p>
            <strong>Artist:</strong> {artist}
          </p>
        </TextContent>
      </Link>
    </PreviewContainer>
  );
}
