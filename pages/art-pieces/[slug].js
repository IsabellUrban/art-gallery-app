import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";


export default function ArtPieceDetailsPage({ artPieces }) {
  const router = useRouter();
  const { slug } = router.query;
  const paintings = artPieces.find((artpiece) => artpiece.slug === slug);

  return (
    <ArtPieceDetails
      image={paintings.imageSource}
      title={paintings.name}
      artist={paintings.artist}
      year={paintings.year}
      genre={paintings.genre}
    />
  );
}
