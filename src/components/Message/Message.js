import React, { Component } from 'react';
import { Text, View,ScrollView } from 'react-native';
import message from '../../../recourse/message.json';
import Rectangle from '../BasicShapes/Rectangle';
import Circle from '../BasicShapes/Circle';

class Message extends Component {
	state = { chat_list: [] };

	generate_chat_list() {
		const chats = message.map((item) => {
			if (item.message.sender_id == 'shima') {
				
				if (item.message.type == 'rect') {
					return (
						<View style={{ flex:1,flexDirection:'row', justifyContent: 'flex-end' }}>
							<Rectangle />
						</View>
					);
				} else {
					return (
						<View style={{ flex:1,flexDirection:'row',justifyContent: 'flex-end' }}>
							<Circle />
						</View>
					);
				}
			} else {
				if (item.message.type == 'rect') {
					return (
						<View style={{ flex:1,flexDirection:'row',justifyContent: 'flex-start' }}>
							<Rectangle />
						</View>
					);
				} else {
					return (
						<View style={{ flex:1,flexDirection:'row',justifyContent: 'flex-start' }}>
							<Circle />
						</View>
					);
				}
			}
		});
		this.setState({
			chat_list:chats
		})
	}

	componentDidMount(){
		this.generate_chat_list()
	}
	

	render() {
		return (
			<ScrollView style={{flexDirection:'column',flex:1,backgroundColor:'#000'}}>
				{this.state.chat_list}
			</ScrollView>
		);
	}
}

export default Message;
