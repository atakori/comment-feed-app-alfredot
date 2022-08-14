import React, { useContext, useState } from "react";
import { IComment, PostsContextType } from "../types";

export const PostsContext = React.createContext<PostsContextType | null>(null);

export function usePostsContext() {
    return useContext(PostsContext);
}

export function PostsProvider ({children}: any) {

    const [userPosts, setUserPosts] = useState<IComment[]>([])

    // POST: Create a new message/comment
    // To be replaced by Backend Call which stores posts & comments
    // Storing using Context API for purposes of MVP
    const savePost = (post: IComment) => {
        const { id, parentId, message, username, dateCreated } = post
        
        const newPost: IComment = {
            id,
            parentId,
            message,
            username,
            dateCreated
        }

        const updatedPosts = [...userPosts, newPost ]
        setUserPosts(updatedPosts)
    }

    return (
        <PostsContext.Provider value={{posts: userPosts, savePost}}>
            {children}
        </PostsContext.Provider>
    )
}