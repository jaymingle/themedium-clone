import React, {useState} from 'react';
import PostsContext from "./postscontext.ts";
import Posts from "../types/Posts"

const PostsContextProvider = ({children}) => {

    const [posts, setPosts] = useState<Posts>([])

    return (
        <PostsContext.Provider value={{posts, setPosts}}>
            {children}
        </PostsContext.Provider>
    );
};

export default PostsContextProvider;