import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularVideo } from "../utils/videosSlice";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  // const [Videos, setVideos] = useState();
  const dispatch = useDispatch();
  const videoData = useSelector((store) => store.video.popularVideos);

  useEffect(() => {
    const getVideos = async () => {
      const VideoData = await fetch(YOUTUBE_API);
      const json = await VideoData.json();

      dispatch(fetchPopularVideo(json.items)); //store videos data in redux store
    };

    if (videoData === null) getVideos();
  }, []);

  if (videoData === null) return;
  return (
    <div className="ml-5 mt-8 mr-8 flex justify-items-stretch align-top w-full flex-wrap">
      {videoData.map((video) => (
        <Link to={"/watch?vid=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
