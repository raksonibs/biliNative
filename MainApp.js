'use strict';
 
var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Navigator,
  Image,
  Component,
  ScrollView
} = React;

var WelcomePage = require('./WelcomePage');
var Footer = require('./Footer');

class MainApp extends Component {
  constructor(props) {    
    super(props);
  }
   
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <WelcomePage style={styles.welcomePage} navigator={this.props.navigator} />
        </ScrollView>
        <View>
          <Footer style={styles.footer} navigator={this.props.navigator} />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: 'white'
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
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  image: {
    width: 217,
    height: 138
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

module.exports = MainApp;
