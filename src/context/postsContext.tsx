import React, { useState } from "react";
import { IUserPost, PostsContextType } from "../types";

export const PostsContext = React.createContext<PostsContextType | null>(null);

export function PostsProvider ({children}: any) {

    const [userPosts, setUserPosts] = useState<IUserPost[]>([])

    const savePost = (post: IUserPost) => {
        const { message, username, datePosted } = post
        const newPost: IUserPost = {
            message,
            username,
            datePosted
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