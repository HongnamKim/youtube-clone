import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import VideoDescription from "../components/VideoDescription";
import RelatedVideos from "../components/RelatedVideos";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle } = video.snippet;

  return (
    <section className="flex flex-col xl:flex-row">
      <article className="basis-4/6">
        <iframe
          className="aspect-video"
          id="player"
          type="text/html"
          width="100%"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={title}
        />

        <div className="p-8">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <VideoDescription id={video.id} />
        </div>
      </article>
      <section className="basis-2/6">
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}

//height="640"
