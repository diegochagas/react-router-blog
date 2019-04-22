import jsonPlaceholder from '../apis/jsonPlaceholder';

export const FETCH_POSTS = 'fetch_posts';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get(`/posts`);
	dispatch({ type: FETCH_POSTS, payload: response.data });
}