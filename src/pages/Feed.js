import React, { Component } from 'react';
import api from '../services/api';

import './Feed.css';

import like from '../assets/like.svg';

class Feed extends Component{
  state = {
    feed: [],
  };
  async componentDidMount(){
    const response = await api.get('posts');

    this.setState({feed: response.data});
  }

  render(){
    return (
      <section id='post-list'>
        {this.state.feed.map(post => (
          <article>
          <header>
            <div className='user-info'>
              <span>{post.author}</span>
              <span className='place'>{post.place}</span>
            </div>
          </header>

          <img src={`http>//localhost:3001/files/${post.image}`} alt='' />

          <footer>
            <div className='actions'>
              <img src={like} alt='' />
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