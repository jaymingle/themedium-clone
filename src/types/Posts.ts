interface Post{
    name: string,
    post: string,
    title: string,
    category: string,
    date: string,
    image: string
}

type Posts = Post[]

export type {Post, Posts};