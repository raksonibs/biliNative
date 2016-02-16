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

var REQUEST_URL = 'http://localhost:3000/posts';

var PostList = require('./PostList');

class WelcomePage extends Component {
  constructor(props) {    
    super(props);
    this.state = {
      isLoading: true,
      message: ''
    }
  }

  componentDidMount() {
    // this._executeQuery(); 
  }

  _handleResponse(response) {
    if (response.length > 0) {
      this.props.navigator.push({
        title: 'posts',
        component: PostList,
        passProps: {posts: response}
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
    return (
      <View style={styles.container}>
        <Text>Supports French, Spanish, and English!</Text>     
        <Text>Click below for articles, music, and books!</Text> 
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
    color: 'white'
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

module.exports = WelcomePage;
