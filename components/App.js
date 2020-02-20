import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./videoList";
import VideoDetail from "./videoDetail";
import "../components/main.css";
import Intro from "./intro"

class App extends React.Component {
  state = { videos: [], SelectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("cars");
  }

  onTermSubmit = async term => {
    const videos = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: videos.data.items,
      SelectedVideo: videos.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ SelectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <Intro />
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.SelectedVideo} />
            </div>
            <div className="five wide column">
              <div className="my-list">
                <div className="sidebar">
                  <VideoList
                    onVideoSelect={this.onVideoSelect}
                    videos={this.state.videos}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
