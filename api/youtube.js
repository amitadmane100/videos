import axios from "axios";

const KEY = "AIzaSyDM6I3dRM-UkEDOxK-CMEae_WjSr6EftB8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults  : 20,
    key: KEY  
  }
});
