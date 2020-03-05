import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';
import UserHeader from './UserHeader';

export default function PostList({ hideBtn }) {
  const posts = useSelector(state => state.posts);

  return (
    <Container>
      {posts.length === 0 && hideBtn ? <progress /> : null}

      {posts.map(post => {
        return (
          <li className="post-list-item" key={post.id}>
            <i className="icon-user" />

            <div className="post-description">
              <h2>{post.title}</h2>

              <p>{post.body}</p>

              <UserHeader userId={post.userId} />
            </div>
          </li>
        );
      })}
    </Container>
  );
}
