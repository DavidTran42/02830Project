import React from 'react'
// import { PrettyChatWindow } from 'react-chat-engine-pretty'
import { useMultiChatLogic, MultiChatSocket, ChatList, ChatFeed} from 'react-chat-engine-advanced'
import Header from "@/components/customHeader"

const Chat = () => {
    // advanced

    const chatProps = useMultiChatLogic (
        import.meta.env.VITE_PROJECT_ID,
        "Merlin",
        "1234"
    )
    
    return (
        <div style={{ display: "flex", flexWrap: "wrap", height: "100vh" }}>
          {/* Chat List */}
          <div style={{ flex: 1, minWidth: 300, maxWidth: 400, borderRight: "1px solid #ccc" }}>
            <ChatList {...chatProps} />
          </div>
    
          {/* Chat Feed */}
          <div style={{ flex: 2, minWidth: 600 }}>
            <MultiChatSocket {...chatProps} />
            <ChatFeed
              {...chatProps}
              style={{ height: "100%" }}
              renderChatHeader={(chat) => <Header chat={chat} />}
            />
          </div>
        </div>
      );
}

export default Chat