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
  Component,
  NavigatorIOS
} = React;

var REQUEST_URL = 'http://localhost:3000/api/v1/today';

var Settings = require('./Settings');
var Music = require('./Music');
var Books = require('./Books');
var Articles = require('./Articles');


class Footer extends Component {
  constructor(props) {    
    super(props);
    this.state = {
      money: '',
      category: '',
      location: ''
    }
  }

  componentDidMount() {
   
  }

  _handleResponse(response) {
    if (response.events.length > 0) {
      this.props.navigator.push({
        title: 'Events',
        component: EventList,
        passProps: {events: response.events}
      });
    } else {
      this.setState({ message: 'Not recognized; please try again.'});
    }
    this.setState({ isLoading: false , message: '' });
  }

  onMusicPressed() {
    this.props.navigator.push({
      title: "Music",
      component: Music,
      passProps: {navigator: navigator}
    });
  }

  onBooksPressed() {
    this.props.navigator.push({
      title: "Books",
      component: Books,
      passProps: {navigator: navigator}
    });
  }

  onArticlesPressed() {
    this.props.navigator.push({
      title: "Articles",
      component: Articles,
      passProps: {navigator: navigator}
    });
  }

  onSettingsPressed() {
    this.props.navigator.push({
      title: "Settings",
      component: Settings,
      passProps: {navigator: navigator}
    });
  }
   
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button}
          underlayColor='#99d9f4'
          onPress={this.onBooksPressed.bind(this)}
          >
          <Text style={styles.buttonText}>Books</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
          underlayColor='#99d9f4'
          onPress={this.onArticlesPressed.bind(this)}
          >
          <Text style={styles.buttonText}>Articles</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
          underlayColor='#99d9f4'
          onPress={this.onMusicPressed.bind(this)}
          >
          <Text style={styles.buttonText}>Music</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
          underlayColor='#99d9f4'
          onPress={this.onSettingsPressed.bind(this)}
          >
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableHighlight>
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

module.exports = Footer;