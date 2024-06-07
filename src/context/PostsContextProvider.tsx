import {ReactNode, useState} from 'react';
import PostsContext from "./postscontext.ts";
import {Posts} from "../types/Posts"

interface PostsContextProviderProps {
    children: ReactNode;
}

const PostsContextProvider = ({children}: PostsContextProviderProps) => {

    const [posts, setPosts] = useState<Posts>([])

    return (
        <PostsContext.Provider value={{posts, setPosts}}>
            {children}
        </PostsContext.Provider>
    );
};

export default PostsContextProvider;