import App from "../../src/components/App";
import { findByAttr, setUpWithMount } from '../testUtils/testHelpers.js';
import tweets from '../testData/tweets';

describe('App-test.js', () => {
  const wrapper = setUpWithMount(App);
  const instance = wrapper.instance();
  instance.setState({ tweets });
  const appComponent = findByAttr(wrapper, 'app-component');
  const childrenComponents = {
    logo: findByAttr(wrapper, 'logo-component'),
    tweets: findByAttr(wrapper, 'tweets-component'),
    createTweet: findByAttr(wrapper, 'create-tweet-component')
  };


  describe('<App /> COMPONENT', () => {
    describe('INITIAL RENDER CHECK', () => {
      it('should render without error', () => {
        expect(appComponent.exists()).toBeTruthy();
      });

      it('should render its children components', () => {
        for (const key in childrenComponents) {
          expect(childrenComponents[key].exists()).toBeTruthy();
        }
      });
    });

    describe('STATE CHANGE HANDLE CHECK', () => {
      it('should update the state with new tweets', () => {
        const tweetObject = {
          id: '52452181-5ee9-49c9-90e0-478a9dcd31cf',
          tweet: 'All the love as always. H',
          timestamp: '12:10 am 12/11/2019'
        };
        const mockPostTweet = jest.spyOn(instance, 'postTweet');
        // Difference between jest.spynOn vs jest.fn()
          // - jest.spyOn() uses the actual implementation of the original method but jest.fn() does not;
        instance.postTweet = mockPostTweet;
        instance.postTweet(tweetObject);

        expect(mockPostTweet).toHaveBeenCalled();
        expect(mockPostTweet).toHaveBeenCalledWith(tweetObject);
        expect(instance.state.tweets).toHaveLength(4);
        expect(instance.state.tweets).toStrictEqual([...tweets, tweetObject]);
      });
    });
  });
});