import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '~/utils';
import PostList from '~/components/PostList';

describe('PostList Component', () => {
  describe('Checking PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        title: 'Example title',
        desc: 'Some text',
      };
      const propsError = checkProps(PostList, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Component Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'Example Title',
        desc: 'Some Text',
      };
      wrapper = shallow(<PostList {...props} />);
    });

    it('should renders without error', () => {
      const component = findByTestAttr(wrapper, 'list-item');
      expect(component.length).toBe(1);
    });

    it('should render a title', () => {
      const title = findByTestAttr(wrapper, 'title');
      expect(title.length).toBe(1);
    });

    it('should render a desc', () => {
      const desc = findByTestAttr(wrapper, 'desc');
      expect(desc.length).toBe(1);
    });
  });

  describe('should not render ', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: 'Some text',
      };
      wrapper = shallow(<PostList {...props} />);
    });

    it('Component is not rendered', () => {
      const component = findByTestAttr(wrapper, 'list-item');
      expect(component.length).toBe(0);
    });
  });
});
