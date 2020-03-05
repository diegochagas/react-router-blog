import React, { useState } from 'react';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import PostList from './components/PostList';
import Header from './components/Header';
import { store } from './store';

export default function App() {
  const [hideBtn, setHideBtn] = useState(false);

  return (
    <Provider store={store}>
      <GlobalStyle />

      <Header hideBtn={hideBtn} setHideBtn={setHideBtn} />

      <PostList hideBtn={hideBtn} />
    </Provider>
  );
}
