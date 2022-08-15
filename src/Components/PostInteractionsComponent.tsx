import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireFlameSimple, faMessage, faShareNodes } from '@fortawesome/free-solid-svg-icons';

type PostInteractionsContainerProps = {
    isComment: boolean;
};

type InteractionButtonProps = {
    color: string;
    backgroundColor: string;
}

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

    &:hover {
        background: ${props => props.backgroundColor}
        color: ${props => props.color}
        border-radius: 100px;
        cursor: pointer;

    }
`;

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
    isComment,
}: PostInteractionsContainerProps) => {
    return (
        <PostInteractionsContainer>
            <InteractionButtonContainer>
                <InteractionButton color='#F44900;' backgroundColor='rgba(244, 73, 0, 0.3);'>
                    <FontAwesomeIcon icon={faFireFlameSimple} />
                </InteractionButton>
                <InteractionButtonNumber>99 </InteractionButtonNumber>
                <InteractionButtonText>Hypes</InteractionButtonText>
            </InteractionButtonContainer>
            <InteractionButtonContainer>
                <InteractionButton color='#006CFA;' backgroundColor='rgba(0, 108, 250, 0.3);'>
                    <FontAwesomeIcon icon={faMessage} />
                </InteractionButton>
                <InteractionButtonNumber>25 </InteractionButtonNumber>
                <InteractionButtonText>Comment</InteractionButtonText>
            </InteractionButtonContainer>
            <InteractionButtonContainer>
                <InteractionButton color='rgba(18, 21, 29, 0.87);' backgroundColor='rgba(18, 21, 29, 0.3);'>
                    <FontAwesomeIcon icon={faShareNodes} />
                </InteractionButton>
                <InteractionButtonNumber>13 </InteractionButtonNumber>
                <InteractionButtonText>Shares</InteractionButtonText>
            </InteractionButtonContainer>
            <InteractionButtonContainer>
                <InteractionButtonNumber>100 </InteractionButtonNumber>
                <InteractionButtonText>Views</InteractionButtonText>
            </InteractionButtonContainer>
            {/* <InteractionButtonText>Comments</InteractionButtonText>
            <p>Shares</p>
            <p>Views</p> */}
        </PostInteractionsContainer>
    );
};

export default PostInteractionsComponent;
