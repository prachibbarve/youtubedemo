import React from "react";
import ReactTimeAgo from "react-time-ago";
const VideoCard = (props) => {
  const { snippet, statistics, duration } = props.info;
  const { channelTitle, publishedAt, localized, title, thumbnails } = snippet;
  const { viewCount, likeCount, favoriteCount, commentCount } = statistics;
  console.log(props);

  return (
    <div className="w-64 m-2">
      <div>
        <img
          className="rounded-lg w-72"
          src={thumbnails.medium.url}
          alt={title}
        ></img>
      </div>
      <div>
        <div className="font-bold">{title}</div>
        <div className="text-sm text-gray-600">{channelTitle}</div>
        <div className="text-sm text-gray-600">
          <span>{Math.trunc(viewCount / 1000)}K Views</span>
          <span> . </span>
          <span>
            <ReactTimeAgo date={publishedAt} locale="en-US" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
