import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Rectangle from "../BasicShapes/Rectangle";
import Circle from "../BasicShapes/Circle";

const SELF_ID = "shima";

class Message extends Component {
    test_components = {
        rect: <Rectangle />,
        circle: <Circle />
    };

    render() {
        const { data } = this.props;
        return (
            <View
                style={
                    data.message.sender_id == SELF_ID
                        ? styles.self_message
                        : styles.other_user_message
                }
            >
                {this.test_components[data.message.type]}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    self_message: {
        flexDirection: "row",
        flex: 1,
		justifyContent: "flex-end",
    },
    other_user_message: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "flex-start"
    }
});

export default Message;
