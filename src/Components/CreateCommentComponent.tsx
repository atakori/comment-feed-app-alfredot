import { useState } from 'react';
import { usePostsContext } from '../context/postsContext';
import { useProfile } from '../context/profileContext';
import { IUserProfile, PostsContextType } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const CreateCommentContainer = styled.div`
    width: 100%;
    background-color: #f1f4f8;
    border-radius: 100px;
    min-height: 40px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 10px;
`;

const InputField = styled.span`
    color: rgba(18, 21, 29, 0.6);
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    width: 90%;
    padding: 10px;

    &[placeholder]:empty:before {
        content: attr(placeholder);
    }

    &:focus-visible {
        outline: none;
    }
`;

const ActionButton = styled.button`
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: rgba(18, 21, 29, 0.6);
    background-color: transparent;
    border: none;
    padding: 0;

    &:hover {
        cursor: pointer;
        background-color: rgba(25, 118, 210, 0.04);
    }
`;

const CreateCommentComponent = ({ parentId: string }: any) => {
    const { savePost } = usePostsContext() as PostsContextType;
    const { username } = useProfile() as IUserProfile;
    const [commentMessage, setCommentMessage] = useState('');

    return (
        <CreateCommentContainer>
            <ActionButton>
                <FontAwesomeIcon icon={faMessage} />
            </ActionButton>
            <InputField
                placeholder='Add Comment'
                onInput={(e) =>
                    setCommentMessage(e.currentTarget.textContent || '')
                }
                contentEditable
            ></InputField>
            <ActionButton>
                <FontAwesomeIcon icon={faCirclePlus} />
            </ActionButton>
        </CreateCommentContainer>
    );
};

export default CreateCommentComponent;
