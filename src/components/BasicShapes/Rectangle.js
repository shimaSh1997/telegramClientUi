import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default class Rectangle extends Component {
	render() {
		return (
			<View 
				style={styles.rectangle}>
			</View>
		)
		
	}
}

const styles = StyleSheet.create({
	rectangle: {
		width: 0.4 * SCREEN_WIDTH,
		height: 0.5 * SCREEN_HEIGHT,
		backgroundColor: 'yellow'
	}
});
