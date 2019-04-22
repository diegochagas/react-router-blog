import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {
	componentDidMount(){
		this.props.fetchPosts();
	}

	renderList(){
		return this.props.posts.map(post => {
			return(
				<li className="item" key={post.id}>  
          <div className="post-description">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
				</li>
			);
		});
	}

	render(){
		return(
      <ul className="post-list">
        {this.renderList()}
      </ul> 
		);
	}
}

const mapStateToProps = state => {
	return {posts: state.posts};
}

export default connect(mapStateToProps, {fetchPosts})(PostList);