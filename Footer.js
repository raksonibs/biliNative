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

var REQUEST_URL = 'http://localhost:3000/posts/';

var Settings = require('./Settings');
var PostPage = require('./PostPage');

class Footer extends Component {
  constructor(props) {    
    super(props);
    this.state = {
      isLoading: false,
      message: ''
    }
  }

  componentDidMount() {
   
  }

  _onMusicPressed(response) {
    this.props.navigator.push({
      title: "Music",
      component: PostPage,
      passProps: {navigator: this.props.navigator, posts: response}
    });
  }

  _onBooksPressed(response) {
    this.props.navigator.push({
      title: "Books",
      component: PostPage,
      passProps: {navigator: this.props.navigator, posts: response}
    });
  }

  _onArticlesPressed(response) {
    this.props.navigator.push({
      title: "Articles",
      component: PostPage,
      passProps: {navigator: this.props.navigator, posts: response}
    });
  }

  _onSettingsPressed(response) {
    this.props.navigator.push({
      title: "Settings",
      component: PostPage,
      passProps: {navigator: this.props.navigator, posts: response}
    });
  }

  _handleResponse(response, type) {
    if (response.length > 0) {
      switch (type) {
        case "music":
          this._onMusicPressed(response)
          break;
        case "books":
          this._onBooksPressed(response)
          break;
        case "articles":
          this._onArticlesPressed(response)
          break;
        case "setting":
          this._onSettingPressed(response)
          break;        
      }
    } else {
      this.setState({ message: 'Not recognized; please try again.'});
    }
    this.setState({ isLoading: false , message: '' });
  }

  _executeQuery(type) {
    let typeChose = type  
    console.log(REQUEST_URL+type);
    fetch(REQUEST_URL+type)
    .then(response => response.json())
    .then(responseData => this._handleResponse(responseData, typeChose))
    .catch(error => {      
      console.log("error")
      this.setState({
        isLoading: false,
        message: 'Something bad happened ' + error
      });
    })
  }

  handleButtonPress(pressed) {
    let type = pressed
    this.setState({isLoading: true})

    this._executeQuery(type)
  }
   
  render() {
    var spinner = this.state.isLoading ?
      ( <ActivityIndicatorIOS
          hidden='true'
          size='large'/> ) :
      ( <View /> );

    return (
      <View style={styles.container}>
        {spinner}
        <TouchableHighlight style={styles.button}
          underlayColor='#99d9f4'
          onPress={this.handleButtonPress.bind(this, 'books')}
          type='book'
          >
          <Text style={styles.buttonText}>Books</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
          underlayColor='#99d9f4'
          onPress={this.handleButtonPress.bind(this, 'articles')}
          type='article'
          >
          <Text style={styles.buttonText}>Articles</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
          underlayColor='#99d9f4'
          onPress={this.handleButtonPress.bind(this, 'music')}
          type='music'
          >
          <Text style={styles.buttonText}>Music</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
          underlayColor='#99d9f4'
          onPress={this.handleButtonPress.bind(this, 'settings')}
          type='setting'
          >
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableHighlight>
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

module.exports = Footer;