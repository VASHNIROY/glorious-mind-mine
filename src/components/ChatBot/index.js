// import  { Component } from 'react';
// // Flag to check if the Kommunicate script is already loaded
// let isKommunicateLoaded = false;

// class ChatBot extends Component {

//   componentDidMount() {
//     if (!isKommunicateLoaded) {
//       (function(d, m) {
//         var kommunicateSettings = {
//           appId: "1a852afcd2481f81c50865aebe85f1316",
//           popupWidget: true,
//           automaticChatOpenOnNavigation: true
//         };
//         var s = document.createElement("script");
//         s.type = "text/javascript";
//         s.async = true;
//         s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
//         var h = document.getElementsByTagName("head")[0];
//         h.appendChild(s);
//         window.kommunicate = m;
//         m._globals = kommunicateSettings;
//         isKommunicateLoaded = true;
//       })(document, window.kommunicate || {});
//     }
//   }

//   render() {
//     return
//   }
// }

// export default ChatBot;

// const ChatBot = () => {
//   return (
//     <df-messenger
//     intent="WELCOME"
//     chat-title="GloriousChatAgent"
//     agent-id="a3a73728-59a1-4e8b-be57-03f48c8a0719"
//     language-code="en"
//     ></df-messenger>
//   );
// };

 
// export default ChatBot;

import { useEffect } from "react";

const studyAboradUrl= process.env.REACT_APP_CHATBOT

const ChatBot =()=>{
useEffect(() => {
  var Tawk_API = Tawk_API || {};
  var Tawk_LoadStart = new Date();
  (function () {
    var s1 = document.createElement("script");
    var s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = studyAboradUrl;
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
  })();
}, []); // Empty dependency array to ensure this effect runs only once
return <div></div>;
}

export default ChatBot

 

 