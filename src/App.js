import React from 'react';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import PostList from './components/PostList';
import Header from './components/Header';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />

      <Header />

      <PostList />
    </Provider>
  );
}
