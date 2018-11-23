import React, { Component } from 'react';
import { Text, View, ScrollView,Alert } from 'react-native';
import message from '../../../recourse/message.json';
import MessageDetail from './MessageDetail';

class MessageList extends Component {
	render_one_message() {
		alert('call')
		return message.map((item) => <MessageDetail key={item} data={item} />);
	}

	render() {
		return (
			<ScrollView style={{ flexDirection: 'column', flex: 1, backgroundColor: 'green' }}>
				{this.render_one_message()}
			</ScrollView>
		);
	}
}

export default MessageList;
