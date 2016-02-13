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

class WelcomePage extends Component {
  constructor(props) {    
    super(props);
    this.state = {
      isLoading: true,
      message: ''
    }
  }

  componentDidMount() {
    this._executeQuery(); 
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

  _executeQuery() {    
    console.log(REQUEST_URL);
    fetch(REQUEST_URL)
    .then(response => response.json())
    .then(responseData => this._handleResponse(responseData))
    .catch(error => {      
      console.log("error")
      this.setState({
        isLoading: false,
        message: 'Something bad happened ' + error
      });
    })
  }

  onEventPressed() {
    this.setState({
      isLoading: true,
    })
    this._executeQuery()
  }
   
  render() {

    var spinner = this.state.isLoading ?
      ( <ActivityIndicatorIOS
          hidden='true'
          size='large'/> ) :
      ( <TouchableHighlight style={styles.button}
          underlayColor='#99d9f4'
          onPress={this.onEventPressed.bind(this)}
          >
          <Text style={styles.buttonText}>Explore All</Text>
        </TouchableHighlight> );
    return (
      <View style={styles.container}>
        <Text style={styles.header}> WhatToDo </Text>    
        <Text style={styles.text}> Events for Toronto, Canada </Text>
        {spinner}
        <Text style={styles.description}>{this.state.message}</Text>
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

module.exports = WelcomePage;
