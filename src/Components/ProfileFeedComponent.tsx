import React, { useContext, useEffect } from 'react';
import { PostsContextType, IComment } from '../types';
import { PostsContext } from '../context/postsContext';
import NoPostsFoundComponent from './NoPostsFoundComponent';
import styled from 'styled-components';

import MenuComponent from './MenuComponent';
import CreateCommentComponent from './CreateCommentComponent';
import CommentsComponent from './CommentsComponent';
import CommentInfoComponent from './CommentInfoComponent';

const ProfileFeedPostContainer = styled.div`
    border: 1px solid #ced7e7;
    border-radius: 10px;
    padding: 30px;
    margin: 20px 0px;
`;

const ProfileFeedComponent = () => {
    const { posts } = useContext(PostsContext) as PostsContextType;

    useEffect(() => {
        console.log('Post has been created and stored in Context');
        console.log(posts);
    }, [posts]);

    function renderPosts(posts: IComment[]) {
        const basePosts = posts.filter((posts) => {
            return posts.parentId === null
        });

        return basePosts.map((post) => {
            const { id, username, dateCreated, message } = post;
            const comments = posts.filter((posts) => {
                return posts.parentId === id;
            })

            return (
                <ProfileFeedPostContainer key={id}>
                    <MenuComponent />
                    <CommentInfoComponent message={message} dateCreated={dateCreated} username={username} isComment={false}/>
                    <CreateCommentComponent parentId={id} />
                    <CommentsComponent comments={comments}/>
                </ProfileFeedPostContainer>
            );
        });
    }

    return posts.length === 0 ? (
        <NoPostsFoundComponent />
    ) : (
        <div>
            {renderPosts(posts)}

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
