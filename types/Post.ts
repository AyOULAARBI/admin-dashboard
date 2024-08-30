//Post and Comment interface's types to be used later on when checking for the validity of the posts
export interface Post {
    id: string;
    title: string;
    body: string,
    author: string;
    date: string;
    comments: PostComment[];
}

export interface PostComment {
    id: string;
    text: string;
    username: string;
}