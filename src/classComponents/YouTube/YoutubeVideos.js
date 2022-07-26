import React, { useEffect, useState } from "react";
import "./YoutubeVideos.css";

function YoutubeVideos() {
  const [AppleVideos, SetVideo] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBer6DCYgQjD9QYFI4EIGn8R4Fc36XsUzU&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8"
    )
      .then((response) => response.json())
      .then((data) => {
        const youTubeVideosData = data.items;
        SetVideo(youTubeVideosData);
      });
  }, []);

  console.log(AppleVideos);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper">
              Apple YouTube Channel Latest 8 Videos
              <br />
              <br />
            </div>
          </div>

          {AppleVideos.map((singleVideo) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let videoWrapper = (
              <div className="col-sm-12 col-md-6">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                      <img src={singleVideo.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
            return videoWrapper;
          })}
        </div>
      </div>
    </div>
  );
}
export default YoutubeVideos;
