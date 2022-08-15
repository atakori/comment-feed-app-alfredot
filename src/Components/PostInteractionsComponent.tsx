import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFireFlameSimple,
    faMessage,
    faShareNodes,
} from '@fortawesome/free-solid-svg-icons';
import { PostsContextType, IUpdateCommentLikes, IUserProfile } from '../types';
import { usePostsContext } from '../context/postsContext';
import { useUserProfileContext } from '../context/profileContext';

type PostInteractionsContainerProps = {
    commentId: string;
    isComment: boolean;
    isLiked: boolean;
};

interface InteractionButtonProps {
    color: string;
    backgroundColor: string;
};

interface LikeInteractionButtonProps extends InteractionButtonProps {
    isLiked: boolean;
};

const PostInteractionsContainer = styled.div`
    display: flex;
    align-items: center;
`;

const InteractionButton = styled.button<InteractionButtonProps>`
    padding: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    border: none;
    background: transparent;
    height:30px;
    width: 30px;
    border-radius: 100px;

    &:hover {
        background: ${(props) => props.backgroundColor}
        color: ${(props) => props.color}
        cursor: pointer;
    }
`;

const LikeInteractionButton = styled(InteractionButton)<LikeInteractionButtonProps>`
    color: ${(props) => props.isLiked ?  "#F44900;" : 'inherit'}
    border-radius: 100px;
    
    &:hover{
        background: ${(props) => props.isLiked ?  "#F44900;" : "inherit"}
        color: ${(props) => props.isLiked ?  "white;" : props.color}
    }
`

const InteractionButtonNumber = styled.span`
    color: #12151d;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
`;

const InteractionButtonText = styled.span`
    font-weight: 400;
    font-size: 12px;
`;

const InteractionButtonContainer = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    margin-right: 5px;
    height: 30px;
    align-self: baseline;
`;

const PostInteractionsComponent = ({
    commentId,
    isComment,
    isLiked,
}: PostInteractionsContainerProps) => {
    const { updateLikes } = usePostsContext() as PostsContextType;
    const { profileUsername } = useUserProfileContext() as IUserProfile;

    const handleLikeUpdate = () => {
        //Goal: Add the current username to the Post "Likes"
        // Information To Know: username, id of comment/post
        console.log('Handling like logic!!!');
        const updateLikesObject: IUpdateCommentLikes = {
            username: profileUsername,
            commentId: commentId,
        };

        updateLikes(updateLikesObject);
    };

    const renderViews = () => {
        if (!isComment) {
            return (
                <InteractionButtonContainer>
                    <InteractionButtonNumber>100 </InteractionButtonNumber>
                    <InteractionButtonText>Views</InteractionButtonText>
                </InteractionButtonContainer>
            );
        }
    };

    return (
        <PostInteractionsContainer>
            <InteractionButtonContainer>
                <LikeInteractionButton
                    onClick={() => handleLikeUpdate()}
                    color='#F44900;'
                    backgroundColor='rgba(244, 73, 0, 0.3);'
                    isLiked={isLiked}
                >
                    <FontAwesomeIcon icon={faFireFlameSimple} />
                </LikeInteractionButton>
                <InteractionButtonNumber>99 </InteractionButtonNumber>
                <InteractionButtonText>Hypes</InteractionButtonText>
            </InteractionButtonContainer>
            <InteractionButtonContainer>
                <InteractionButton
                    color='#006CFA;'
                    backgroundColor='rgba(0, 108, 250, 0.3);'
                >
                    <FontAwesomeIcon icon={faMessage} />
                </InteractionButton>
                <InteractionButtonNumber>25 </InteractionButtonNumber>
                <InteractionButtonText>
                    {isComment ? 'Replies' : 'Comment'}
                </InteractionButtonText>
            </InteractionButtonContainer>
            <InteractionButtonContainer>
                <InteractionButton
                    color='rgba(18, 21, 29, 0.87);'
                    backgroundColor='rgba(18, 21, 29, 0.3);'
                >
                    <FontAwesomeIcon icon={faShareNodes} />
                </InteractionButton>
                <InteractionButtonNumber>13 </InteractionButtonNumber>
                <InteractionButtonText>Shares</InteractionButtonText>
            </InteractionButtonContainer>
            {renderViews()}
        </PostInteractionsContainer>
    );
};

export default PostInteractionsComponent;
