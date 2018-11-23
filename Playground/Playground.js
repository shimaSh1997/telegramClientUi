import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Rectangle from '../src/components/BasicShapes/Rectangle';
import Circle from '../src/components/BasicShapes/Circle';
import MessageList from '../src/components/Message/MessageList';

export class PlayGround extends Component {
	render() {
		return <MessageList />;
	}
}

export default PlayGround;
