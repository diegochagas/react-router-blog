import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import './PostList.css';
import UserHeader from './UserHeader';

class PostList extends Component {
	componentDidMount(){
		this.props.fetchPostsAndUsers();
	}

	renderList(){
		return this.props.posts.map(post => {
			return(
				<li className="post-list-item" key={post.id}>  
					<i className="fas fa-user"></i>
					<div className="post-description">
						<h2>{post.title}</h2>
						<p>{post.body}</p>
						<UserHeader userId={post.userId}/>
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

export default connect(mapStateToProps, {fetchPostsAndUsers})(PostList);