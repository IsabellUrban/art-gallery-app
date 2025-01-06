import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

const DetailsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  gap: 2rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledImage = styled(Image)`
  object-fit: contain;
`;

const InfoSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const ArtistName = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
`;

const InfoText = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin: 0.5rem 0;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: #333;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #555;
  }
`;

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
}) {
  return (
    <DetailsContainer>
      <ImageWrapper>
        <StyledImage
          src={image}
          alt={title}
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 200px"
        />
      </ImageWrapper>
      <InfoSection>
        <ArtistName>{artist}</ArtistName>
        <InfoText>
          <strong>Title:</strong> {title}
        </InfoText>
        <InfoText>
          <strong>Year:</strong> {year}
        </InfoText>
        <InfoText>
          <strong>Genre:</strong> {genre}
        </InfoText>
      </InfoSection>
      <StyledLink href="/art-pieces">Back to Gallery</StyledLink>
    </DetailsContainer>
  );
}
