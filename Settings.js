var React = require('react-native');

var {
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  Text,
  TouchableElement,
  StyleSheet,
  Dimensions,
  Image
} = React;

let screenHeight = Dimensions.get('window').height;

class Settings extends React.Component {
  constructor(props) {
    super(props)
    let clickedBut = this.props.clicked ? true : false
    this.state = {
      clicked: clickedBut
    }
  }

  goBack() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.thing}>
        <Text>Event Show</Text>
        <TouchableHighlight
          onPress={this.goBack.bind(this)}
        >
          <Text style={styles.buttonText}>Go Back!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  thing: {
    alignSelf: 'center',
    padding: 20,
    paddingTop: 50,
    width: screenHeight * 0.5,
    height: screenHeight * 0.1,
    borderColor: 'gray', 
    borderWidth: 1
  },
});

module.exports = Settings;

