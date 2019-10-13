import CreateTweet from "../../src/components/CreateTweet";
import { findByAttr, setUpWithShallow } from '../testUtils/testHelpers.js';


describe('CreateTweet-test.js', () => {
  let wrapper, instance, createTweetComponent, textarea, button;
  const mockPostTweet = jest.fn();

  beforeEach(() => {
    wrapper = setUpWithShallow(CreateTweet, { sendTweet: mockPostTweet });
    instance = wrapper.instance();
    createTweetComponent = findByAttr(wrapper,'create-tweet-component');
    textarea = findByAttr(wrapper, 'create-tweet-component-textarea');
    button = findByAttr(wrapper, 'create-tweet-component-button');
  });

  afterEach(() => {
    wrapper.unmount();
    mockPostTweet.mockReset();
  });

  describe('<CreateTweet /> COMPONENT', () => {
    describe('INITIAL RENDER CHECK', () => {
      it('should render without error', () => {
        expect(createTweetComponent.exists()).toBeTruthy();
      });

      it('should receive its expected props', () => {
        expect(Object.keys(instance.props)).toContain('sendTweet');
        expect(typeof(instance.props.sendTweet)).toEqual('function');
      });
    });

    describe('<textarea /> COMPONENT', () => {
      describe('INITIAL RENDER CHECK', () => {
        it('should render without error', () => {
          expect(textarea.exists()).toBeTruthy();
        });

        it('should render with empty value', () => {
          expect(textarea.prop('value')).toBeFalsy();
        });
      });

      describe('STATE CHANGE HANDLE CHECK', () => {
        let spy;
        const value = { target: { value: 'n' } };

        beforeEach(() => {
          spy = jest.spyOn(instance, 'handleInputChange');
          textarea.simulate('change', value);
        });

        it('should call the ~handleInputChange~ method when the value changes', () => {
          expect(spy).toHaveBeenCalled();
          expect(spy).toHaveBeenCalledTimes(1);
          expect(spy).toHaveBeenCalledWith(value);
        });

        it('should render the component with new value', () => {
          const textarea = findByAttr(wrapper, 'create-tweet-component-textarea');

          expect(textarea.prop('value')).toEqual('n');
        });
      });
    });

    describe('<button /> COMPONENT', () => {
      describe('INITIAL RENDER CHECK', () => {
        it('should render without error', () => {
          expect(button.exists()).toBeTruthy();
        });

        it('should render with appropriate label', () => {
          expect(button.prop('children')).toEqual('Tweet');
        });
      });

      describe('STATE CHANGE HANDLE CHECK', () => {
        let spy;

        beforeEach(() => {
          instance.setState({ tweet: 'This is Ian tweeting...' });
          spy = jest.spyOn(instance, 'sendTweet');
          button.simulate('click');
        });

        it('should call the ~sendTweet~ method when the button is clicked', () => {
          expect(spy).toHaveBeenCalled();
          expect(spy).toHaveBeenCalledTimes(1);
        });

        it('should render the <textarea /> component with new value', () => {
          const textarea = findByAttr(wrapper, 'create-tweet-component-textarea');

          expect(textarea.prop('value')).toEqual('');
        });

        it('should call the ~mockPostTweet~ function', () => {
          const firstArgumentObject = mockPostTweet.mock.calls[0][0];

          expect(mockPostTweet).toHaveBeenCalled();
          expect(mockPostTweet).toHaveBeenCalledTimes(1);
          expect(Object.keys(firstArgumentObject)).toHaveLength(3);
          expect(Object.keys(firstArgumentObject).sort()).toStrictEqual(['id', 'tweet', 'timestamp'].sort());
          expect(firstArgumentObject.tweet).toEqual('This is Ian tweeting...');
        });
      });
    });
  });
});
