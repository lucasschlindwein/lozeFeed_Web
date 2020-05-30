import React, { Component } from 'react';
import api from '../services/api';
import io from 'socket.io-client';

import './Feed.css';
import like from '../assets/like.svg';

class Feed extends Component{
  state = {
    feed: [],
  };
  async componentDidMount(){
    this.registerToSocket();

    const response = await api.get('posts');

    this.setState({feed: response.data});
  }

  registerToSocket = () => {
    // const socket = io('http://localhost:3001');
    const socket = io(process.env.REACT_APP_API_URL);

    socket.on('post', newPost => {
      this.setState({ feed: [newPost, ...this.state.feed] });
    })

    socket.on('like', likedPost => {
      this.setState({
        feed: this.state.feed.map(post =>
          post._id === likedPost._id ? likedPost: post
        )
      });
    })
  }

  async handleLike(postId) {
    await api.post(`posts/${postId}/like`);

    this.props.history.push('/');
  }

  render(){
    return (
      <section id='post-list'>
        {this.state.feed.map(post => (
          <article key={post._id}>
            <header>
              <div className='user-info'>
                <span>{post.author}</span>
                <span className='place'>{post.place}</span>
              </div>
            </header>

            <img src={`${post.url}`} alt='' />

            <footer>
              <div className='actions'>
                <button type='button' onClick={() => this.handleLike(post._id)}>
                  <img src={like} alt='Like'/>
                </button>
              </div>

              <strong>{post.likes} curtidas</strong>

              <p>
                {post.description}
                <span>{post.hashtags}</span>
              </p>
            </footer>
          </article>
        ))}
      </section>
    );
  }
}

export default Feed;