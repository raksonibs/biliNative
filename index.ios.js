var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Navigator,
  NavigatorIOS,
  TouchableHighlight,
  Component
} = React;

var Dimensions = require('Dimensions');

var REQUEST_URL = 'http://localhost:3000/api/v1/today';
let things = []

var MainApp            = require('./MainApp');
var Footer            = require('./Footer.js');

var styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#85b16a'
  }
});


class biliNative extends Component {
  constructor(props) {
    super(props);    
    component = this;
    this.state = {
    }
  }
  // want to hide nav only at bottom
  render() {
    return (
      <View style={styles.container}>
        <NavigatorIOS
        barTintColor='#000'
        titleTextColor='#fff'
        tintColor='#fff'
        style={styles.container}
        initialRoute={{
          title: 'Bili',
          component: MainApp
        }}/>     
      </View>
    );
  }
}

var {width, height} = Dimensions.get('window');

var styles = React.StyleSheet.create({
  text: {
    color: 'white',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  footer: {
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'stretch'
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#BA55D3',
  }
})

AppRegistry.registerComponent('biliNative', () => biliNative);