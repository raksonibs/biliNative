'use strict';
 
var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;

var REQUEST_URL = 'http://localhost:3000/api/v1/today';

var EventList             = require('./EventList');
var Footer             = require('./Footer');
var WelcomePage             = require('./WelcomePage');

class MainApp extends Component {
  constructor(props) {    
    super(props);
  }
   
  render() {
    return (
      <View style={styles.container}>
        <WelcomePage navigator={this.props.navigator} />
        <Footer navigator={this.props.navigator} />
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
    backgroundColor: '#BA55D3',
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
