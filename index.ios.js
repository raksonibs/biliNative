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
  TouchableHighlight,
  Component,
  TabBarIOS
} = React;

import {
  MKIconToggle,
  MKSwitch,
  MKRadioButton,
  MKCheckbox,
  MKColor,
  getTheme,
  setTheme,
} from 'react-native-material-kit';

var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    return (<TouchableHighlight onPress={() => {
      if (index > 0) {
        navigator.pop()

      }
    }}>
      <Text> Back </Text>
    </TouchableHighlight>
  )
  },
  RightButton: function(route, navigator, index, navState) {
    return null
  },
  Title: function(route, navigator, index, navState) {
    return (
      <Text> {route.name} </Text>
    )
  }
}

// customize the material design theme
setTheme({
  primaryColor: MKColor.Purple,
  primaryColorRGB: MKColor.RGBPurple,
  accentColor: MKColor.Amber,
});

var Dimensions = require('Dimensions');

var REQUEST_URL = 'http://localhost:3000/api/v1/today';
let things = []

var MainApp = require('./MainApp');

var styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

var Page = React.createClass({
  render: function() {
    return (
      <View style={{marginTop: 80}}>
        <TouchableHighlight onPress={() => {
          var nextIndex = this.props.index + 1;

          this.props.navigator.push({
            name: "Scene " + nextIndex,
            index: nextIndex
          })
        }}>
          <Text> Next </Text>
        </TouchableHighlight>
      </View>
    )

  }
})

class biliNative extends Component {
  constructor(props) {
    super(props);    
    component = this;
    this.state = {
      selectedTab: 'pg1'
    }
  }
  // want to hide nav only at bottom
  render() {
    return (
      <View style={styles.container}>
        <Navigator initialRoute={{name: 'Outer', index: 0}}
          renderScene={(route, navigator) => {
            return (
              <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                  title="Page 1"
                  selected={this.state.selectedTab === 'pg1'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'pg1'
                    })
                  }}
                  <Navigator initialRoute={{name: "First", index:0}}
                    renderScene={(route, navigator) => {
                      return <Page navigator={navigator} name={route.name} index={route.index} />                      
                    }}
                    navigatonBar={
                      <Navigator.NavigationBar routerMapper={NavigationBarRouteMapper} /> 
                    }
                  />
                </TabBarIOS.Item>
            )
          }}
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
    backgroundColor: '#fff',
  }
})

AppRegistry.registerComponent('biliNative', () => biliNative);