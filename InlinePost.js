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

import PostShow from './PostShow'

class InlinePost extends React.Component {
  constructor(props) {
    super(props)
  }

  goBack() {
    this.props.navigator.pop();
  }

  handleButtonPress() {
    this.props.navigator.push({
      title: "Post",
      component: PostShow,
      passProps: {navigator: this.props.navigator, post: this.props.post}
    });
  }

  render() {
    return (
      <View style={styles.thing}>
       <TouchableHighlight style={styles.button}
          underlayColor='#99d9f4'
          onPress={this.handleButtonPress.bind(this)}
          type='music'
          >
          <Text style={styles.buttonText}>{this.props.post.title}</Text>
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

module.exports = InlinePost;

