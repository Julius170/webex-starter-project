import React from "react";
import {
  useHMSActions,
  useAVToggle,
  useScreenShare
} from "@100mslive/react-sdk";
import { UploadIcon, XIcon } from "@heroicons/react/solid";
import { MicrophoneIcon, VideoCameraIcon } from "@heroicons/react/outline";

export default function ControlSection() {
  const hmsActions = useHMSActions();

  // controls logic i.e audio, video and screen sharing

  // end meeting as host or leave as participant

  return (
    <div className="h-[4rem] items-center justify-center flex gap-5 w-full">


      {/* UI elements controls section  */}


    </div>
  );
}
