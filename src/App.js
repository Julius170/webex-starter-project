
import { useHMSActions, selectIsConnectedToRoom, useHMSStore } from "@100mslive/react-sdk";
import { useEffect } from "react";
import Lobby from "./views/Lobby";
import ConferenceRoom from "./views/ConferenceRoom";

function App() {
  const hmsActions = useHMSActions();
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  useEffect(() => {
    window.onunload = () => {
      hmsActions.leave();
    };
  }, [hmsActions]);
  return (
    <>
     { isConnected ? <ConferenceRoom /> : <Lobby /> }
    </>
  );
}

export default App;
