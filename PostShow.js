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
  Image,
  ScrollView
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
      <View style={styles.container}>
        <ScrollView style={styles.thing}>        
          <Text style={styles.title}>{this.props.post.title}</Text>
          <Text>{this.props.post.english_text}</Text>
          <Text>{this.props.post.spanish_text}</Text>
        </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  thing: {
    alignSelf: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    width: screenHeight * 0.5,
    height: screenHeight * 0.1,
    borderColor: 'gray', 
    borderWidth: 1
  },
  footer: {
    flex: 0.2,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  welcomePage: {
    flex: 0.8
  },
  text: {
    color: 'white'
  },
  header: {
    fontSize: 25,
    margin: 5,
    color: 'white',
    fontFamily: 'Roboto-Bold'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 10
  }
});

module.exports = PostShow;

