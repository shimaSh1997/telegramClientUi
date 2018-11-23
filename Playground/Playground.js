import React, { Component } from "react";
import ChatListView from "../src/components/Message/ChatListView";
import fake_message_data from "../res/message.json";

export class PlayGround extends Component {
    render() {
        return (
            <ChatListView
                data={fake_message_data}
                threshold={1000}
                scrollToBottom={true}
            />
        );
    }
}

export default PlayGround;
