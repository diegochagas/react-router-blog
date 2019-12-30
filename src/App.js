import React from 'react';
import { Provider } from 'react-redux';

import './styles/styles.css';
import './App.css';
import PostList from './components/PostList';

import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostList />
      </div>
    </Provider>
  );
}
