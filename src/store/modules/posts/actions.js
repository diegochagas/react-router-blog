import _ from 'lodash';

import { fetchUser } from '../user/actions';
import api from '../../../services/api';

export const FETCH_POSTS = 'FETCH_POSTS';

export const fetchPosts = () => async dispatch => {
  const response = await api.get(`/posts`);
  dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};
