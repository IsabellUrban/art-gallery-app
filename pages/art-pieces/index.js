import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({ artPieces, handleToggleFavorite, artPiecesInfo }) {
  return (
    <ArtPieces
      artPieces={artPieces}
      handleToggleFavorite={handleToggleFavorite}
      artPiecesInfo={artPiecesInfo}
    />
  );
}
