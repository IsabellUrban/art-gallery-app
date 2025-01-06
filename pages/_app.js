import useSWR from "swr";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import { useState } from "react";


const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data: artPieces, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  const [artPiecesInfo, setArtPiecesInfo] = useState({});

  function handleToggleFavorite(slug) {
    setArtPiecesInfo((prevInfo) => {
      const updatedInfo = {
        ...prevInfo,
        [slug]: {
          ...prevInfo[slug],
          isFavorite: !prevInfo[slug]?.isFavorite,
        },
      };
      return updatedInfo;
    });
  }

  if (error) return <h1>Failed to load</h1>;
  if (!artPieces) return <h1>Loading...</h1>;


  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        artPieces={artPieces}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </Layout>
  );
}
