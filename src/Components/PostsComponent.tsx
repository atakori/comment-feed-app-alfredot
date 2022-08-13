import React, { useContext, useEffect } from "react";
import { PostsContextType } from "../types";
import { PostsContext } from "../context/postsContext";
import NoPostsFoundComponent from './NoPostsFoundComponent';

const PostsComponent = () => {
    const { posts } = useContext(PostsContext) as PostsContextType;
    
    useEffect(() => {
        console.log("Post has been created and stored in Context");
        console.log(posts);

    }, [posts])

    return posts.length === 0 ? <NoPostsFoundComponent/> : (
        <div>
            <h1> Posts will go here once there is a successful post!!!</h1>
        </div>
    );
  };
  
  export default PostsComponent;