import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
  background: transparent;
  font-size: 1.5rem;
  transition: transform 0.2s ease;
  color: ${({ $isFavorite }) => ($isFavorite ? "#ff0000" : "#fff")};

  &:hover {
    transform: scale(1.1);
  }
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <StyledButton onClick={onToggleFavorite} isFavorite={isFavorite}>
      {isFavorite ? "❤️" : "🤍"}
    </StyledButton>
  );
}
