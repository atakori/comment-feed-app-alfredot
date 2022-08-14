import React, { useContext, useEffect } from 'react';
import { PostsContextType, IUserPost } from '../types';
import { PostsContext } from '../context/postsContext';
import NoPostsFoundComponent from './NoPostsFoundComponent';
import { PROFILEPHOTOURL } from '../constants';
import styled from 'styled-components';
import TimeAgo from 'javascript-time-ago';
import ReactTimeAgo from 'react-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import Avatar from '@mui/material/Avatar';

import MenuComponent from './MenuComponent';

// Adding locale Time for "Time Since Posted"
TimeAgo.addDefaultLocale(en);

const ProfileFeedPostContainer = styled.div`
  border: 1px solid #ced7e7;
  border-radius: 10px;
  padding: 30px;
`;
const ProfileFeedHeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PosterInformationContainer = styled.div`
  margin-left: 5px;

  h2 {
    margin: 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #12151d;
  }

  time {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: rgba(18, 21, 29, 0.6);
  }
`;

const PostMessage = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: rgba(18, 21, 29, 0.87);
`;

const ProfileFeedComponent = () => {
  const { posts } = useContext(PostsContext) as PostsContextType;

  useEffect(() => {
    console.log('Post has been created and stored in Context');
    console.log(posts);
  }, [posts]);

  function renderPosts(posts: IUserPost[]) {
    return posts.map((post) => {
      const { username, datePosted, message } = post;
      return (
        <ProfileFeedPostContainer>
                        <MenuComponent />
          <ProfileFeedHeaderContainer>
            <Avatar
              alt={username}
              src={PROFILEPHOTOURL}
              sx={{ width: 60, height: 60 }}
            />
            <PosterInformationContainer>
              <h2>{username}</h2>
              <ReactTimeAgo date={datePosted} locale='en-US' />
            </PosterInformationContainer>
          </ProfileFeedHeaderContainer>
          <PostMessage>{message}</PostMessage>
        </ProfileFeedPostContainer>
      );
    });
  }

  return posts.length === 0 ? (
    <NoPostsFoundComponent />
  ) : (
    <div>
      <h1> Posts will go here once there is a successful post!!!</h1>

      {renderPosts(posts)}
      {/* TODO: Create DynamicPosts */}
      <p>Picture</p>
      <p>Username</p>
      <p>2 Minutes ago (Timestamp Logic)</p>

      {/* Lower Half */}
      <p>Message</p>
      <p>Hypes (Likes)</p>
      <p>Comments []</p>
      <p>Shares</p>
      <p>Views</p>

      <p>Add Comment Box</p>
    </div>
  );
};

export default ProfileFeedComponent;
