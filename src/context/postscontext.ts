import {createContext} from "react";
import Posts from "../types/Posts"

const PostsContext = createContext<Posts>()

export default PostsContext;