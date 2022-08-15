import { useContext, useEffect } from 'react';
import { PostsContextType, IComment, IUserProfile } from '../types';
import { PostsContext, usePostsContext } from '../context/postsContext';
import NoPostsFoundComponent from './NoPostsFoundComponent';
import styled from 'styled-components';

import MenuComponent from './MenuComponent';
import CreateCommentComponent from './CreateCommentComponent';
import CommentsComponent from './CommentsComponent';
import CommentInfoComponent from './CommentInfoComponent';
import PostInteractionsContainer from './PostInteractionsComponent';
import { useUserProfileContext } from '../context/profileContext';

const ProfileFeedPostContainer = styled.div`
    border: 1px solid #ced7e7;
    border-radius: 10px;
    padding: 30px;
    margin: 20px 0px;
`;

const ProfileFeedComponent = () => {
    const { posts } = usePostsContext() as PostsContextType;
    const { profileUsername } = useUserProfileContext() as IUserProfile;

    useEffect(() => {
        console.log('Post has been created and stored in Context');
        console.log(posts);
    }, [posts]);

    function renderPosts(posts: IComment[]) {
        const basePosts = posts.filter((posts) => {
            return posts.parentId === null
        });

        return basePosts.map((post) => {
            const { id, username, dateCreated, message, likes } = post;
            const comments = posts.filter((posts) => {
                return posts.parentId === id;
            })
            const isLiked = likes.includes(profileUsername);
            const amountOfLikes = likes.length;

            return (
                <ProfileFeedPostContainer key={id}>
                    <MenuComponent />
                    <CommentInfoComponent message={message} dateCreated={dateCreated} username={username} isComment={false}/>
                    <PostInteractionsContainer amountOfLikes={amountOfLikes} isLiked={isLiked} commentId={id} isComment={false}/>
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
        </div>
    );
};

export default ProfileFeedComponent;
