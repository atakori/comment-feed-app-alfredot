import { ReactComponentElement, ReactElement } from "react";
import { IComment } from "../types";
import styled from 'styled-components';
import CommentInfoComponent from "./CommentInfoComponent";

interface CommentsComponentProps{
    comments: IComment[];
}

const CommentsComponent = ({comments}: CommentsComponentProps) => {
    const renderComments = () => {
        return comments.map((comment) => {
                const {username, dateCreated, message} = comment
                return (
                    <CommentInfoComponent message={message} dateCreated={dateCreated} username={username} isComment={true}/>
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