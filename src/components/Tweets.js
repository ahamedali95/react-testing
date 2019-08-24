import React from 'react';
import moment from 'moment';

const Tweets = props => {
  return (
    <div className="tweets justify-content-center card">
      {
        props.tweets.map((tweet, i) => {
          return (
            <div
              key={i}
              className="card-body"
            >
              <p className="card-text">{tweet}</p>
              <span className="timestamp">
                {moment().format("h:mm a . MM/DD/YYYY")}
              </span>
            </div>
          )
        })
      }
    </div>
  );
}

export default Tweets;
