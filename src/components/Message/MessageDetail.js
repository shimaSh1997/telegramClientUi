import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Rectangle from '../BasicShapes/Rectangle';
import Circle from '../BasicShapes/Circle';

const MessageDetail = (props) => {
	if (props.data.message.sender_id == 'shima') {
		if (props.data.message.type == 'rect')
			return (
				<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
					<Rectangle />
				</View>
			);
		else {
			return (
				<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
					<Circle />
				</View>
			);
		}
	} else {
		if (props.data.message.type == 'rect') {
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
};

export default MessageDetail;
