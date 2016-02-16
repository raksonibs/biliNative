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
  NavigatorIOS,
  TouchableOpacity
} = React;

import {
  MKIconToggle,
  MKSwitch,
  MKRadioButton,
  MKCheckbox,
  getTheme,
  setTheme,
  MKButton,
  MKColor
} from 'react-native-material-kit';

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: 'white'
  },
  containerFooter: {
    flex: 1, 
    flexDirection: 'row'
  },
  itemFooter: {
    flex: 0.25,
    padding: 10
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
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  fab: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});

const AccentColoredFlatButtonBooks = MKButton.accentColoredFlatButton()
  .withText('Books')
  .withTextStyle({
    color: MKColor.Teal,
    fontWeight: 'bold',
  })
  .build();
const AccentColoredFlatButtonArticles = MKButton.accentColoredFlatButton()
  .withText('Articles')
  .withTextStyle({
    color: MKColor.Teal,
    fontWeight: 'bold',
  })
  .build();
const AccentColoredFlatButtonSettings = MKButton.accentColoredFlatButton()
  .withText('Settings')
  .withTextStyle({
    color: MKColor.Teal,
    fontWeight: 'bold',
  })
  .build();
const AccentColoredFlatButtonMusic = MKButton.accentColoredFlatButton()
  .withText('Music')
  .withTextStyle({
    color: MKColor.Teal,
    fontWeight: 'bold',
  })
  .build();

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

  _onSettingsPressed() {
    this.setState({isLoading: false})
    this.props.navigator.push({
      title: "Settings",
      component: Settings,
      passProps: {navigator: this.props.navigator}
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
    if (type !== "settings") {      
      this._executeQuery(type)
    } else {
      this._onSettingsPressed()
    }
  }
   
  render() {
    var spinner = this.state.isLoading ?
      ( <ActivityIndicatorIOS
          hidden='true'
          size='large'/> ) :
      ( <View /> );

    return (
      <View style={styles.containerFooter}>
        {spinner}  
        <AccentColoredFlatButtonBooks style={styles.itemFooter} onPress={this.handleButtonPress.bind(this, 'books')}/>
        <AccentColoredFlatButtonArticles style={styles.itemFooter} onPress={this.handleButtonPress.bind(this, 'articles')}/>
        <AccentColoredFlatButtonMusic style={styles.itemFooter} onPress={this.handleButtonPress.bind(this, 'music')}/>
        <AccentColoredFlatButtonSettings style={styles.itemFooter} onPress={this.handleButtonPress.bind(this, 'settings')}/>
        <Text style={styles.description}>{this.state.message}</Text>
      </View>
    );
  }
}

module.exports = Footer;