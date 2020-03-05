import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchPostsAndUsers } from '~/store/modules/posts/actions';
import { Container } from './styles';
import logo from '~/assets/logo.svg';

export default function Header({ hideBtn, setHideBtn }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(fetchPostsAndUsers());

    setHideBtn(!hideBtn);
  }

  return (
    <Container data-testid="header">
      <img src={logo} className="App-logo" alt="logo" data-testid="logo" />

      <h1>Posts</h1>

      <div className="head-line" data-test="headline">
        <p data-test="desc">Click the button to render posts!</p>
      </div>

      {!hideBtn && (
        <button type="button" onClick={handleClick}>
          Get posts
        </button>
      )}
    </Container>
  );
}
