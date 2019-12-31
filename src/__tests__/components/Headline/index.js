import React from 'react';
import { shallow } from 'enzyme';
import Headline from '~/components/Headline';
import { findByTestAttr, checkProps } from '~/utils';

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline Component', () => {
  describe('Checking PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        header: 'Test header',
        desc: 'Test desc',
        tempArr: [
          {
            fName: 'Test fName',
            lName: 'Test lName',
            email: 'test@email.com',
            age: 23,
            onlineStatus: false,
          },
        ],
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = { header: 'Test header', desc: 'Test desc' };
      wrapper = setUp(props);
    });

    it('should render without errors', () => {
      const component = findByTestAttr(wrapper, 'headline');
      expect(component.length).toBe(1);
    });

    it('should render a h1', () => {
      const h1 = findByTestAttr(wrapper, 'header');
      expect(h1.length).toBe(1);
    });

    it('should render a desc', () => {
      const desc = findByTestAttr(wrapper, 'desc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Have No props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it('should not render', () => {
      const component = findByTestAttr(wrapper, 'headline');
      expect(component.length).toBe(0);
    });
  });
});
