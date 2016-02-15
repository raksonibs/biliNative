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
var InlinePost = require('./InlinePost')

class PostPage extends React.Component {
  constructor(props) {
    super(props)
  }

  goBack() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.thing}>
        <View>
          {
            this.props.posts.map((post, index) => {
              return <InlinePost post={post} navigator={this.props.navigator} />
            })
          }
        </View>
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

module.exports = PostPage;

