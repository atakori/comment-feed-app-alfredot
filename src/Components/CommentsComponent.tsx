import { IComment } from "../types";
import styled from 'styled-components';
import CommentInfoComponent from "./CommentInfoComponent";
import PostInteractionsComponent from "./PostInteractionsComponent";

interface CommentsComponentProps{
    comments: IComment[];
}

const CommentsComponent = ({comments}: CommentsComponentProps) => {
    const renderComments = () => {
        return comments.map((comment) => {
                const {username, dateCreated, message} = comment
                return (
                    <div>
                        <CommentInfoComponent message={message} dateCreated={dateCreated} username={username} isComment={true}/>
                        <PostInteractionsComponent isComment={true}/>
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