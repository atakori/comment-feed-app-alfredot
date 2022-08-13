import React, { useContext, useEffect } from "react";
import { PostsContextType, IUserPost } from "../types";
import { PostsContext } from "../context/postsContext";
import NoPostsFoundComponent from './NoPostsFoundComponent';
import { PROFILEPHOTOURL } from "../constants";
import TimeAgo from 'javascript-time-ago'
import ReactTimeAgo from 'react-time-ago'
import en from 'javascript-time-ago/locale/en.json'

// Adding locale Time for "Time Since Posted"
TimeAgo.addDefaultLocale(en)

const ProfileFeedComponent = () => {
    const { posts } = useContext(PostsContext) as PostsContextType;
    
    useEffect(() => {
        console.log("Post has been created and stored in Context");
        console.log(posts);

    }, [posts])

    function renderPosts(posts: IUserPost[]) {
        return posts.map((post) => {
            const {username, datePosted, message } = post
            return (
                <div> 
                    <p>Picture goes here: {PROFILEPHOTOURL}</p>
                    <p>{username}</p>
                    <p>{message}</p>
                    <ReactTimeAgo date={datePosted} locale="en-US"/>
                </div>
            )
        })
    }

    return posts.length === 0 ? <NoPostsFoundComponent/> : (
        <div>
            <h1> Posts will go here once there is a successful post!!!</h1>

            {renderPosts(posts)}
            <p>Add Comment Box</p>
        </div>
    );
  };
  
  export default ProfileFeedComponent;