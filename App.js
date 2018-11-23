import React, { Component } from 'react';
import { Text, View ,StyleSheet } from 'react-native';
import PlayGround from './Playground/Playground'
class App extends Component {
	render() {
		return (
			<View style = {styles.container}>
				<PlayGround />
			</View>
		);
	}
}


styles = StyleSheet.create({
  container : {
    backgroundColor:'yellow',
    flex:1,
    flexDirection:'column'
  }
})

export default App;
