import React, { Component } from 'react';
import moment from 'moment';
import uuid from "uuid";

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
    const tweetObject = { id: uuid.v4(), tweet, timestamp: moment().format("h:mm a MM/DD/YYYY") };

    this.setState({ tweet: '' }, () => this.props.sendTweet(tweetObject));
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
          data-test="create-tweet-component-textarea"
          value={this.state.tweet}
          onChange={(e) => this.handleInputChange(e)}
        />
        <button
          className="btn btn-primary submit-btn"
          data-test="create-tweet-component-button"
          type="button"
          onClick={() => this.sendTweet()}
        >
          Tweet
        </button>
      </div>
    );
  }
}

export default CreateTweet;
