import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

export default function VideoDescription({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: description,
  } = useQuery(["description", id], () => youtube.videoDescription(id), {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      {isLoading && <p>is loading....</p>}
      {error && <p>Something is wrong!</p>}
      <details>
        <summary>Description</summary>
        <pre className="whitespace-pre-wrap">{description}</pre>
      </details>
    </>
  );
}
