import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import { fetchPostsAndUsers } from '~/store/modules/posts/actions';
import Header from '~/components/Header';

jest.mock('react-redux');

describe('Header Component', () => {
  it('should render without errors', () => {
    const { getByTestId, getByText } = render(<Header />);

    expect(getByTestId('header')).toContainElement(getByText('Get posts'));
  });

  it('should be able to show a list of posts', () => {
    jest.mock('react-redux');

    const { getByTestId, getByText } = render(<Header />);

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    fireEvent.click(getByText('Get posts'));

    expect(dispatch).toHaveBeenCalledWith(fetchPostsAndUsers());
  });
});
