import React, { Component } from 'react';

class CreateTweet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: ''
    }
  }

  handleInputChange(e) {
    const value = e.target.value;

    if (value.length <= 280) {
      this.setState({ tweet: e.target.value });
    }
  }

  sendTweet() {
    const tweet = this.state.tweet;

    this.setState({ tweet: '' }, () => this.props.sendTweet(tweet));
  }

  render() {
    return (
      <div
        className="row justify-content-center"
        data-test="create-tweet-component"
      >
        <label className="col col-2">
          Enter Tweet:
        </label>
        <textarea
          className="col col-5 input"
          value={this.state.tweet}
          onChange={(e) => this.handleInputChange(e)}
        />
        <button
          type="button"
          className="btn btn-primary submit-btn"
          onClick={() => this.sendTweet()}
        >
          Tweet
        </button>
      </div>
    );
  }
}

export default CreateTweet;
