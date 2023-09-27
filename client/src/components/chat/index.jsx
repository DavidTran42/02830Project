import React from 'react'
// import { PrettyChatWindow } from 'react-chat-engine-pretty'
import { useMultiChatLogic, MultiChatSocket, ChatList, ChatFeed, MultiChatWindow} from 'react-chat-engine-advanced'
import Header from "@/components/customHeader"
import StandardMessageForm from "@/components/customMessageForms/StandardMessageForm"
import Ai from "@/components/customMessageForms/Ai"

const Chat = () => {
    // advanced

    const chatProps = useMultiChatLogic (
        import.meta.env.VITE_PROJECT_ID,
        "User",
        "1234"
    )
    
    return (
        <div style={{ display: "flex", flexWrap: "wrap", height: "100vh" }}>
          <MultiChatSocket {...chatProps} />

          {/* Chat List */}
          <div style={{ flex: 1, minWidth: 300, maxWidth: 400, borderRight: "1px solid #ccc" }}>
            <ChatList {...chatProps} />
            
          </div>
    
          {/* Chat Feed */}
          <div style={{ flex: 2, minWidth: 600 }}>
            <ChatFeed
              {...chatProps}
              style={{ height: "100%" }}
              renderChatHeader={(chat) => <Header chat={chat} />}
              renderMessageForm={(props) => {
                if (chatProps.chat?.title.startsWith("AiChat_")) {
                  return <Ai props={props} activeChat={chatProps.chat} />
                }
                return (
                  <StandardMessageForm props = {props} activeChat = {chatProps.chat} />
                )
              }}

            />
          </div>
        </div>
      );
}

export default Chat