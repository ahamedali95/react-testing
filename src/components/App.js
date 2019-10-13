import React, { Component } from 'react';
import Tweets from './Tweets';
import CreateTweet from './CreateTweet';
import Logo from './Logo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
    this.postTweet = this.postTweet.bind(this);
  }

  postTweet(tweet) {
    this.setState(prevState => ({
      tweets: [...prevState.tweets, tweet]
    }), () => console.log(this.state.tweets));
  }

  render() {
    return(
      <div
        className="container"
        data-test="app-component"
      >
        <Logo />
        <Tweets tweets={this.state.tweets} />
        <CreateTweet sendTweet={tweet => this.postTweet(tweet)} />
      </div>
    );
  }
}

export default App;
