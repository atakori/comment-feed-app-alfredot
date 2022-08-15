import { IComment, IUserProfile } from "../types";
import PostInfoComponent from "./PostInfoComponent";
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

                // Looks at each comment where the parentId == current id
                const amountOfComments = comments.filter((comment) => comment.parentId === id).length

                return (
                    <div key={id}>
                        <PostInfoComponent message={message} dateCreated={dateCreated} username={username} isComment={true}/>
                        <PostInteractionsComponent amountOfLikes={amountOfLikes} amountOfComments={amountOfComments} isLiked={isLiked} commentId={id} isComment={true}/>
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