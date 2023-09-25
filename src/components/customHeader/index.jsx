import React from 'react'
import { ChatBubbleLeftRightIcon, PhoneIcon } from "@heroicons/react/24/solid"
/* <PhoneIcon className="icon-phone" /> */

const CustomHeader = ({chat}) => {
    return (
        <div className = "chat-header">
            <div className="flexbetween">
                <ChatBubbleLeftRightIcon className = "icon-chat" />
                <h3 className="header-text">{chat.title}</h3>

            </div>
            <div className="flexbetween">
                {chat.description !== "⬅️ ⬅️ ⬅️" ? (
                    <p className="header-text">{chat.description}</p>
                ) : (
                    <p className="header-text">no chat selected</p>
                )}
            </div>
        </div>
    )
}

export default CustomHeader