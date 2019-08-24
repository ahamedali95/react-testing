import React, { Component } from 'react';
import Tweets from './Tweets';
import Input from './Input';
import Logo from './Logo';

class Twitter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  postTweet(tweet) {
    this.setState(prevState => ({
      tweets: [...prevState.tweets, tweet]
    }), () => console.log(this.state.tweets));
  }

  render() {
    return(
      <div className="container">
        <Logo />
        <Tweets tweets={this.state.tweets} />
        <Input sendTweet={(tweet) => this.postTweet(tweet)} />
      </div>
    );
  }
}

export default Twitter;
