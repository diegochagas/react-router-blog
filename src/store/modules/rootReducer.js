import { combineReducers } from 'redux';
import postsReducer from './posts/reducer';
import usersReducer from './user/reducer';

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
});
