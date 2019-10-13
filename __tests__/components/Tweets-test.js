import Tweets from "../../src/components/Tweets";
import { findByAttr, setUpWithMount } from '../testUtils/testHelpers.js';
import tweets from '../../src/data/tweets';

describe('Tweets-test.js', () => {
  const wrapper = setUpWithMount(Tweets, { tweets });
  const tweetsComponent = findByAttr(wrapper, 'tweets-component');

  describe('<Tweets /> COMPONENT', () => {
    describe('INITIAL RENDER CHECK', () => {
      it('renders without error', () => {
        expect(tweetsComponent.exists()).toBeTruthy();
      });

      it('should receive its expected props', () => {
        expect(Object.keys(wrapper.props())).toContain('tweets');
        expect(Array.isArray(wrapper.prop('tweets'))).toBeTruthy();
      });

      it('should render a total of three tweets', () => {
        expect(tweetsComponent.prop('children')).toHaveLength(3);
      });

      it('should render the first tweet as expected', () => {
        const firstTweet = tweetsComponent.prop('children')[0].props;
        const tweetText = firstTweet.children[0].props.children;
        const tweetTimestamp = firstTweet.children[1].props.children;

        expect(tweetText).toEqual(tweets[0].tweet);
        expect(tweetTimestamp).toEqual(tweets[0].timestamp);
      });
    });
  });
});