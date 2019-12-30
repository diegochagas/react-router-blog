import api from '../../../services/api';

export const FETCH_USER = 'FETCH_USER';

export const fetchUser = id => async dispatch => {
  const response = await api.get(`/users/${id}`);
  dispatch({ type: FETCH_USER, payload: response.data });
};
