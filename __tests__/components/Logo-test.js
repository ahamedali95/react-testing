import Logo from "../../src/components/Logo";
import { findByAttr, setUpWithShallow } from '../testUtils/testHelpers.js';

describe('Logo-test.js', () => {
  const wrapper = setUpWithShallow(Logo);
  const logoComponent = findByAttr(wrapper, 'logo-component');
  const image = findByAttr(wrapper, 'logo-component-image');

  describe('INITIAL RENDER CHECK', () => {
    it('renders <Logo /> component without error', () => {
       expect(logoComponent.exists()).toBeTruthy();
    });

    it('renders image component without error', () => {
       expect(image.exists()).toBeTruthy();
    });
  });
});