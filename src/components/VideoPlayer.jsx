import dynamic from "next/dynamic";
import getConfig from "next/config";
import React, { useRef, useEffect, useState, Suspense } from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const { publicRuntimeConfig } = getConfig();

const VideoPlayer = () => {
  return (
    <ReactPlayer
      quality={100}
      style={{
        top: "0",
        position: "absolute",
        zIndex: "-1",
      }}
      className="4k:scale-[1.05] 2k:scale-[1.25] hd:scale-[1.5] 2xl:scale-[1.75] xl:scale-[2] lg:scale-[2.5] scale-[4]"
      height="100vh"
      width="100vw"
      url={`/Woxels Video.mp4`}
      playing
      loop
      muted
    />
  );
};

export default VideoPlayer;
