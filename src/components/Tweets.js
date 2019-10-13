import React from 'react';

const Tweets = props => {
  return (
    <div
        className="tweets justify-content-center card"
        data-test="tweets-component"
    >
      {
        props.tweets.map(tweet => {
          return (
            <div
              key={tweet.id}
              className="card-body"
            >
              <p className="card-text">{tweet.tweet}</p>
              <span className="timestamp">
                {tweet.timestamp}
              </span>
            </div>
          )
        })
      }
    </div>
  );
}

export default Tweets;
