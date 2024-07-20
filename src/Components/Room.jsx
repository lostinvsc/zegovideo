import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
  const { roomid } = useParams();
  
  const containerRef = useRef(null);

  useEffect(() => {
    const myMeeting = async (element) => {
      const AppID = 1329076367;
      const ServerSecret = '1a9af1e7e4642692dd968c1c11033a37';

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        AppID,
        ServerSecret,
        roomid,
        Date.now().toString(),
        'Sachin'
      );

      const zc = ZegoUIKitPrebuilt.create(kitToken);

      zc.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Copy Link',
            url: `https://lostinvsc.github.io/zegocall/${roomid}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton: true,
      });
    };

    if (containerRef.current) {
      myMeeting(containerRef.current);
    }
  }, [roomid]);

  return (<div>
      <div ref={containerRef}/>
    </div>)
  
};

export default Room;
