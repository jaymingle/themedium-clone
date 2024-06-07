import {createContext} from "react";
import {Post } from "../types/Posts"

interface PostsContextType{
    posts: Post[];
    setPosts:  (posts: Post[]) => void;
}


const PostsContext = createContext<PostsContextType>({
    posts: [],
    setPosts: () => {}
})

export default PostsContext;