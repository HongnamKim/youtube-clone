import axios from "axios";

export default class FakeYoutubeClient {
  async search({ params }) {
    return params.relatedToVideoId
      ? axios.get("/videos/related.json")
      : axios.get("/videos/search.json");
  }

  async videos({ params }) {
    return params.chart
      ? axios.get("/videos/popular.json")
      : axios.get("/videos/details.json");
  }

  async channels() {
    return axios.get("/videos/channel.json");
  }
}
