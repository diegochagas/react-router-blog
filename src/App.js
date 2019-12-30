import React from 'react';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import PostList from './components/PostList';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />

      <PostList />
    </Provider>
  );
}
