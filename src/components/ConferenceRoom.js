import React from "react";
import Screen from "./Screen";
import Particpant from "./VideoTile";
import {
  useHMSStore,
  selectLocalPeer,
  selectPeers,
  selectIsSomeoneScreenSharing,
  selectPeersScreenSharing
} from "@100mslive/react-sdk";
import ControlsSection from "../../components/ControlsSection";

export default function ConferenceRoom() {
  // access room information from 100ms store

  const localPeer = useHMSStore(selectLocalPeer);

  const screenshareOn = useHMSStore(selectIsSomeoneScreenSharing);

  const presenters = useHMSStore(selectPeersScreenSharing);

  const peers = useHMSStore(selectPeers);

  // number of active screen participants plus screen presenters
  const particpants = peers.length + presenters.length;


  return (
    <div className="h-screen w-full bg-main flex">
      <div className="flex flex-col w-full h-full justify-between items-center">
        <div className="max-w-6xl flex items-center justify-center mx-auto h-[80vh] mt-16 container">
          <div
            className={`grid ${
              particpants <= 4
                ? "grid-cols-2 grid-rows-2"
                : "grid-cols-4 grid-rows-4"
            } items-center justify-center content-center  w-full gap-3 h-full`}
          >
            {/* Display local particpant view */}



            {/* display other particants views */}




            {/* display screens shared  to particpants */}


          </div>
        </div>
        <ControlsSection />
      </div>
    </div>
  );
}
