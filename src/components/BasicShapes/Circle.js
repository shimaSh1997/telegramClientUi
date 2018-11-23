import React, { Component } from 'react';
import { Text, View ,Dimensions ,StyleSheet} from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

class Circle extends Component {
	render() {
		return <View style={styles.circle} />;
	}
}
const styles = StyleSheet.create({
	circle: {
		width: SCREEN_WIDTH * 0.6,
		height: SCREEN_WIDTH * 0.6,
		borderRadius: SCREEN_HEIGHT,
		backgroundColor: 'blue'
	}
});

export default Circle;
