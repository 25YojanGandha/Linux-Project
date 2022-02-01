import './Meet.css';
import React, { useEffect, useState} from 'react';

function Meet() {

    let [api,setApi] = useState(null);

    function StartMeeting() {
        const domain = 'meet.jit.si';
        let room = 'YG-'+(new Date()).getTime();
        // let room = "YG-620119876500-INDIA";

        const options = {
            roomName: room,

            width: '100%',

            height: '100%',

            parentNode: document.querySelector('#meet'),

            interfaceConfigOverwrite: {
                DISPLAY_WELCOME_PAGE_CONTENT: false,
                SHOW_JITSI_WATERMARK: false,
                // BRAND_WATERMARK_LINK: '../../../public/images/yojan.jpg',
                SHOW_BRAND_WATERMARK: false,
                SHOW_PROMOTIONAL_CLOSE_PAGE: false,
                // JITSI_WATERMARK_LINK: '../../../public/images/yojan.jpg',
            },

            configOverwrite:{
                startWithAudioMuted: true,
                startWithVideoMuted: true,
                // logoImageUrl: '../../../public/images/yojan.jpg',
            },

            onload: function () {
                alert('loaded \n Meeting Link: https://meet.jit.si/'+room);
            }
        };

        api = new window.JitsiMeetExternalAPI(domain, options);
        setApi(api);
        // console.log(api);

        api.executeCommand('subject', 'Project');

        api.getLivestreamUrl().then(livestreamData => {
            livestreamData = {
                livestreamUrl: 'https://meet.jit.si/'+room
            }

            console.log("-----",livestreamData.livestreamUrl)
        })

    }

    useEffect(()=>{
        StartMeeting();
    },[])

    return (
        <div id="meet"></div>
    );
}

export default Meet;