import React from "react";
import {
  useHMSActions,
  useHMSStore,
  selectScreenShareByPeerID,
} from "@100mslive/react-sdk";

const Screen = ({ presenter }) => {
  const hmsActions = useHMSActions();
  const screenRef = React.useRef(null);
  const screenTrack = useHMSStore(selectScreenShareByPeerID(presenter.id));

  // attach 100ms screensharing stream to video element



  return (
    <div className="w-full h-full rounded-lg overflow-hidden z-50">

     {/* video element to show screensharing/ presenting screen  */}


    </div>
  );
};

export default Screen;
