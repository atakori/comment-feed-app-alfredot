import { IComment, IUserProfile } from "../types";
import CommentInfoComponent from "./CommentInfoComponent";
import PostInteractionsComponent from "./PostInteractionsComponent";
import { useUserProfileContext } from "../context/profileContext";

interface CommentsComponentProps{
    comments: IComment[];
}

const CommentsComponent = ({comments}: CommentsComponentProps) => {
    const { profileUsername } = useUserProfileContext() as IUserProfile;
    
    const renderComments = () => {
        return comments.map((comment) => {
                const {username, dateCreated, message, id, likes} = comment;
                const isLiked = likes.includes(profileUsername);
                const amountOfLikes = likes.length;

                return (
                    <div key={id}>
                        <CommentInfoComponent message={message} dateCreated={dateCreated} username={username} isComment={true}/>
                        <PostInteractionsComponent amountOfLikes={amountOfLikes} isLiked={isLiked} commentId={id} isComment={true}/>
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