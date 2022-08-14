import { ReactComponentElement, ReactElement } from "react";
import { IComment } from "../types";
import styled from 'styled-components';

interface CommentsComponentProps{
    comments: IComment[];
}

const CommentsComponent = ({comments}: CommentsComponentProps) => {
    const renderComments = () => {
        return comments.map((comment) => {
                const {username, dateCreated, message} = comment
                return (
                <div>
                    <p>{username}</p>
                    <p>{dateCreated.toDateString()}</p>
                    <p>{message}</p>
                </div>
                )
            })
    }
    
    return(
        <div>
            {renderComments()}
        </div>
    )
}

export default CommentsComponent;