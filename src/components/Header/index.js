import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchPostsAndUsers } from '../../store/modules/posts/actions';
import { Container } from './styles';
import logo from '../../assets/logo.svg';

export default function Header() {
  const dispatch = useDispatch();

  const [hideBtn, setHideBtn] = useState(false);

  const handleClick = () => {
    dispatch(fetchPostsAndUsers());

    setHideBtn(!hideBtn);
  };

  return (
    <Container data-test="header">
      <img src={logo} className="App-logo" alt="logo" data-test="logo" />

      <h1 data-test="header">Posts</h1>
      <div className="head-line" data-test="headline">
        {!hideBtn && (
          <>
            <p data-test="desc">Click the button to render posts!</p>

            <button type="button" onClick={handleClick}>
              Get posts
            </button>
          </>
        )}
      </div>
    </Container>
  );
}
