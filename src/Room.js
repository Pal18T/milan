import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const Room = () => {
  const { roomID } = useParams();

  const meeting = async (element) => {
    const appId = 1724225629;
    const serverSecret = "a69fb388580f8fcb7f118247cd3f26fe";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomID, Date.now().toString(), "prince");

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },

    });
  };

  return (
    <div>ref={meeting} style={{ width: "100vw", height: "100vh" }}</div>
  )
};

export default Room