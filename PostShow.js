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

class PostShow extends React.Component {
  constructor(props) {
    super(props)
  }

  goBack() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.thing}>
        <TouchableHighlight
          onPress={this.goBack.bind(this)}
        >
          <Text style={styles.buttonText}>Go Back!</Text>
        </TouchableHighlight>
        <Text>{this.props.post.english_text}</Text>
        <Text>{this.props.post.spanish_text}</Text>
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

module.exports = PostShow;

