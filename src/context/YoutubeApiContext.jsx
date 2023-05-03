import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
//import FakeYoutubeClient from "../api/fakeYoutubeClient";
import YoutubeClient from "../api/youtubeClient";

export const YoutubeApiContext = createContext();

// Youtube API로 데이터를 받아오는 instance

//const client = new FakeYoutubeClient();
const client = new YoutubeClient();
const youtube = new Youtube(client);

/**
 * Youtube API로 데이터를 받아오는 instance를 제공하는 context
 * @param children context 내부 components
 * @returns youtube API instance
 */
export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

/**
 * Component에서 context value 를 사용할때 편리성을 위한 함수
 * @returns useContext(YoutubeApiContext)
 */
export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
