/*-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.:: TODOs ::.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
1) implement threshold for the flatlist
2) implement automatic scrollToBottom when new message gets added
*/

import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Message from "./Message";
class ChatListView extends Component {
    _render_chat_message({ item }) {
        return <Message data={item} />;
    }

    render() {
        const { data: CHAT_MESSAGES_DATA } = this.props;
        return (
            <FlatList
                style={styles.container}
                keyExtractor={({ message }) => message.id} // extracting each message ID as key for react flatlist
                renderItem={this._render_chat_message}
                data={CHAT_MESSAGES_DATA}
            />
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.:: PropTypes ::.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
ChatListView.propTypes = {
    // the actual array of messages
    data: PropTypes.arrayOf(
        PropTypes.shape({
            message: PropTypes.object,
            replied_to: PropTypes.object,
            forwarded_from: PropTypes.object,
            payload: PropTypes.object
        })
    ).isRequired,

    //threshold to limit the number of rendered items
    threshold: PropTypes.number,

    //should scroll to the bottom when new message comes into the list?
    scrollToBottom: PropTypes.bool
};

export default ChatListView;
