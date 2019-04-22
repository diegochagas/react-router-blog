import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const FETCH_POSTS = 'fetch_posts';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get(`/posts`);
	dispatch({ type: FETCH_POSTS, payload: response });
}